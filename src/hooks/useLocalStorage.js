import { useState, useContext } from 'react';
import { AuthContext } from '@context/AuthContext.js';

function useLocalStorage(itemName, initialValue) {
	const { user, updateUserPoints } = useContext(AuthContext);

	const localStorageItem = localStorage.getItem(itemName);
	let parsedItem;

	if (!localStorageItem) {
		localStorage.setItem(itemName, JSON.stringify(initialValue));
		parsedItem = initialValue;
	} else {
		parsedItem = JSON.parse(localStorageItem);
	}

	const saveItem = newItem => {
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItems(newItem);
	};

	const saveItemPoints = points => {
		let newPoints = item + points;
		localStorage.setItem(itemName, newPoints);
		setItems(newPoints);
	};

	const restartItem = () => {
		localStorage.setItem(itemName, initialValue);
		setItems(initialValue);
		updateUserPoints(-5000, user.uid);
	};

	const [item, setItems] = useState(parsedItem);

	return { item, saveItem, saveItemPoints, restartItem };
}

export default useLocalStorage;
