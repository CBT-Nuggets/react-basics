import { fireEvent, render, screen } from '@testing-library/react';
import { PersonInfoForm } from './PersonInfoForm';
import { fakePerson } from '../test-utils/fakes';

test('starts with all fields blank if no person prop is passed', () => {
    // Here come the labels
    render(<PersonInfoForm />);
    expect(screen.getByLabelText('name', { exact: false })).toHaveValue('');
    expect(screen.getByLabelText('age', { exact: false })).toHaveValue(null); // This one's a little different because it's a number (apparently)
    expect(screen.getByLabelText('bio', { exact: false })).toHaveValue('');
    expect(screen.getByLabelText('profile picture url', { exact: false })).toHaveValue('');
    expect(screen.getByLabelText('birthday', { exact: false })).toHaveValue('');
    expect(screen.getByLabelText('interests', { exact: false })).toHaveValue('');
});

test('adjusts the button text if a button prop is provided', () => {
    render(<PersonInfoForm buttonText="Send it on over" />);
    expect(screen.getByText('Send it on over')).toBeInTheDocument();
});

test('displays "Submit" as the default button text when no buttonText prop is provided', () => {
    render(<PersonInfoForm />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
});

test('starts with the fields pre-populated if a person prop is passed', () => {
    // Here come the labels
    render(<PersonInfoForm person={fakePerson} />);
    expect(screen.getByLabelText('name', { exact: false })).toHaveValue(fakePerson.name);
    expect(screen.getByLabelText('age', { exact: false })).toHaveValue(fakePerson.age); // This one's a little different because it's a number (apparently)
    expect(screen.getByLabelText('bio', { exact: false })).toHaveValue(fakePerson.bio);
    expect(screen.getByLabelText('profile picture url', { exact: false })).toHaveValue(fakePerson.profilePicUrl);
    expect(screen.getByLabelText('birthday', { exact: false })).toHaveValue(fakePerson.birthday);
});

test('calls the onSubmit callback with the appropriate values from the form and a generated id', () => {
    const onSubmitMock = jest.fn();
    render(<PersonInfoForm person={fakePerson} onSubmit={onSubmitMock} />);

    fireEvent.change(screen.getByLabelText('name', { exact: false }), { target: { value: 'Sean Wazel' } });
    fireEvent.change(screen.getByLabelText('age', { exact: false }), { target: { value: 123 } });
    fireEvent.change(screen.getByLabelText('bio', { exact: false }), { target: { value: 'blah blah' } });
    fireEvent.change(screen.getByLabelText('profile picture url', { exact: false }), { target: { value: 'google.com' } });
    fireEvent.change(screen.getByLabelText('birthday', { exact: false }), { target: { value: 'Feb 29th' } });

    fireEvent.click(screen.getByText('submit', { exact: false }));

    const expectedOutput = {
        id: '012',
        name: 'Sean Wazel',
        profilePicUrl: 'google.com',
        age: 123,
        bio: 'blah blah',
        birthday: 'Feb 29th',
        interests: ['Programming', 'Data Science', 'Gardening', 'Foreign Languages'],
    };

    expect(onSubmitMock).toHaveBeenCalledWith(expectedOutput);
});

// We probably want separate tests for interests, since they're a little more
// involved than the regular fields
test('joins together pre-existing interests into a comma-separated string before displaying in the interests input', () => {
    render(<PersonInfoForm person={fakePerson} />);

    expect(screen.getByLabelText('interests', { exact: false })).toHaveValue('Programming, Data Science, Gardening, Foreign Languages');
});

test('splits the comma-separated interests input value into an array upon submitting', () => {
    const onSubmitMock = jest.fn();
    render(<PersonInfoForm onSubmit={onSubmitMock} />);

    fireEvent.change(screen.getByLabelText(/interests/i), { target: { value: 'one, two, three' } });

    fireEvent.click(screen.getByText(/submit/i));

    // This allows us to get just a single piece of the argument, instead of
    // having to define the entire output object we expect
    expect(onSubmitMock.mock.calls[0][0].interests).toEqual(['one', 'two', 'three']);
});