import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateFriend } from '../actions/friends';
import { PersonInfoForm } from '../components/PersonInfoForm';
import { getFriendById } from '../selectors/friends';

const EditFriendPage = () => {
	console.log('Edit Friend Page rendering');
	const history = useHistory();
	const dispatch = useDispatch();
	const { friendId } = useParams();

	const friend = useSelector(state => getFriendById(friendId, state));

	const saveUpdatedInformation = updatedInfo => {
		dispatch(updateFriend(friendId, updatedInfo));
		history.push('/');
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