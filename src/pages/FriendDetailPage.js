import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { friendsData } from "../data";
import { ProfileInfo } from '../components/ProfileInfo';

const FriendDetailPage = ({ favoritesIds, onToggleFavorite }) => {
	const { friendId } = useParams();
	const selectedFriend = friendsData.find(friend => friend.id === friendId);

	const isFavorite = favoritesIds.includes(friendId);

	return selectedFriend ? (
		<ProfileInfo
			person={selectedFriend}
			actionName={isFavorite ? "Remove from favorites" : "Add to favorites"}
			onAction={() => onToggleFavorite(friendId)} />
	) : (
		<>
		<p>Oops! Couldn't find that friend</p>
		<Link to="/">
			<button>Back to Home</button>
		</Link>
		</>
	);
}

FriendDetailPage.propTypes = {
	favoritesIds: PropTypes.arrayOf(PropTypes.string).isRequired,
	onToggleFavorite: PropTypes.func.isRequired,
}

export { FriendDetailPage };