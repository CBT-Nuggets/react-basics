import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateFriend } from '../friends/actions';
import { PersonInfoForm } from '../friends/PersonInfoForm';
import { getFriendById } from '../friends/selectors';

const EditFriendPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { friendId } = useParams();

	const friend = useSelector(getFriendById(friendId));

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