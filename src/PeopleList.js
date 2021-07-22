import PropTypes from 'prop-types';
import { PersonCard } from './PersonCard';
import styles from './PeopleList.module.css';

const PeopleList = ({ people, onClickPerson }) => {
	console.log(people);
	return (
		<div className={styles.peopleList}>
			{people.map(friend => (
				<div key={friend.id} className={styles.peopleListItem}>
					<PersonCard
						person={friend}
						onClick={() => onClickPerson(friend.id)} />
				</div>
			))}
		</div>
	)
}

PeopleList.propTypes = {
	people: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			age: PropTypes.number,
		}),
	).isRequired,
};

export { PeopleList };