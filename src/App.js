import { Profiler } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { FavoritesProvider } from './components/FavoritesProvider';
import { FriendsProvider } from './components/FriendsProvider';
import { NavBar } from './components/NavBar';
import { EditFriendPage } from './pages/EditFriendPage';
import { FriendDetailPage } from './pages/FriendDetailPage';
import { FriendsPage } from './pages/FriendsPage';
import { NewFriendPage } from './pages/NewFriendPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { trackRender } from './performance/trackRender';
import styles from './App.module.css';

export const App = () => {
	return (
		<BrowserRouter>
			<Profiler id="Navigation" onRender={trackRender}>
				<NavBar />
			</Profiler>
			<FriendsProvider>
				<FavoritesProvider>
					<div className={styles.contentContainer}>
						<Route path="/" exact>
							<Profiler id="Friends Page" onRender={trackRender}>
								<FriendsPage />
							</Profiler>
						</Route>
						<Route path="/user-profile">
							<Profiler id="User Profile Page" onRender={trackRender}>
								<UserProfilePage />
							</Profiler>
						</Route>
						<Route path="/friends/:friendId">
							<Profiler id="Friend Detail Page" onRender={trackRender}>
								<FriendDetailPage />
							</Profiler>
						</Route>
						<Route path="/edit-friend/:friendId">
							<Profiler id="Edit Friend Page" onRender={trackRender}>
								<EditFriendPage />
							</Profiler>
						</Route>
						<Route path="/new-friend">
							<Profiler id="New Friend Page" onRender={trackRender}>
								<NewFriendPage />
							</Profiler>
						</Route>
					</div>
				</FavoritesProvider>
			</FriendsProvider>
		</BrowserRouter>
	);
}
