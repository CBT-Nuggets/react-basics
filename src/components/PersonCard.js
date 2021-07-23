import PropTypes from 'prop-types';
import styles from './PersonCard.module.css';

const PersonCard = ({ person, onClick = () => {} }) => {
	return (
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
	);
}

PersonCard.propTypes = {
	person: PropTypes.shape({
		name: PropTypes.string.isRequired,
		age: PropTypes.number,
	}).isRequired,
};

export { PersonCard };