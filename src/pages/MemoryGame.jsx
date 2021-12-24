import React from "react";
import { useEffect, useState } from "react";
import SingleCard from "@components/memory/SingleCard";
import "@styles/MemoryGame.css";
import img1 from "../assets/img/tkdkids1.png";
import img2 from "../assets/img/tkdkids2.png";
import img3 from "../assets/img/tkdkids3.png";
import img4 from "../assets/img/tkdkids4.png";
import img5 from "../assets/img/tkdkids5.png";
import img6 from "../assets/img/tkdkids6.png";

const cardImages = [
    { src: img1, matched: false },
    { src: img2, matched: false },
    { src: img3, matched: false },
    { src: img4, matched: false },
    { src: img5, matched: false },
    { src: img6, matched: false },
];

function App() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    // shufle cards
    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setCards(shuffledCards);
        setTurns(0);
        setChoiceOne(null);
        setChoiceTwo(null);
    };

    // handle click on card
    const handleChoice = (card) => {
        choiceOne && choiceOne !== card
            ? setChoiceTwo(card)
            : setChoiceOne(card);
    };

    // compoare 2 selected cards

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src) {
                setCards((prevCards) => {
                    return prevCards.map((card) => {
                        if (card.src === choiceOne.src) {
                            return { ...card, matched: true };
                        } else {
                            return card;
                        }
                    });
                });
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 1000);
            }
        }
    }, [choiceOne, choiceTwo]);

    //start a new game automatically

    useEffect(() => {
        shuffleCards();
    }, []);

    // rest choices and increase turn

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns((prevTurns) => prevTurns + 1);
        setDisabled(false);
    };

    return (
        <div className="container d-flex flex-column min-vh-100 text-center">
            <h1 className="mt-3">Taekwon-Do Memory</h1>
            <div className="container mt-4">
                <button onClick={shuffleCards}>New Game</button>
            </div>
            <div className="card-grid">
                {cards.map((card) => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={
                            card === choiceOne ||
                            card === choiceTwo ||
                            card.matched
                        }
                        disabled={disabled}
                    />
                ))}
            </div>
            <div className="container mt-4">
                <h2 className="mt-2">Turns: {turns}</h2>
            </div>
        </div>
    );
}

export default App;
