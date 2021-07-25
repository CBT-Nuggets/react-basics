import { useState, useEffect } from 'react';
import { myProfileData as startingInfo } from '../data';
import { ProfileInfo } from '../components/ProfileInfo';
import { PersonInfoForm } from '../components/PersonInfoForm';

const UserProfilePage = () => {
	const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')) || startingInfo);
	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		localStorage.setItem('userInfo', JSON.stringify(userInfo));
	}, [userInfo]);

	const updateUserInfo = updatedInfo => {
		setUserInfo(updatedInfo);
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
			? <PersonInfoForm person={userInfo} onSubmit={updateUserInfo} buttonText="Save Changes" />
			: <ProfileInfo person={userInfo} actions={actions} />}
		</>
	);
}

export { UserProfilePage };