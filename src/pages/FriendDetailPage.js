import { useContext, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { ProfileInfo } from '../components/ProfileInfo';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { FriendsContext } from '../contexts/FriendsContext';

const FriendDetailPage = () => {
	useEffect(() => {
		console.log('FriendDetailPage has been (re)rendered');

		return () => console.log('FriendDetailPage cleanup');
	});

	const { friends } = useContext(FriendsContext);
	const { favoritesIds, toggleFavorite } = useContext(FavoritesContext);
	const { friendId } = useParams();
	const history = useHistory();

	const selectedFriend = friends.find(friend => friend.id === friendId);

	const isFavorite = favoritesIds.includes(friendId);

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