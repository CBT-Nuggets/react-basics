import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { myProfileData, friendsData } from '../data';
import { PeopleList } from '../components/PeopleList';
import { WelcomeMessage } from '../components/WelcomeMessage';

const FriendsPage = ({ favoritesIds, onToggleFavorite }) => {
	const history = useHistory();

	const favorites = favoritesIds.map(id => friendsData.find(friend => friend.id === id));
	const nonFavorites = friendsData.filter(friend => !favoritesIds.includes(friend.id));

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
			onPersonAction={onToggleFavorite} />
		<h2 className="content-heading">My Friends</h2>
		<PeopleList
			people={nonFavorites}
			onClickPerson={goToPersonDetail}
			actionName="Add to favorites"
			onPersonAction={onToggleFavorite} />
		</>
	);
}

FriendsPage.propTypes = {
	favoritesIds: PropTypes.arrayOf(PropTypes.string).isRequired,
	onToggleFavorite: PropTypes.func.isRequired,
}

export { FriendsPage };