import { myProfileData } from '../data';
import { ProfileInfo } from '../components/ProfileInfo';

const UserProfilePage = () => {
	return (
		<>
		<h2 className="content-heading">My Profile</h2>
		<ProfileInfo person={myProfileData} />
		</>
	);
}

export { UserProfilePage };