import { useState } from 'react';
import { myProfileData, friendsData } from './data';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './WelcomeMessage';
import { PeopleList } from './PeopleList';
import styles from './App.module.css';

export const App = () => {
	const [favorites, setFavorites] = useState([]);
	const [nonFavorites, setNonFavorites] = useState(friendsData);

	const toggleFavorite = (personId) => {
		if (favorites.includes(personId)) {
			setNonFavorites(nonFavorites.concat(favorites.find(person => person.id === personId)));
			setFavorites(favorites.filter(person => person.id !== personId));
		} else {
			setFavorites(favorites.concat(nonFavorites.find(person => person.id === personId)));
			setNonFavorites(nonFavorites.filter(person => person.id !== personId));
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
