export const myProfileData = {
	id: '012',
	name: 'Shaun Wassell',
	profilePicUrl: `${process.env.PUBLIC_URL}/my-profile-pic.png`,
	age: 100,
	bio: 'I like to program. I also like food.',
	birthday: 'March 1',
	interests: ['Programming', 'Data Science', 'Gardening', 'Foreign Languages'],
};

export const friendsData = [{
	id: '123',
	name: 'John Doe',
	profilePicUrl: `${process.env.PUBLIC_URL}/friend-1.jpeg`,
	age: 55,
	bio: 'Likes to travel to far-away places',
	birthday: 'July 26',
	interests: ['Traveling', 'Languages', 'Meeting People'],
}, {
	id: '234',
	name: 'Jane Smith',
	profilePicUrl: `${process.env.PUBLIC_URL}/friend-2.jpeg`,
	age: 35,
	bio: 'Loves everyting related to math',
	birthday: 'March 14', // Pi day...
	interests: ['Math', 'Data Science', 'Calculus', 'Statistics'],
}, {
	id: '345',
	name: 'Bob Brown',
	profilePicUrl: `${process.env.PUBLIC_URL}/friend-3.jpeg`,
	age: 28,
	bio: 'An all-around foodie. Loves to cook and eat',
	birthday: 'March 14', // Pi day...
	interests: ['Restaurants', 'Food', 'Cooking', 'Baking'],
}];