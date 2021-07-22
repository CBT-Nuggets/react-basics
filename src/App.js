import { useState } from 'react';
import { myProfileData, friendsData } from './data';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './WelcomeMessage';
import { PersonCard } from './PersonCard';
import styles from './App.module.css';

export const App = () => {
	return (
		<div>
			<h1>Friend Tracker</h1>
			<div className={styles.contentContainer}>
				<WelcomeMessage name={myProfileData.name} />
				<h2 className={styles.contentHeading}>My Profile</h2>
				<ProfileInfo person={myProfileData} />
				<h2 className={styles.contentHeading}>My Friends</h2>
				<div className={styles.peopleList}>
					<div className={styles.peopleListItem}>
						<PersonCard person={friendsData[0]} />
					</div>
					<div className={styles.peopleListItem}>
						<PersonCard person={friendsData[1]} />
					</div>
					<div className={styles.peopleListItem}>
						<PersonCard person={friendsData[2]} />
					</div>
				</div>
			</div>
		</div>
	);
}
