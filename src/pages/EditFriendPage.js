import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FriendsContext } from '../contexts/FriendsContext';
import { PersonInfoForm } from '../components/PersonInfoForm';

const EditFriendPage = () => {
	const history = useHistory();

	const { friendId } = useParams();
	const { friends, updateFriend } = useContext(FriendsContext);
	const friend = friends.find(f => f.id === friendId);

	const saveUpdatedInformation = updatedInfo => {
		updateFriend(updatedInfo);
		history.push('/');
	}

	return friend ? (
		<>
		<h1>Edit Friend Info</h1>
		<PersonInfoForm
			person={friend}
			onSubmit={saveUpdatedInformation}
			buttonText="Save Changes" />
		</>
	) : (
		<>
		<h1>How'd you get here? This friend doesn't exist</h1>
		<button onClick={() => history.push('/')}>Back to Friends</button>
		</>
	);
}

export { EditFriendPage };