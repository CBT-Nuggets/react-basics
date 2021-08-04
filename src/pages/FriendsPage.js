import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../actions/favorites';
import { myProfileData } from '../data';
import { PeopleList } from '../components/PeopleList';
import { WelcomeMessage } from '../components/WelcomeMessage';
import { getFavorites, getNonFavorites } from '../selectors/favorites';

const FriendsPageBase = ({ favorites, nonFavorites, addFavorite, removeFavorite }) => {
	console.log('Friends Page rendered');
	const history = useHistory();

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
			onPersonAction={id => removeFavorite(id)} />
		<h2 className="content-heading">My Friends</h2>
		<PeopleList
			people={nonFavorites}
			onClickPerson={goToPersonDetail}
			actionName="Add to favorites"
			onPersonAction={id => addFavorite(id)}
			allowAdditions />
		</>
	);
}

const mapStateToProps = state => ({
	favorites: getFavorites(state),
	nonFavorites: getNonFavorites(state),
});

const mapDispatchToProps = dispatch => ({
	addFavorite: id => dispatch(addFavorite(id)),
	removeFavorite: id => dispatch(removeFavorite(id)),
});

const FriendsPage = connect(
	mapStateToProps,
	mapDispatchToProps,
)(FriendsPageBase);

export { FriendsPage };