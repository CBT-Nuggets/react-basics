import { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FriendsContext } from '../contexts/FriendsContext';
import { PersonInfoForm } from '../components/PersonInfoForm';

const EditFriendPage = () => {
	useEffect(() => {
		console.log('EditFriendPage has been (re)rendered');

		return () => console.log('EditFriendPage cleanup');
	});

	const history = useHistory();

	const { friendId } = useParams();
	const { friends, updateFriend } = useContext(FriendsContext);
	const friend = friends.find(f => f.id === friendId);

	const saveUpdatedInformation = updatedInfo => {
		updateFriend(updatedInfo);
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