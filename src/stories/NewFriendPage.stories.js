import { NewFriendPage } from '../pages/NewFriendPage';
import { PersonInfoForm } from '../components/PersonInfoForm';
import { friendsDecorator } from './friendsDecorator';

export default {
    title: 'Pages/NewFriendPage',
    component: NewFriendPage,
    subcomponents: { PersonInfoForm },
}

export const BasicPage = args => <NewFriendPage {...args} />
BasicPage.decorators = [friendsDecorator([])];
