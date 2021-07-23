import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { UserProfilePage } from './pages/UserProfilePage';
import styles from './App.module.css';
import { FavoritesContext } from './contexts/FavoritesContext';

export const App = () => {
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
		<BrowserRouter>
			<NavBar />
			<FavoritesContext.Provider value={{ favoritesIds, toggleFavorite }}>
				<div className={styles.contentContainer}>
					<Route path="/" exact>
						<FriendsPage />
					</Route>
					<Route path="/user-profile">
						<UserProfilePage />
					</Route>
					<Route path="/friends/:friendId">
						<FriendDetailPage />
					</Route>
				</div>
			</FavoritesContext.Provider>
		</BrowserRouter>
	);
}
