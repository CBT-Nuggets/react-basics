import PropTypes from 'prop-types';
import { PersonCard } from './PersonCard';
import styles from './PeopleList.module.css';

const PeopleList = ({
	people,
	onClickPerson = () => {},
	actionName,
	onPersonAction = () => {},
}) => {
	return (
		<div className={styles.peopleList}>
			{people.map(friend => (
				<div key={friend.id} className={styles.peopleListItem}>
					<PersonCard
						person={friend}
						onClick={() => onClickPerson(friend.id)}
						actionName={actionName}
						onAction={() => onPersonAction(friend.id)} />
				</div>
			))}
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