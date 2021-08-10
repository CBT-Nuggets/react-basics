import { FriendsPage } from '../pages/FriendsPage';
import { PeopleList } from '../components/PeopleList';
import { friendsData } from '../data';
import { favoritesDecorator } from './favoritesDecorator';
import { friendsDecorator } from './friendsDecorator';

export default {
    title: 'Pages/FriendsPage',
    component: FriendsPage,
    subcomponents: { PeopleList },
}

const Template = args => <FriendsPage {...args} />

export const NoFriends = Template.bind({});
NoFriends.decorators = [friendsDecorator([])];

export const FriendsButNoFavorites = Template.bind({});
FriendsButNoFavorites.decorators = [favoritesDecorator([]), friendsDecorator(friendsData)];

export const FriendsAndFavorites = Template.bind({});
FriendsAndFavorites.decorators = [favoritesDecorator(['123', '234']), friendsDecorator(friendsData)];

export const AllFavorites = Template.bind({});
AllFavorites.decorators = [favoritesDecorator(friendsData.map(f => f.id)), friendsDecorator(friendsData)];