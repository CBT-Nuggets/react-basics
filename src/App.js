import { myProfileData, friendsData } from './data';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './WelcomeMessage';
import { PersonCard } from './PersonCard';
import styles from './App.module.css';

function sayHello() {
	alert('Hello!');
}

function sayHelloTo(name) {
	alert(`Hello ${name}!`);
}

export const App = () => {
	return (
		<div>
			<h1>Friend Tracker</h1>
			<button onClick={sayHello}>Say Hello</button>
			{/* <button onClick={sayHello('Shaun')}>Say Hello</button> No!! */}
			<button onClick={() => sayHelloTo('Shaun')}>Say Hello to Shaun</button>
			<div className={styles.contentContainer}>
				<WelcomeMessage name={myProfileData.name} />
				<h2 className={styles.contentHeading}>My Profile</h2>
				<ProfileInfo person={myProfileData} onClick={() => alert('Hello??')} />
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
