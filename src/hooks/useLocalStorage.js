import { useState } from 'react';

function useLocalStorage(itemName, initialValue) {
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
	};

	const [item, setItems] = useState(parsedItem);

	return { item, saveItem, saveItemPoints, restartItem };
}

export default useLocalStorage;
