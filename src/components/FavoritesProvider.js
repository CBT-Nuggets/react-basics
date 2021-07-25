import { useState, useEffect } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';

const FavoritesProvider = ({ children }) => {
	const existingState = JSON.parse(localStorage.getItem('favoritesIds'));

	const [favoritesIds, setFavoritesIds] = useState(existingState || []);

	// There is a SLIGHT difference here - this will be called on first render,
	// AS WELL as whenever favoritesIds is changed. Before, it would only
	// re-render on change
	useEffect(() => {
		localStorage.setItem('favoritesIds', JSON.stringify(favoritesIds));
	}, [favoritesIds]);

	const toggleFavorite = (personId) => {
		if (favoritesIds.includes(personId)) {
			const newFavoritesIds = favoritesIds.filter(id => id !== personId);
			setFavoritesIds(newFavoritesIds);
		} else {
			const newFavoritesIds = favoritesIds.concat(personId);
			setFavoritesIds(newFavoritesIds);
		}
	}

	return (
		<FavoritesContext.Provider value={{ favoritesIds, toggleFavorite }}>
			{children}
		</FavoritesContext.Provider>
	);
}

export { FavoritesProvider };