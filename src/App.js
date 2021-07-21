import './App.css';

function App() {
	return (
		<div>
			<h1>Friend Tracker</h1>
			<div>
				<img
					src={process.env.PUBLIC_URL + '/my-profile-pic.png'}
					alt="Shaun smiling"
					height="200" />
				<h2>My Profile</h2>
				<h3>Name</h3>
				<p>Shaun Wassell</p>
				<h3>Age</h3>
				<p>100</p>
				<h3>Bio</h3>
				<p>I like to program. I also like food.</p>
				<h3>Birthday</h3>
				<p>March 1</p>
				<h3>Interests</h3>
				<ul>
					<li>Programming</li>
					<li>Data Science</li>
					<li>Gardening</li>
					<li>Foreign Languages</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
