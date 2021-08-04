import { fireEvent, isInaccessible, render, screen } from '@testing-library/react';
import { PersonCard } from './PersonCard';

const fakePerson = {
    id: '012',
    name: 'Shaun Wassell',
    profilePicUrl: `${process.env.PUBLIC_URL}/my-profile-pic.png`,
    age: 100,
    bio: 'I like to program. I also like food.',
    birthday: 'March 1',
    interests: ['Programming', 'Data Science', 'Gardening', 'Foreign Languages'],
};

test('displays the person\'s name, age, and profile pic', () => {
    // render(<PersonCard />); // Going against the propTypes here (i.e. by forgetting one) will cause the test to fail
    render(<PersonCard person={fakePerson} />)

    // Getting basic elements by text
    expect(screen.getByText(fakePerson.name)).toBeInTheDocument();
    expect(screen.getByText(fakePerson.age)).toBeInTheDocument();

    // Getting elements by role and checking attributes. As a side-note, you may
    // want to change the alt text for profile pictures in lists to an empty string
    // so that they don't hear "shaun wassell thumbnail", "john doe thumbnail", etc.
    // the whole time they're tabbing through the list
    expect(screen.getByRole('img')).toHaveAttribute('src', fakePerson.profilePicUrl);
});

test('displays a button for the specified actionName prop', () => {
    render(<PersonCard person={fakePerson} actionName="Do something" />);

    // Testing for text content
    expect(screen.getByRole('button')).toHaveTextContent('Do something');
});

test('calls the specified onAction function with no arguments when the action button is clicked', () => {
    const mockCallback = jest.fn();
    render(<PersonCard person={fakePerson} actionName="Click me!" onAction={mockCallback} />);
    fireEvent.click(screen.getByRole('button'));

    // This will break if, say, we have PersonCard call
    // the callback passing the "person" obj as an argument
    expect(mockCallback).toHaveBeenCalledWith();
});

test('calls the specified onClick function with no arguments when the container is clicked', () => {
    const mockCallback = jest.fn();
    render(<PersonCard person={fakePerson} onClick={mockCallback} />);
    fireEvent.click(screen.getByRole('listitem'));

    // Note - the original way I was doing this, I was passing onClick={onClick}
    // inside PersonCard - this passes the "event" argument through and makes this
    // test fail. I changed it to {() => onClick()}
    expect(mockCallback).toHaveBeenCalledWith();
});

test('Doesn\'t display any button if no actionName or onAction callback are specified', () => {
    render(<PersonCard person={fakePerson} />);

    // This will throw an error because "get" queries throw an error
    // unless one and only one element is found. Instead, we need to
    // use a "query" query
    // expect(screen.getByRole('button')).toBeNull();

    expect(screen.queryByRole('button')).toBeNull();
});
