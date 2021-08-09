import { PersonCard } from '../components/PersonCard';

// Using realistic data is important, since we want our components' behavior
// in our stories to closely match the real world. That being said, we also want our
// components to be easy to work with, so we may want to avoid relying on network
// requests and that sort of thing
import { friendsData } from '../data'; 

// export default {
//     component: PersonCard,
//     title: 'Components/PersonCard', // You can change this name and it will change the left-nav tree accordingly
// };

////////////// Without Using a Template/Args - i.e. no controls here ///////////////////

// The upper-camel-case (pascal case) here is split apart to become the description
// of the story in the left-nav tree
// export const WithAction = () => (
//     <div style={{ width: '400px' }}>
//         <PersonCard person={friendsData[0]} actionName="Click me!" />
//     </div>
// );

// export const WithoutSurroundingDiv = () => <PersonCard person={friendsData[0]} actionName="Click me!" />

// // WithoutSurroundingDiv.storyName = 'Without the surrounding div!'; // If you want the story name to be different

// export const WithoutAction = () => (
//     <div style={{ width: '400px' }}>
//         <PersonCard person={friendsData[0]} />
//     </div>
// );

// export const NoProfilePic = () => (
//     <div style={{ width: '400px' }}>
//         <PersonCard person={{ ...friendsData[0], profilePicUrl: '' }} actionName="Click me!" />
//     </div>
// );

/////////////////// With a template - this allows us to use "controls" ///////////////////////////

export default {
    title: 'Components/PersonCard',
    component: PersonCard,
    args: { // These args will apply to all stories unless overwritten - "component-level args"
        person: friendsData[0].name,
        containerWidth: 400,
    },
    argTypes: {
        containerWidth: {
            control: {
                type: 'range',
                min: 400,
                max: 2000,
                step: 100,
            },
        },
        person: {
            options: friendsData.map(f => f.name),
            mapping: friendsData.reduce((labels, f) => ({ ...labels, [f.name]: f }), {}),
            control: {
                type: 'select',
            }
        }
    },
}

// Another way to do all this is to create a reusable template, which allows you to avoid excessive repetition.
// We're using "width" here because it's the most common use case.
// Notice that here, we're using an arg to control the container's width
const Template = args => (
    <div style={{ width: args.containerWidth + 'px' }}>
        <PersonCard {...args} />
    </div>
);

export const WithoutAction = Template.bind({});
// WithoutAction.args = { person: friendsData[0] }; // Storybook automatically picks up on this "args" key

export const WithAction = Template.bind({});
WithAction.args = { actionName: 'Click me!' };

export const NoProfilePic = Template.bind({});
NoProfilePic.args = { person: { ...friendsData[0], profilePicUrl: '' }, actionName: 'Click me!' };

// If we needed to import these stories into another file (i.e. to reuse cases/args), we could say:
// import * as PersonCardStories from './PersonCard.stories.js';

// PersonCardStories.WithAction.args

// This could be helpful, for example, in components that take other components as args or HOCs.
// It also prevents us from having to update ALL our stories when one of our lower-level components, such
// as a button, changes