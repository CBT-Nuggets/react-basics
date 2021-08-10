import { UserProfilePage } from '../pages/UserProfilePage';
import { PersonInfoForm } from '../components/PersonInfoForm';
import { ProfileInfo } from '../components/ProfileInfo';
import { myProfileData } from '../data';
import { localStorageDecorator } from './localStorageDecorator';

export default {
    title: 'Pages/UserProfilePage',
    component: UserProfilePage,
    subcomponents: { PersonInfoForm, ProfileInfo },
}

export const BasicPage = args => {
    return (
        <UserProfilePage {...args} />
    );
}
BasicPage.decorators = [localStorageDecorator('userInfo', myProfileData)];