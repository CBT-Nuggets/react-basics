import { PeopleList } from '../components/PeopleList';
import { PersonCard } from '../components/PersonCard';
import { NewFriendCard } from '../components/NewFriendCard';
import * as PersonCardStories from './PersonCard.stories';
import { friendsData } from '../data'; 

export default {
    title: 'People/PeopleList',
    component: PeopleList,
    subcomponents: { PersonCard, NewFriendCard }, // This is how you tell Storybook that these components are often found together
    args: {
        people: friendsData,
    }
};

const Template = args => <PeopleList {...args} />

export const WithoutAction = Template.bind({});

export const WithAction = Template.bind({});
WithAction.args = { ...PersonCardStories.WithAction.args };

export const WithAddButton = Template.bind({});
WithAddButton.args = { allowAdditions: true };

export const WithActionAndAddButton = Template.bind({});
WithActionAndAddButton.args = { ...WithAction.args, ...WithAddButton.args };