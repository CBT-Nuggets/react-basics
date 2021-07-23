import { FavoritesContext } from '../contexts/FavoritesContext';
import { useState } from 'react';

const FavoritesTracker = ({ children }) => {
	const existingState = JSON.parse(localStorage.getItem('favoritesIds'));

	const [favoritesIds, setFavoritesIds] = useState(existingState || []);

	const toggleFavorite = (personId) => {
		if (favoritesIds.includes(personId)) {
			const newFavoritesIds = favoritesIds.filter(id => id !== personId);
			setFavoritesIds(newFavoritesIds);
			localStorage.setItem('favoritesIds', JSON.stringify(newFavoritesIds));
		} else {
			const newFavoritesIds = favoritesIds.concat(personId);
			setFavoritesIds(newFavoritesIds);
			localStorage.setItem('favoritesIds', JSON.stringify(newFavoritesIds));
		}
	}

	return (
		<FavoritesContext.Provider value={{ favoritesIds, toggleFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
}

export { FavoritesTracker };