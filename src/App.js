import { BrowserRouter, Route } from 'react-router-dom';
import { FavoritesProvider } from './components/FavoritesProvider';
import { FriendsProvider } from './components/FriendsProvider';
import { NavBar } from './components/NavBar';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { NewFriendPage } from './pages/NewFriendPage';
import { UserProfilePage } from './pages/UserProfilePage';
import styles from './App.module.css';

export const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<FriendsProvider>
				<FavoritesProvider>
					<div className={styles.contentContainer}>
						<Route path="/" exact>
							<FriendsPage />
						</Route>
						<Route path="/user-profile">
							<UserProfilePage />
						</Route>
						<Route path="/friends/:friendId">
							<FriendDetailPage />
						</Route>
						<Route path="/new-friend">
							<NewFriendPage />
						</Route>
					</div>
				</FavoritesProvider>
			</FriendsProvider>
		</BrowserRouter>
	);
}
