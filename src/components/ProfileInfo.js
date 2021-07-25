import PropTypes from 'prop-types';
import { Tag } from './Tag';
import styles from './ProfileInfo.module.css';

const ProfileInfo = ({ person, actions = [] }) => {
	return (
		<>
		<div className={styles.profilePicContainer}>
			<div className={styles.profilePicWrap}>
				{person.profilePicUrl && <img
					className={styles.profilePic}
					src={person.profilePicUrl}
					alt={`${person.name} smiling`} />}
			</div>
		</div>
		<h3 className={styles.detailHeading}>Name</h3>
		<p>{person.name}</p>
		<h3 className={styles.detailHeading}>Age</h3>
		<p>{person.age}</p>
		<h3 className={styles.detailHeading}>Bio</h3>
		<p>{person.bio}</p>
		<h3 className={styles.detailHeading}>Birthday</h3>
		<p>{person.birthday}</p>
		<h3 className={styles.detailHeading}>Interests</h3>
		<div>{person.interests.map(interest => <Tag key={interest} text={interest} />)}</div>
		{actions.map(action => (
			<button
				key={action.actionName}
				className={styles.actionButton}
				onClick={action.handler}>{action.actionName}</button>
		))}
		</>
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
	actions: PropTypes.arrayOf(PropTypes.shape({
		actionName: PropTypes.string.isRequired,
		handler: PropTypes.func.isRequired,
	})),
}

export { ProfileInfo };