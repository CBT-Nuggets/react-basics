import { PersonCard } from '../components/PersonCard';
import { friendsData } from '../data'; 

export default {
    title: 'Components/PersonCard',
    component: PersonCard,
    args: {
        person: friendsData[0].name,
        containerWidth: 'small',
    },
    argTypes: {
        containerWidth: {
            options: ['small', 'medium', 'large'],
            mapping: {
                'small': '400px',
                'medium': '800px',
                'large': '100%',
            },
            control: {
                type: 'select',
            }
        },
        person: {
            options: friendsData.map(f => f.name),
            mapping: friendsData.reduce((labels, f) => ({ ...labels, [f.name]: f }), {}),
            control: {
                type: 'select',
            }
        }
    },
    // This is how you add parameters for all a component's stories
    parameters: {
        backgrounds: {
            values: [
                { name: 'dark gray', value: '#333' },
                { name: 'light gray', value: '#ccc' },
                { name: 'red', value: '#f00' },
            ]
        }
    }
}

const Template = args => (
    <div style={{ width: args.containerWidth }}>
        <PersonCard {...args} />
    </div>
);

export const WithoutAction = Template.bind({});
// Adding parameters for a single component
WithoutAction.parameters = {
    backgrounds: {
        values: [
            { name: 'dark gray', value: '#333' },
            { name: 'light gray', value: '#ccc' },
            { name: 'red', value: '#f00' },
        ]
    }
}


export const WithAction = Template.bind({});
WithAction.args = { actionName: 'Click me!' };

export const NoProfilePic = Template.bind({});
NoProfilePic.args = { person: { ...friendsData[0], profilePicUrl: '' }, actionName: 'Click me!' };