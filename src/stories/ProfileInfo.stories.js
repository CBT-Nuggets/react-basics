import { ProfileInfo } from '../components/ProfileInfo';
import { Tag } from '../components/Tag';
import { friendsData } from '../data';

export default {
    title: 'Profile/ProfileInfo',
    component: ProfileInfo,
    subcomponents: { Tag },
    args: {
        person: friendsData[0],
    }
}

const Template = args => <ProfileInfo {...args} />

export const NoActions = Template.bind({});
NoActions.args = {
    actions: [],
};

export const WithActions = Template.bind({});
WithActions.args = {
    actions: [{
        actionName: 'Delete',
        handler: () => { alert('Deleting...'); },
    }, {
        actionName: 'Tell them they\'re cool',
        handler: () => { alert('Success!'); },
    }]
};

export const PersonWithNoInterests = Template.bind({});
PersonWithNoInterests.args = {
    person: { ...friendsData[0], interests: [] }
}