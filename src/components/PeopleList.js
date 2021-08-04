import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PersonCard } from './PersonCard';
import styles from './PeopleList.module.css';
import { NewFriendCard } from './NewFriendCard';

const PeopleList = ({
	people,
	onClickPerson = () => {},
	actionName,
	onPersonAction = () => {},
	allowAdditions,
}) => {
	const history = useHistory();

	return (
		<div className={styles.peopleList} role="list">
			{people.map(friend => (
				<div key={friend.id} className={styles.peopleListItem}>
					<PersonCard
						person={friend}
						onClick={() => onClickPerson(friend.id)}
						actionName={actionName}
						onAction={() => onPersonAction(friend.id)} />
				</div>
			))}
			{allowAdditions && <div key="new-friend-card" className={styles.peopleListItem}>
				<NewFriendCard onClick={() => history.push('/new-friend')} />
			</div>}
		</div>
	);
}

PeopleList.propTypes = {
	people: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			age: PropTypes.number,
		}),
	).isRequired,
	onClickPerson: PropTypes.func,
	actionName: PropTypes.string,
	onPersonAction: PropTypes.func,
};

export { PeopleList };