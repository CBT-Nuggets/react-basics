import { fireEvent, render, screen } from '@testing-library/react';
import { WelcomeMessage } from './WelcomeMessage';

// Since we're using localStorage in multiple tests, we need to
// clear it out to avoid "cross-pollination"
afterEach(() => localStorage.clear());

test('starts off as visible when their is no existing state in localStorage', () => {
    render(<WelcomeMessage name="Johnny" />);
    expect(screen.getByText(/welcome/i));
});

test('displays the name passed in as a prop', () => {
    render(<WelcomeMessage name="Johnny" />);
    expect(screen.getByText(/johnny/i)).toBeInTheDocument();
});

// You'll probably want to change "toggleVisible" to "hide" in the component,
// since there's not really any reason or way to unhide it
test('hides the component when the "hide" button is clicked', () => {
    render(<WelcomeMessage name="Johnny" />);

    // Either one of these would work, but "hide"
    // probably fits the use case a little better - i.e. we might
    // add a "get started" button, which would break the role-based one
    // fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText(/hide/i));

    expect(screen.queryByText(/johnny/i)).not.toBeInTheDocument();
});


// This is a LITTLE bit implementation-y, because we're relying on localStorage
// here - we might want to switch to sqlite, sessionStorage, cookies, etc. To really
// get those details out of here, we'd probably have to do some kind of container component
// or provider or something so that we could just pass in the initial value as a prop
test('adds an entry to localStorage when hidden', () => {
    render(<WelcomeMessage name="Johnny" />);

    fireEvent.click(screen.getByText(/hide/i));

    expect(localStorage.getItem('welcomeMessageHidden')).toEqual('yes');
});

test('starts off as invisible when there is a pre-existing state in localStorage', () => {
    // localStorage is automatically mocked in Jest, so we can just
    // set it to whatever we need it to be
    localStorage.setItem('welcomeMessageHidden', 'yes');

    render(<WelcomeMessage name="Someone" />);

    expect(screen.queryByText(/welcome/i)).not.toBeInTheDocument();
});