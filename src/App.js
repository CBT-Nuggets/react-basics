import { useState } from 'react';
import { myProfileData, friendsData } from './data';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './WelcomeMessage';
import { PeopleList } from './PeopleList';
import styles from './App.module.css';

export const App = () => {
	const [favoritesIds, setFavoritesIds] = useState([]);

	const favorites = favoritesIds.map(id => friendsData.find(friend => friend.id === id));
	const nonFavorites = friendsData.filter(friend => !favoritesIds.includes(friend.id));

	const toggleFavorite = (personId) => {
		if (favoritesIds.includes(personId)) {
			setFavoritesIds(favoritesIds.filter(id => id !== personId));
		} else {
			setFavoritesIds(favoritesIds.concat(personId));
		}
	}

	return (
		<div>
			<h1>Friend Tracker</h1>
			<div className={styles.contentContainer}>
				<WelcomeMessage name={myProfileData.name} />
				<h2 className={styles.contentHeading}>My Profile</h2>
				<ProfileInfo person={myProfileData} />
				<h2 className={styles.contentHeading}>Favorites</h2>
				<p>You currently have {favorites.length} favorites</p>
				<PeopleList people={favorites} onClickPerson={toggleFavorite} />
				<h2 className={styles.contentHeading}>My Friends</h2>
				<PeopleList people={nonFavorites} onClickPerson={toggleFavorite} />
			</div>
		</div>
	);
}
