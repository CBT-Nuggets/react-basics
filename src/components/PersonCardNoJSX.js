import React from 'react';
import styles from './PersonCard.module.css';

export const PersonCard = ({
	person,
	onClick = () => {},
	actionName,
	onAction = () => {},
}) => {
	// Ignore a lot of the original code,
	// it's very repetitive. Just do the cardDetails part
	return React.createElement(
		'div',
		{ className: styles.cardDetails },
		[
			React.createElement(
				'h3',
				{},
				['Name'],
			),
			React.createElement(
				'p',
				{},
				[person.name],
			),
			React.createElement(
				'h3',
				{},
				['Age'],
			),
			React.createElement(
				'p',
				{},
				[person.age],
			),
		]
	)
}