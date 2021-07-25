import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { FriendsContext } from '../contexts/FriendsContext';
import styles from './NewFriendPage.module.css';

const NewFriendPage = () => {
	const { addFriend } = useContext(FriendsContext);

	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [bio, setBio] = useState('');
	const [profilePicUrl, setProfilePicUrl] = useState('');
	const [birthday, setBirthday] = useState('');
	const [interests, setInterests] = useState('');

	const history = useHistory();

	const onAddClicked = () => {
		const newFriend = {
			id: uuid(),
			name,
			age,
			bio,
			profilePicUrl,
			birthday,
			interests: interests.split(',').map(str => str.trim()),
		};
		addFriend(newFriend);
		history.push('/');
	}

	return (
		<>
		<h1>Add A New Friend</h1>
		<div className={styles.infoForm}>
			<label htmlFor="name">
				Name
			</label>
			<input
				id="name"
				placeholder="John Doe"
				type="text"
				value={name}
				onChange={e => setName(e.target.value)} />
			<label htmlFor="age">
				Age
			</label>
			<input
				id="age"
				placeholder="Age"
				type="number"
				value={age}
				onChange={e => setAge(Number(e.target.value))} />
			<label htmlFor="bio">
				Bio
			</label>
			<textarea
				id="bio"
				placeholder="We first met at..."
				value={bio}
				onChange={e => setBio(e.target.value)} />
			<label htmlFor="picUrl">
				Profile Picture URL
			</label>
			<input
				id="picUrl"
				placeholder="i.e. https://www.google.com/some-photo"
				type="text"
				value={profilePicUrl}
				onChange={e => setProfilePicUrl(e.target.value)} />
			<label htmlFor="birthday">
				Birthday
			</label>
			<input
				id="birthday"
				placeholder="i.e. January 1"
				type="text"
				value={birthday}
				onChange={e => setBirthday(e.target.value)} />
			<label htmlFor="interests">
				Interests (separate with commas)
			</label>
			<input
				placeholder="Food, movies, travel, ..."
				type="text"
				value={interests}
				onChange={e => setInterests(e.target.value)} />
			<button onClick={onAddClicked}>Create</button>
		</div>
		</>
	);
}

export { NewFriendPage };