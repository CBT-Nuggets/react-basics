import { myProfileData } from './data';
import './ProfileInfo.css';

export const ProfileInfo = () => {
	return (
		<div>
			<div className="profile-pic-container">
				<div className="profile-pic-wrap">
					<img
						className="profile-pic"
						src={myProfileData.profilePicUrl}
						alt={`${myProfileData.name} smiling`} />
				</div>
			</div>
			<h2 className="content-heading">My Profile</h2>
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