import { PersonInfoForm } from '../components/PersonInfoForm';
import { friendsData } from '../data';

export default {
    title: 'People/PersonInfoForm',
    component: PersonInfoForm,
}

const Template = args => <PersonInfoForm {...args} />

export const NoStartingData = Template.bind({});
NoStartingData.args = {
    buttonText: 'Create New Person',
}

export const WithStartingData = Template.bind({});
WithStartingData.args = {
    person: friendsData[0],
    buttonText: 'Save Changes',
}