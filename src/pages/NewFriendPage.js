import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { addFriend } from '../actions/friends';
import { PersonInfoForm } from '../components/PersonInfoForm';

const NewFriendPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const createNewFriend = info => {
		const newFriend = {
			...info,
			id: uuid(),
		};
		dispatch(addFriend(newFriend));
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