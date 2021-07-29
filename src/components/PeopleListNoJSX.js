import React from 'react';
import { useHistory } from 'react-router-dom';
import { PersonCard } from './PersonCard';
import styles from './PeopleList.module.css';
import { NewFriendCard } from './NewFriendCard';

export const PeopleListNoJSX = ({
	people,
	onClickPerson = () => {},
	actionName,
	onPersonAction = () => {},
	allowAdditions,
}) => {
	const history = useHistory();

	// return (
	// 	<div className={styles.peopleList}>
	// 		{people.map(friend => (
	// 			<div key={friend.id} className={styles.peopleListItem}>
	// 				<PersonCard
	// 					person={friend}
	// 					onClick={() => onClickPerson(friend.id)}
	// 					actionName={actionName}
	// 					onAction={() => onPersonAction(friend.id)} />
	// 			</div>
	// 		))}
	// 		{allowAdditions && <div key="new-friend-card" className={styles.peopleListItem}>
	// 			<NewFriendCard onClick={() => history.push('/new-friend')} />
	// 		</div>}
	// 	</div>
	// );

	return React.createElement(
		'div',
		{ className: styles.peopleList },
		people.map(friend =>
			React.createElement(
				PersonCard,
				{
					person: friend,
					onClick: () => onClickPerson(friend.id),
					actionName,
					onAction: () => onPersonAction(friend.id),
				},
			),
		),
	)
}