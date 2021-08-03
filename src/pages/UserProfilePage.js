import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../actions/profile';
import { ProfileInfo } from '../components/ProfileInfo';
import { PersonInfoForm } from '../components/PersonInfoForm';

const UserProfilePage = () => {
	const profileInfo = useSelector(state => state.profile);
	const [isEditing, setIsEditing] = useState(false);

	const dispatch = useDispatch();

	const updateUserInfo = updatedInfo => {
		dispatch(updateProfile(updatedInfo));
		setIsEditing(false);
	}

	const actions = [{
		actionName: 'Edit My Info',
		handler: () => setIsEditing(true),
	}];

	return (
		<>
		<h2 className="content-heading">My Profile</h2>
		{isEditing
			? <PersonInfoForm person={profileInfo} onSubmit={updateUserInfo} buttonText="Save Changes" />
			: <ProfileInfo person={profileInfo} actions={actions} />}
		</>
	);
}

export { UserProfilePage };