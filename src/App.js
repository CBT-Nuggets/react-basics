import { useState } from 'react';
import { myProfileData, friendsData } from './data';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './WelcomeMessage';
import { PersonCard } from './PersonCard';
import styles from './App.module.css';

export const App = () => {
	const [showWelcomeMessage, setShouldShowWelcomeMessage] = useState(true);

	function toggleWelcomeMessage() {
		setShouldShowWelcomeMessage(!showWelcomeMessage);
	}

	return (
		<div>
			<h1>Friend Tracker</h1>
			<div className={styles.contentContainer}>
				{showWelcomeMessage && <WelcomeMessage name={myProfileData.name} />}
				<button onClick={toggleWelcomeMessage}>Toggle Message</button>
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
