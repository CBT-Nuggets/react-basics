import { useState } from 'react';
import { myProfileData, friendsData } from './data';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './WelcomeMessage';
import { PersonCard } from './PersonCard';
import styles from './App.module.css';

export const App = () => {
	const [favoriteIds, setFavoriteIds] = useState([]);

	const toggleFavorite = (personId) => {
		if (favoriteIds.includes(personId)) {
			setFavoriteIds(favoriteIds.filter(id => id !== personId));
		} else {
			setFavoriteIds(favoriteIds.concat(personId));
		}
	}

	// let friendElements = [];

	// for (let friend of friendsData) {
	// 	console.log(friend);
	// 	friendElements.push(
	// 		<div key={friend.id} className={styles.peopleListItem}>
	// 			<PersonCard
	// 				person={friend}
	// 				isFavorite={favoriteIds.includes(friend.id)}
	// 				onToggleFavorite={() => toggleFavorite(friend.id)} />
	// 		</div>
	// 	);
	// }

	return (
		<div>
			<h1>Friend Tracker</h1>
			<div className={styles.contentContainer}>
				<WelcomeMessage name={myProfileData.name} />
				<h2 className={styles.contentHeading}>My Profile</h2>
				<ProfileInfo person={myProfileData} />
				<h2 className={styles.contentHeading}>My Friends</h2>
				<p>You currently have {favoriteIds.length} favorites</p>
				<div className={styles.peopleList}>
					{/* {friendElements} */}
					{friendsData.map(friend => (
						<div key={friend.id} className={styles.peopleListItem}>
							<PersonCard
								person={friend}
								isFavorite={favoriteIds.includes(friend.id)}
								onToggleFavorite={() => toggleFavorite(friend.id)} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
