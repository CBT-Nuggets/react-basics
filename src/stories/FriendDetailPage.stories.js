import { FriendDetailPage } from '../pages/FriendDetailPage';
import { ProfileInfo } from '../components/ProfileInfo';
import { friendsData } from '../data';
import { friendsDecorator } from './friendsDecorator';
import { insideRouterDecorator } from './insideRouterDecorator';
import { locationDecorator } from './locationDecorator';

export default {
    title: 'Pages/FriendDetailPage',
    component: FriendDetailPage,
    subcomponents: { ProfileInfo },
}

const Template = args => <FriendDetailPage {...args} />;

export const BasicPage = Template.bind({});
BasicPage.decorators = [
    friendsDecorator(friendsData),
    locationDecorator('/edit-friend/:friendId'),
    insideRouterDecorator('/edit-friend/123'),
];

export const FriendWithIdNotFound = Template.bind({});
FriendWithIdNotFound.decorators = [
    friendsDecorator(friendsData),
    locationDecorator('/edit-friend/:friendId'),
    insideRouterDecorator('/edit-friend/81293128391983983'),
];