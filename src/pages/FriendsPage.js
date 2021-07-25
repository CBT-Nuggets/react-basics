import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { myProfileData } from '../data';
import { PeopleList } from '../components/PeopleList';
import { WelcomeMessage } from '../components/WelcomeMessage';
import { FriendsContext } from '../contexts/FriendsContext';
import { FavoritesContext } from '../contexts/FavoritesContext';

const FriendsPage = () => {
	const history = useHistory();
	const { friends } = useContext(FriendsContext);
	const { favoritesIds, toggleFavorite } = useContext(FavoritesContext);

	const favorites = favoritesIds.map(id => friends.find(friend => friend.id === id));
	const nonFavorites = friends.filter(friend => !favoritesIds.includes(friend.id));

	const goToPersonDetail = (personId) => {
		history.push(`/friends/${personId}`);
	}

	return (
		<>
		<WelcomeMessage name={myProfileData.name} />
		<h2 className="content-heading">Favorites</h2>
		<p>You currently have {favorites.length} favorites</p>
		<PeopleList
			people={favorites}
			onClickPerson={goToPersonDetail}
			actionName="Remove from favorites"
			onPersonAction={toggleFavorite} />
		<h2 className="content-heading">My Friends</h2>
		<PeopleList
			people={nonFavorites}
			onClickPerson={goToPersonDetail}
			actionName="Add to favorites"
			onPersonAction={toggleFavorite}
			allowAdditions />
		</>
	);
}

export { FriendsPage };