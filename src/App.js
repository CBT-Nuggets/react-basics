import { ProfileInfo } from './ProfileInfo';
import { WelcomeMessage } from './WelcomeMessage';
import './App.css';

export const App = () => {
	return (
		<div>
			<h1>Friend Tracker</h1>
			<WelcomeMessage />
			<ProfileInfo />
		</div>
	);
}
