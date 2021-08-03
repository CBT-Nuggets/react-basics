import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PersonInfoForm } from '../components/PersonInfoForm';

const EditFriendPage = () => {
	const history = useHistory();

	const { friendId } = useParams();
	const friends = useSelector(state => state.friends);
	// const { friends, updateFriend } = useContext(FriendsContext);
	const friend = friends.find(f => f.id === friendId);

	const saveUpdatedInformation = updatedInfo => {
		// updateFriend(updatedInfo);
		// history.push('/');
	}

	return (
		<>
		<h1>Edit Friend Info</h1>
		<PersonInfoForm
			person={friend}
			onSubmit={saveUpdatedInformation}
			buttonText="Save Changes" />
		</>
	);
}

export { EditFriendPage };