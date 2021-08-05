import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomeMessage.module.css';

const WelcomeMessage = ({ name }) => {
	const alreadyHidden = localStorage.getItem('welcomeMessageHidden') === 'yes';

	const [isVisible, setIsVisible] = useState(alreadyHidden ? false : true);

	const hide = () => {
		setIsVisible(false);
		localStorage.setItem('welcomeMessageHidden', 'yes');
	}

	return isVisible ? (
		<div className={styles.welcomeMessage}>
			<h2>
				Welcome to the Friend-Tracker app, {name}!
			</h2>
			<button onClick={hide}>Hide</button>
		</div>
	) : null;
}

WelcomeMessage.propTypes = {
	name: PropTypes.string.isRequired,
}

export { WelcomeMessage };