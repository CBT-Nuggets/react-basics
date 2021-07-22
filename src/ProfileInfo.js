import PropTypes from 'prop-types';
import styles from './ProfileInfo.module.css';

const ProfileInfo = ({ person, onClick }) => {
	return (
		<div onClick={onClick}>
			<div className={styles.profilePicContainer}>
				<div className={styles.profilePicWrap}>
					<img
						onClick={() => alert(`That's ${person.name}!`)}
						className={styles.profilePic}
						src={person.profilePicUrl}
						alt={`${person.name} smiling`} />
				</div>
			</div>
			<button onClick={() => alert(`Name: ${person.name}, Age; ${person.age}`)}>Display Summary</button>
			<h3 className={styles.detailHeading}>Name</h3>
			<p>{person.name}</p>
			<h3 className={styles.detailHeading}>Age</h3>
			<p>{person.age}</p>
			<h3 className={styles.detailHeading}>Bio</h3>
			<p>{person.bio}</p>
			<h3 className={styles.detailHeading}>Birthday</h3>
			<p>{person.birthday}</p>
			<h3 className={styles.detailHeading}>Interests</h3>
			<p>{person.interests.join(', ')}</p>
		</div>
	);
}

ProfileInfo.propTypes = {
	person: PropTypes.shape({
		name: PropTypes.string.isRequired,
		profilePicUrl: PropTypes.string,
		age: PropTypes.number,
		bio: PropTypes.string,
		birthday: PropTypes.string,
		interests: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
}

export { ProfileInfo };