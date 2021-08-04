import PropTypes from 'prop-types';
import styles from './PersonCard.module.css';

const PersonCard = ({
	person,
	onClick = () => {},
	actionName,
	onAction = () => {},
}) => {
	return (
		<div onClick={() => onClick()} className={styles.cardContainer} role="listitem">
			<div className={styles.detailsContainer}>
				<div className={styles.profilePicLeft}>
					<div className={styles.profilePicWrap}>
						{person.profilePicUrl && <img
							className={styles.profilePic}
							src={person.profilePicUrl}
							alt={`${person.name} thumbnail`} />}
					</div>
				</div>
				<div className={styles.cardDetails}>
					<h3>Name</h3>
					<p>{person.name}</p>
					<h3>Age</h3>
					<p>{person.age}</p>
				</div>
			</div>
			{actionName && onAction && (
				<button
					onClick={e => { onAction(); e.stopPropagation(); }}
					className={styles.actionButton}
				>{actionName}</button>
			)}
		</div>
	);
}

PersonCard.propTypes = {
	person: PropTypes.shape({
		name: PropTypes.string.isRequired,
		age: PropTypes.number,
	}).isRequired,
	onClick: PropTypes.func,
	actionName: PropTypes.string,
	onAction: PropTypes.func,
};

export { PersonCard };