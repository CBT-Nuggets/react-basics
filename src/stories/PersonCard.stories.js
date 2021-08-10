import { PersonCard } from '../components/PersonCard';
import { friendsData } from '../data'; 
import { widthConstraintArgs, widthConstraintArgTypes, widthConstraintDecorator } from './widthConstraint';

export default {
    title: 'People/PersonCard',
    component: PersonCard,
    args: {
        ...widthConstraintArgs,
        person: friendsData[0].name,
    },
    argTypes: {
        ...widthConstraintArgTypes,
        person: {
            options: friendsData.map(f => f.name),
            mapping: friendsData.reduce((labels, f) => ({ ...labels, [f.name]: f }), {}),
            control: {
                type: 'select',
            }
        }
    },
    decorators: [widthConstraintDecorator],
}

const Template = args => <PersonCard {...args} />;

export const WithoutAction = Template.bind({});

export const WithAction = Template.bind({});
WithAction.args = { actionName: 'Click me!' };

export const NoProfilePic = Template.bind({});
NoProfilePic.args = { person: { ...friendsData[0], profilePicUrl: '' }, actionName: 'Click me!' };