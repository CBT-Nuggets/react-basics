import { PersonCard } from '../components/PersonCard';
import { friendsData } from '../data'; 

export default {
    title: 'People/PersonCard',
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
    decorators: [
        (Story, { args, argTypes }) => {
            return (
                <div style={{ width: argTypes.containerWidth.mapping[args.containerWidth] }}>
                    <Story />
                </div>
            );
        }
    ]
}

const Template = args => <PersonCard {...args} />;

export const WithoutAction = Template.bind({});
WithoutAction.decorators = [
    (Story, { args, argTypes }) => {
        return (
            <div style={{ width: argTypes.containerWidth.mapping[args.containerWidth] }}>
                <Story />
            </div>
        );
    }
]

export const WithAction = Template.bind({});
WithAction.args = { actionName: 'Click me!' };

export const NoProfilePic = Template.bind({});
NoProfilePic.args = { person: { ...friendsData[0], profilePicUrl: '' }, actionName: 'Click me!' };