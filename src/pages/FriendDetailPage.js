import { Link, useParams } from 'react-router-dom';
import { friendsData } from "../data";
import { ProfileInfo } from '../components/ProfileInfo';

const FriendDetailPage = () => {
	const { friendId } = useParams();
	const selectedFriend = friendsData.find(friend => friend.id === friendId);

	return selectedFriend ? (
		<ProfileInfo person={selectedFriend} />
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