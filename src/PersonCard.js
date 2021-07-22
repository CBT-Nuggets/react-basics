import PropTypes from 'prop-types';
import styles from './PersonCard.module.css';

const PersonCard = ({ person, isFavorite, onToggleFavorite }) => {
	return (
		<div onClick={onToggleFavorite}
			className={isFavorite ? styles.cardFavorite : styles.cardNormal}
		>
			<div className={styles.profilePicLeft}>
				<div className={styles.profilePicWrap}>
					<img
						className={styles.profilePic}
						src={person.profilePicUrl}
						alt={`${person.name} smiling`} />
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