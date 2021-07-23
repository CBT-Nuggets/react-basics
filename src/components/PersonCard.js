import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PersonCard.module.css';

const PersonCard = ({ person, onClick = () => {} }) => {
	return (
		// <Link to={`/friends/${person.id}`}> This is one way to do it, but makes everything blue...
			<div onClick={onClick} className={styles.cardContainer}>
				<div className={styles.profilePicLeft}>
					<div className={styles.profilePicWrap}>
						<img
							className={styles.profilePic}
							src={person.profilePicUrl}
							alt={`${person.name} thumbnail`} />
					</div>
				</div>
				<div className={styles.cardDetails}>
					<h3>Name</h3>
					<p>{person.name}</p>
					<h3>Age</h3>
					<p>{person.age}</p>
				</div>
			</div>
		// </Link>
	);
}

PersonCard.propTypes = {
	person: PropTypes.shape({
		name: PropTypes.string.isRequired,
		age: PropTypes.number,
	}).isRequired,
};

export { PersonCard };