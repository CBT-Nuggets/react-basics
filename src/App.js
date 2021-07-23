import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { FavoritesTracker } from './components/FavoritesTracker';
import { NavBar } from './components/NavBar';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { UserProfilePage } from './pages/UserProfilePage';
import styles from './App.module.css';

export const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<FavoritesTracker>
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
			</FavoritesTracker>
		</BrowserRouter>
	);
}
