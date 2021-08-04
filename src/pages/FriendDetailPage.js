import { Link, useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../actions/favorites';
import { ProfileInfo } from '../components/ProfileInfo';
import { getIsFavorite } from '../selectors/favorites';
import { getFriendById } from '../selectors/friends';

const FriendDetailPage = () => {
	const { friendId } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const selectedFriend = useSelector(state => getFriendById(friendId)(state));
	const isFavorite = useSelector(state => getIsFavorite(friendId, state));

	const toggleFavorite = friendId => {
		if (isFavorite) {
			dispatch(removeFavorite(friendId));
		} else {
			dispatch(addFavorite(friendId));
		}
	}

	const pageActions = [{
		actionName: isFavorite ? "Remove from favorites" : "Add to favorites",
		handler: () => toggleFavorite(friendId),
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