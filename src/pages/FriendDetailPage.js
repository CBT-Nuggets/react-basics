import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { friendsData } from "../data";
import { ProfileInfo } from '../components/ProfileInfo';
import { FavoritesContext } from '../contexts/FavoritesContext';

const FriendDetailPage = () => {
	const { favoritesIds, toggleFavorite } = useContext(FavoritesContext);
	const { friendId } = useParams();

	const selectedFriend = friendsData.find(friend => friend.id === friendId);

	const isFavorite = favoritesIds.includes(friendId);

	return selectedFriend ? (
		<ProfileInfo
			person={selectedFriend}
			actionName={isFavorite ? "Remove from favorites" : "Add to favorites"}
			onAction={() => toggleFavorite(friendId)} />
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