import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { myProfileData, friendsData } from './data';
import { NavBar } from './NavBar';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './WelcomeMessage';
import { PeopleList } from './PeopleList';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { UserProfilePage } from './pages/UserProfilePage';
import styles from './App.module.css';

export const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Route path="/" exact>
				<FriendsPage />
			</Route>
			<Route path="/user-profile">
				<UserProfilePage />
			</Route>
			<Route path="/friends/:friendId">
				<FriendDetailPage />
			</Route>
		</BrowserRouter>
	);
}

// COMMENT OUT ALL THIS TEMPORARILY

// export const App = () => {
	// const existingState = JSON.parse(localStorage.getItem('favoritesIds'));

	// const [favoritesIds, setFavoritesIds] = useState(existingState || []);

	// const favorites = favoritesIds.map(id => friendsData.find(friend => friend.id === id));
	// const nonFavorites = friendsData.filter(friend => !favoritesIds.includes(friend.id));

	// const toggleFavorite = (personId) => {
	// 	if (favoritesIds.includes(personId)) {
	// 		const newFavoritesIds = favoritesIds.filter(id => id !== personId);
	// 		setFavoritesIds(newFavoritesIds);
	// 		localStorage.setItem('favoritesIds', JSON.stringify(newFavoritesIds));
	// 	} else {
	// 		const newFavoritesIds = favoritesIds.concat(personId);
	// 		setFavoritesIds(newFavoritesIds);
	// 		localStorage.setItem('favoritesIds', JSON.stringify(newFavoritesIds));
	// 	}
	// }

	// return (
	// 	<div>
	// 		<h1>Friend Tracker</h1>
	// 		<div className={styles.contentContainer}>
	// 			<WelcomeMessage name={myProfileData.name} />
	// 			<h2 className={styles.contentHeading}>My Profile</h2>
	// 			<ProfileInfo person={myProfileData} />
	// 			<h2 className={styles.contentHeading}>Favorites</h2>
	// 			<p>You currently have {favorites.length} favorites</p>
	// 			<PeopleList people={favorites} onClickPerson={toggleFavorite} />
	// 			<h2 className={styles.contentHeading}>My Friends</h2>
	// 			<PeopleList people={nonFavorites} onClickPerson={toggleFavorite} />
	// 		</div>
	// 	</div>
	// );
// }
