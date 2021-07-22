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
					<div className={styles.peopleListItem}>
						<PersonCard
							person={friendsData[0]}
							isFavorite={favoriteIds.includes(friendsData[0].id)}
							onToggleFavorite={() => toggleFavorite(friendsData[0].id)} />
					</div>
					<div className={styles.peopleListItem}>
						<PersonCard
							person={friendsData[1]}
							isFavorite={favoriteIds.includes(friendsData[1].id)}
							onToggleFavorite={() => toggleFavorite(friendsData[1].id)} />
					</div>
					<div className={styles.peopleListItem}>
						<PersonCard
							person={friendsData[2]}
							isFavorite={favoriteIds.includes(friendsData[2].id)}
							onToggleFavorite={() => toggleFavorite(friendsData[2].id)} />
					</div>
				</div>
			</div>
		</div>
	);
}
