import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../actions/favorites';
import { myProfileData } from '../data';
import { PeopleList } from '../components/PeopleList';
import { WelcomeMessage } from '../components/WelcomeMessage';

const FriendsPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const favorites = useSelector(state => state.favorites.map(id => state.friends.find(friend => friend.id === id)));
	const nonFavorites = useSelector(state => state.friends.filter(friend => !state.favorites.includes(friend.id)));

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
			onPersonAction={id => dispatch(removeFavorite(id))} />
		<h2 className="content-heading">My Friends</h2>
		<PeopleList
			people={nonFavorites}
			onClickPerson={goToPersonDetail}
			actionName="Add to favorites"
			onPersonAction={id => dispatch(addFavorite(id))}
			allowAdditions />
		</>
	);
}

export { FriendsPage };