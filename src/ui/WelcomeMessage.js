import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './WelcomeMessage.module.css';

const WelcomeMessage = ({ name }) => {
	const existingVisibility = localStorage.getItem('welcomeMessageVisibility') === 'true';

	const [isVisible, setIsVisible] = useState(existingVisibility === false ? false : true);

	useEffect(() => {
		localStorage.setItem('welcomeMessageVisibility', JSON.stringify());
	}, [isVisible]);

	const toggleVisible = () => {
		const newVisibility = !isVisible;
		setIsVisible(newVisibility);
	}

	return isVisible ? (
		<div className={styles.welcomeMessage}>
			<h2>
				Welcome to the Friend-Tracker app, {name}!
			</h2>
			<button onClick={toggleVisible}>Hide</button>
		</div>
	) : null;
}

WelcomeMessage.propTypes = {
	name: PropTypes.string.isRequired,
}

export { WelcomeMessage };