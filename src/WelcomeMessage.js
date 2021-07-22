import PropTypes from 'prop-types';
import styles from './WelcomeMessage.module.css';

const WelcomeMessage = ({ name }) => {
	return (
		<h2 className={styles.welcomeMessage}>
			Welcome to the Friend-Tracker app, {name}!
		</h2>
	);
}

WelcomeMessage.propTypes = {
	name: PropTypes.string.isRequired,
}

export { WelcomeMessage };