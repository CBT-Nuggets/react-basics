import { render } from '@testing-library/react';
import { FavoritesProvider } from '../components/FavoritesProvider';
import { FriendsProvider } from '../components/FriendsProvider';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { FriendsContext } from '../contexts/FriendsContext';

// You could do these separately, then combine them into one
// export const renderWithFavorites = (elements, favoritesOptions, options) => render(
//     <FavoritesContext.Provider value={favoritesOptions}>
//         {elements}
//     </FavoritesContext.Provider>,
//     options,
// );

// export const renderWithFriends = (elements, friendsOptions, options) => render(
//     <FriendsContext.Provider value={friendsOptions}>
//         {elements}
//     </FriendsContext.Provider>,
//     options,
// );

export const renderWithResources = (elements, friendsOptions, favoritesOptions, options) => render(
    <FriendsContext.Provider value={friendsOptions}>
        <FavoritesContext.Provider value={favoritesOptions}>
            {elements}
        </FavoritesContext.Provider>,
    </FriendsContext.Provider>,
    options,
);

export const renderInApp = (elements, options) => render(
    <FavoritesProvider>
        <FriendsProvider>
            {elements}
        </FriendsProvider>
    </FavoritesProvider>,
    options,
);