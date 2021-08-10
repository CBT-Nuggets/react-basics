import { FriendsProvider } from '../components/FriendsProvider';

export const friendsDecorator = friendsData => Story => {
    localStorage.setItem('friends', JSON.stringify(friendsData));

    return (
        <FriendsProvider>
            <Story />
        </FriendsProvider>
    );
};