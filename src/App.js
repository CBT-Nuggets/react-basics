import { myProfileData, friendsData } from './data';
import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './WelcomeMessage';
import './App.css';

export const App = () => {
	return (
		<div>
			<h1>Friend Tracker</h1>
			<div className="content-container">
				<WelcomeMessage name={myProfileData.name} />
				<h2 className="content-heading">My Profile</h2>
				<ProfileInfo person={myProfileData} />
				<h2 className="content-heading">My Friends</h2>
				<ProfileInfo person={friendsData[0]} />
				<ProfileInfo person={friendsData[1]} />
				<ProfileInfo person={friendsData[2]} />
			</div>
		</div>
	);
}
