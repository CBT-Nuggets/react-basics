import './ProfileInfo.css';

export const ProfileInfo = ({ person }) => {
	return (
		<>
		<div className="profile-pic-container">
			<div className="profile-pic-wrap">
				<img
					className="profile-pic"
					src={person.profilePicUrl}
					alt={`${person.name} smiling`} />
			</div>
		</div>
		<h3>Name</h3>
		<p>{person.name}</p>
		<h3>Age</h3>
		<p>{person.age}</p>
		<h3>Bio</h3>
		<p>{person.bio}</p>
		<h3>Birthday</h3>
		<p>{person.birthday}</p>
		<h3>Interests</h3>
		<p>{person.interests.join(', ')}</p>
		</>
	)

}