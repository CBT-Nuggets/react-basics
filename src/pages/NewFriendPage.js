import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { FriendsContext } from '../contexts/FriendsContext';
import { PersonInfoForm } from '../components/PersonInfoForm';

const NewFriendPage = () => {
	const { addFriend } = useContext(FriendsContext);
	const history = useHistory();

	const createNewFriend = info => {
		const newFriend = {
			...info,
			id: uuid(),
		};
		addFriend(newFriend);
		history.push('/');
	}

	return (
		<>
		<h1>Add A New Friend</h1>
		<PersonInfoForm
			onSubmit={createNewFriend}
			buttonText="Create" />
		</>
	);
}

export { NewFriendPage };