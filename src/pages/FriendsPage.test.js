import { Router } from 'react-router-dom';
import { screen, within } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { FriendsPage } from './FriendsPage';
import { renderWithResources, renderInApp } from '../test-utils/renderers';
import { fakePeople } from '../test-utils/fakes';

test('Displays all necessary sections', () => {
    renderWithResources(
        <FriendsPage />,
        { friends: fakePeople },
        { favoritesIds: ['123'] },
    );

    const welcomeMessage = screen.queryByText(/welcome/i);
    expect(welcomeMessage).not.toBeNull();

    const lists = screen.getAllByRole('list');
    expect(lists).toHaveLength(2);
});

test('Displays the "favorites" in one list and the "non-favorites" in the other', () => {
    renderWithResources(
        <FriendsPage />,
        { friends: fakePeople },
        { favoritesIds: ['123'] },
    );

    const favoritesList = screen.getAllByRole('list')[0];
    const favorites = within(favoritesList).getAllByRole('listitem');
    expect(favorites).toHaveLength(1);

    expect(favorites[0]).toHaveTextContent(/john doe/i);

    const nonFavoritesList = screen.getAllByRole('list')[1];

    // Doing it this way is better because what if we want to add sorting functionality
    // later on? We'd have to rewrite our tests if we referred specifically to "[0] is jane smith",
    // "[1] is bob brown", etc. All we really care about here is that these people are in there somewhere
    const person1 = within(nonFavoritesList).getByText(/jane smith/i);
    const person2 = within(nonFavoritesList).getByText(/bob brown/i);

    expect(person1).toBeInTheDocument();
    expect(person2).toBeInTheDocument();
});

test('sends the user to the corresponding friend detail page when a friend is clicked', () => {
    const fakeHistory = createMemoryHistory();

    renderWithResources(
        <Router history={fakeHistory}>
            <FriendsPage />
        </Router>,
        { friends: fakePeople },
        { favoritesIds: ['123'] },
    );

    screen.getByText(/jane smith/i).click();
    expect(fakeHistory.location.pathname).toEqual('/friends/234');
});

test('moves non-favorites to favorites when their button is clicked', () => {
    renderInApp(<FriendsPage />);

    const nonFavoritesList = screen.getAllByRole('list')[1];
    const person1ListItem = within(nonFavoritesList).getAllByRole('listitem')[1];
    within(person1ListItem).getByRole('button').click();

    const favoritesList = screen.getAllByRole('list')[0];
    expect(within(favoritesList).getByText(/jane smith/i)).toBeInTheDocument();
});