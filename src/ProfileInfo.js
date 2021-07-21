import { myProfileData } from './data';

export const ProfileInfo = () => {
	return (
		<div>
			<img
				src={myProfileData.profilePicUrl}
				alt={`${myProfileData.name} smiling`}
				height="200" />
			<h2>My Profile</h2>
			<h3>Name</h3>
			<p>{myProfileData.name}</p>
			<h3>Age</h3>
			<p>{myProfileData.age}</p>
			<h3>Bio</h3>
			<p>{myProfileData.bio}</p>
			<h3>Birthday</h3>
			<p>{myProfileData.birthday}</p>
			<h3>Interests</h3>
			<p>{myProfileData.interests.join(', ')}</p>
		</div>
	)

}