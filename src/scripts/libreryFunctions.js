const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')


// Deberian ser variables env
const JWT_SECRET = 'IVaUKliXQkhgo9RrLvd3EmyObBJAsz4N';
const URL_API = 'https://kwanggae-api.vercel.app'


const verifyUser = function (email, password, res){
    // Config que se usa para hacer el fetch
    const otherParamsGetByMail = {
        headers: {
            "content-type":"application/json; charset=UTF-8"
        },
        // mode: 'no-cors',
        method: "GET"
    };
    fetch((URL_API+'/usuario/'+ email),otherParamsGetByMail)
        .then(data => {return data.json()})
        .then(docu => {
            if (validatePassword(password, docu.contraseña)) {
                console.log('Start session')
                const payload = {
                    sub: docu._id,
                    user: docu
                }
                const token = jwt.sign(payload,JWT_SECRET);
                // Hacer que la cookie tenga un tiempo de vida
                document.cookie = 'tkn=' + token + ';path=/';
                
                window.location.href = './Challenge'
            }else{
                console.log('Sorry, check the data');
            }

        })
        .catch(err => {console.log(err)})

}

const createUser = function (username, foto, mail, password, confirmPassword){
    if(password !== confirmPassword){
        // Mensaje de errors
        console.log('Error')
    }else{
        const HashPassword = generateHash(password);
        
        let data = {
            nombreUsuario: username,
            foto: foto,
            mail: mail,
            contraseña: HashPassword,
            puntos: 0
        }

        const otherParamsPOST = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type":"application/x-www-form-urlencoded; charset=UTF-8"
            },
            mode: 'no-cors',
            
        };
        
        fetch((URL_API+'/usuarios/'), otherParamsPOST)
            .then(data => {window.location.href = '/'})
            // .then(newUser => {
            // })
            .catch(error => {console.log(error)})
    }
}

const editPoints = function (points) {
    // Se obtiene el valorr del token que esta en la cookie
    let listCookies = ((document.cookie).split(';'))
    let miToken = '';
    listCookies.forEach(ele => {
        let keyAndValue = ele.split('=');
        keyAndValue[0] = keyAndValue[0].replace(' ','');
        if(keyAndValue[0] == 'tkn'){
            miToken = keyAndValue[1] 
        }
    });
    const payload = jwt.verify(miToken,JWT_SECRET);
    console.log((URL_API+'/usuarios/'+payload.sub))

    const otherParamsPUT = {
        mode: 'cors',
        headers: {
            "content-type":"application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            "puntos": (Number(points) + payload.user.puntos)
        }),
        method: "PUT"
    };
    fetch((URL_API+'/usuarios/'+payload.sub), otherParamsPUT)
        .then(data => {return data.json()})
        .then(response => {
            payload.user.puntos = Number(points) + payload.user.puntos
            generateCookie(payload.user)
        })
        .catch(err => {console.log(err)})
}

const sendMail = function (username,note, quiz){    
    const otherParamsPOSTMail = {
        headers: {
            "content-type":"application/x-www-form-urlencoded"
        },
        body: JSON.stringify({
            "username": username,
            "note": note,
            "quiz": quiz
        }),
        mode: 'no-cors',
        method: "POST"
    };
    fetch((URL_API+'/sendmail'), otherParamsPOSTMail)
        .then(data => {
            window.location.href = '/Quiz'
            // Hacer verificacion de que se envio el mail
        })
        .catch(error => {console.log(error)})
}

// HACER QUE CUANDO SE LOGUEE SE PONGAN LOS PUNTOS DE LOS CHALLENGS 
// Y SE BORREN LOS DESAFIOS QUE ESTAN EN EL LOCAL STORAGE


const isLogged = function () {
    let listCookies = ((document.cookie).split(';'))
    let miToken = '';
    listCookies.forEach(ele => {
        let keyAndValue = ele.split('=');
        keyAndValue[0] = keyAndValue[0].replace(' ','');
        if(keyAndValue[0] == 'tkn'){
            miToken = keyAndValue[1] 
        }
    });
    // Verificar que el token sea un usuario 
    console.log(miToken)
    if(miToken !== ''){
		window.location.href = '/login';   
    }
}


// Hace la cookie con la nueva info del usuario al cambiar los puntos
const generateCookie = function (user) {
    const payload = {
        sub: user._id,
        user: user
    }
    const token = jwt.sign(payload,JWT_SECRET);
    // Hacer que la cookie tenga un tiempo de vida
    document.cookie = 'tkn=' + token + ';path=/';
}

const generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}
const validatePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}

module.exports = { verifyUser, createUser, editPoints, sendMail, isLogged}