import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../favorites/actions';
import { myProfileData } from '../data';
import { PeopleList } from '../friends/PeopleList';
import { WelcomeMessage } from '../ui/WelcomeMessage';
import { getFavorites, getNonFavorites } from '../favorites/selectors';

const FriendsPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const favorites = useSelector(getFavorites);
	const nonFavorites = useSelector(getNonFavorites);

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