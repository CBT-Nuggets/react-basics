import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomeMessage.module.css';

const WelcomeMessage = ({ name }) => {
	const [isVisible, setIsVisible] = useState(true);

	return isVisible ? (
		<div className={styles.welcomeMessage}>
			<h2>
				Welcome to the Friend-Tracker app, {name}!
			</h2>
			<button onClick={() => setIsVisible(false)}>Hide</button>
		</div>
	) : null;
}

WelcomeMessage.propTypes = {
	name: PropTypes.string.isRequired,
}

export { WelcomeMessage };