import { WelcomeMessage } from '../components/WelcomeMessage';

export default {
    title: 'Onboarding/WelcomeMessage',
    component: WelcomeMessage,
};

export const NotHidden = args => (
    <WelcomeMessage {...args} />
);
NotHidden.args = {
    name: 'Shaun',
};

export const AlreadyHidden = args => {
    localStorage.setItem('welcomeMessageVisibility', false);
    return (
        <WelcomeMessage {...args} />
    );
}
AlreadyHidden.args = {
    name: 'Shaun',
};