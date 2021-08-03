import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProfileInfo } from '../components/ProfileInfo';

const FriendDetailPage = () => {
	const { friendId } = useParams();
	const history = useHistory();

	const selectedFriend = useSelector(state => state.friends.find(friend => friend.id === friendId));
	const isFavorite = useSelector(state => state.favorites.includes(selectedFriend.id));

	const pageActions = [{
		actionName: isFavorite ? "Remove from favorites" : "Add to favorites",
		// handler: () => toggleFavorite(friendId),
	}, {
		actionName: 'Edit Information',
		handler: () => history.push(`/edit-friend/${friendId}`),
	}]

	return selectedFriend ? (
		<ProfileInfo
			person={selectedFriend}
			actions={pageActions} />
	) : (
		<>
		<p>Oops! Couldn't find that friend</p>
		<Link to="/">
			<button>Back to Home</button>
		</Link>
		</>
	);
}

export { FriendDetailPage };