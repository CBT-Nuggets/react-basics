import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../profile/actions';
import { ProfileInfo } from '../profile/ProfileInfo';
import { PersonInfoForm } from '../friends/PersonInfoForm';
import { getProfileInfo } from '../profile/selectors';

const UserProfilePage = () => {
	const profileInfo = useSelector(getProfileInfo);
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