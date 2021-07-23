import { BrowserRouter, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { UserProfilePage } from './pages/UserProfilePage';
import styles from './App.module.css';

export const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
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
			</div>
		</BrowserRouter>
	);
}
