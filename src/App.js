import { BrowserRouter, Route } from 'react-router-dom';
import { NavBar } from './ui/NavBar';
import { EditFriendPage } from './pages/EditFriendPage';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { NewFriendPage } from './pages/NewFriendPage';
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
				<Route path="/edit-friend/:friendId">
					<EditFriendPage />
				</Route>
				<Route path="/new-friend">
					<NewFriendPage />
				</Route>
			</div>
		</BrowserRouter>
	);
}
