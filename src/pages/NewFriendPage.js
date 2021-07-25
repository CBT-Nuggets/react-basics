import { useState } from 'react';
import styles from './NewFriendPage.module.css';

const NewFriendPage = () => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [bio, setBio] = useState('');
	const [birthday, setBirthday] = useState('');
	const [interests, setInterests] = useState('');

	return (
		<>
		<h1>Add A New Friend</h1>
		<div className={styles.infoForm}>
			<label for="name">
				Name
			</label>
			<input
				id="name"
				placeholder="John Doe"
				type="text"
				value={name}
				onChange={e => setName(e.target.value)} />
			<label for="age">
				Age
			</label>
			<input
				id="age"
				placeholder="Age"
				type="number"
				value={age}
				onChange={e => setAge(Number(e.target.value))} />
			<label for="bio">
				Bio
			</label>
			<textarea
				id="bio"
				placeholder="We first met at..."
				value={bio}
				onChange={e => setBio(e.target.value)} />
			<label for="birthday">
				Birthday
			</label>
			<input
				id="birthday"
				placeholder="i.e. January 1"
				type="text"
				value={birthday}
				onChange={e => setBirthday(e.target.value)} />
			<label for="interests">
				Interests (separate with commas)
			</label>
			<input
				placeholder="Food, movies, travel, ..."
				type="text"
				value={interests}
				onChange={e => setInterests(e.target.value)} />
			<button onClick={() => alert('Creating a new friend...')}>Create</button>
		</div>
		</>
	);
}

export { NewFriendPage };