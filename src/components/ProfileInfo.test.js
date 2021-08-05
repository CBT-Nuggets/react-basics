import { fireEvent, render, screen } from '@testing-library/react';
import { ProfileInfo } from './ProfileInfo';
import { fakePerson } from '../test-utils/fakes';

test('displays the person prop\'s name, age, bio, and birthday', () => {
    render(<ProfileInfo person={fakePerson} />);

    expect(screen.getByText(fakePerson.name)).toBeInTheDocument();
    expect(screen.getByText(fakePerson.age)).toBeInTheDocument();
    expect(screen.getByText(fakePerson.bio)).toBeInTheDocument();
    expect(screen.getByText(fakePerson.birthday)).toBeInTheDocument();
});

test('displays the person\'s profile picture', () => {
    render(<ProfileInfo person={fakePerson} />);

    expect(screen.getByRole('img')).toHaveAttribute('src', fakePerson.profilePicUrl);
});

test('displays the person\'s interests', () => {
    render(<ProfileInfo person={fakePerson} />);

    fakePerson.interests.forEach(interest => {
        expect(screen.getByText(interest)).toBeInTheDocument();
    });
});

// You'll have to modify ProfileInfo for this one - write the test first
test('displays "no interests" if the person has no interests', () => {
    const customizedFakePerson = { ...fakePerson, interests: [] };

    render(<ProfileInfo person={customizedFakePerson} />);

    expect(screen.getByText(/no interests/i)).toBeInTheDocument();
});

test('allows us to pass in "actions", and renders corresponding buttons for each action', () => {
    const fakeActions = [{
        actionName: 'Action One',
        handler: () => {},
    }, {
        actionName: 'Action Two',
        handler: () => {},
    }];

    render(<ProfileInfo person={fakePerson} actions={fakeActions} />);

    expect(screen.getByText('Action One')).toBeInTheDocument();
    expect(screen.getByText('Action Two')).toBeInTheDocument();
});

test('calls the specified action callbacks for the "actions" prop when the corresponding buttons are clicked', () => {
    const actionOneMock = jest.fn();
    const actionTwoMock = jest.fn();

    const fakeActions = [{
        actionName: 'Action One',
        handler: actionOneMock,
    }, {
        actionName: 'Action Two',
        handler: actionTwoMock,
    }];

    render(<ProfileInfo person={fakePerson} actions={fakeActions} />);

    // Note that we're NOT clicking both, then checking - this would leave room
    // for some oopses - i.e. one click calls all actions or something
    fireEvent.click(screen.getByText('Action One'))
    expect(actionOneMock).toHaveBeenCalled();
    expect(actionTwoMock).not.toHaveBeenCalled();

    // Reset the mock to clear its calls
    actionOneMock.mockReset();

    fireEvent.click(screen.getByText('Action Two'))
    expect(actionTwoMock).toHaveBeenCalled();
    expect(actionOneMock).not.toHaveBeenCalled();
});

test('doesn\'t display any actions if no "actions" prop is passed', () => {
    render(<ProfileInfo person={fakePerson} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
});