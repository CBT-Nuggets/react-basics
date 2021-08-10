import { FavoritesProvider } from '../components/FavoritesProvider';

export const favoritesDecorator = favoritesIds => Story => {
    localStorage.setItem('favoritesIds', JSON.stringify(favoritesIds));

    return (
        <FavoritesProvider>
            <Story />
        </FavoritesProvider>
    );
};