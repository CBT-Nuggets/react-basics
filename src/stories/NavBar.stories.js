import { NavBar } from '../components/NavBar';

export default {
    title: 'Navigation/NavBar',
    component: NavBar,
}

// Show that storybook gives us an error without the memory router here
export const BasicNavBar = args => <NavBar {...args} />;
