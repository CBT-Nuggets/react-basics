import { useState } from 'react';
import { myProfileData, friendsData } from '../data';
import { PeopleList } from '../components/PeopleList';
import { WelcomeMessage } from '../components/WelcomeMessage';

const FriendsPage = () => {
	const existingState = JSON.parse(localStorage.getItem('favoritesIds'));

	const [favoritesIds, setFavoritesIds] = useState(existingState || []);

	const favorites = favoritesIds.map(id => friendsData.find(friend => friend.id === id));
	const nonFavorites = friendsData.filter(friend => !favoritesIds.includes(friend.id));

	const toggleFavorite = (personId) => {
		if (favoritesIds.includes(personId)) {
			const newFavoritesIds = favoritesIds.filter(id => id !== personId);
			setFavoritesIds(newFavoritesIds);
			localStorage.setItem('favoritesIds', JSON.stringify(newFavoritesIds));
		} else {
			const newFavoritesIds = favoritesIds.concat(personId);
			setFavoritesIds(newFavoritesIds);
			localStorage.setItem('favoritesIds', JSON.stringify(newFavoritesIds));
		}
	}

	return (
		<>
		<WelcomeMessage name={myProfileData.name} />
		<h2 className="content-heading">Favorites</h2>
		<p>You currently have {favorites.length} favorites</p>
		<PeopleList people={favorites} onClickPerson={toggleFavorite} />
		<h2 className="content-heading">My Friends</h2>
		<PeopleList people={nonFavorites} onClickPerson={toggleFavorite} />
		</>
	);
}

export { FriendsPage };