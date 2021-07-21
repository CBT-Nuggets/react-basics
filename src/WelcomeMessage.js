import { myProfileData } from './data';

export const WelcomeMessage = () => {
	return (
		<h2>Welcome to the Friend-Tracker app, {myProfileData.name}!</h2>
	);
}
