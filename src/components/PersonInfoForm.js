import { useState } from 'react';
import styles from './PersonInfoForm.module.css';

const PersonInfoForm = ({ person = {}, onSubmit = () => {} }) => {
	const [name, setName] = useState(person.name || '');
	const [age, setAge] = useState(person.age || '');
	const [bio, setBio] = useState(person.bio || '');
	const [profilePicUrl, setProfilePicUrl] = useState(person.profilePicUrl || '');
	const [birthday, setBirthday] = useState(person.birthday || '');
	const [interests, setInterests] = useState((person.interests && person.interests.join(', ')) || '');

	const onAddClicked = () => {
		const personInfo = {
			name,
			age,
			bio,
			profilePicUrl,
			birthday,
			interests: interests.split(',').map(str => str.trim()),
		};
		onSubmit(personInfo);
	}

	return (
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
	);
}

export { PersonInfoForm };