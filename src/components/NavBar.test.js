import { fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { NavBar } from './NavBar';

test('has an app-logo link that sends the user to the "home" route', () => {
    const fakeHistory = createMemoryHistory();

    // Don't use BrowserRouter here - we need the ability to
    // pass in a history prop and BrowserRouter ignores that
    render(
        <Router history={fakeHistory}>
            <NavBar />
        </Router>
    );

    // We need to send the test to another route, since the home route is where it starts anyway
    fakeHistory.push('/some-other-page');

    fireEvent.click(screen.getByText(/friend tracker/i));

    expect(fakeHistory.location.pathname).toEqual('/');
});

test('has a "my profile" link that sends the user to the "user-profile" route', () => {
    const fakeHistory = createMemoryHistory();

    // Don't use BrowserRouter here - we need the ability to
    // pass in a history prop and BrowserRouter ignores that
    render(
        <Router history={fakeHistory}>
            <NavBar />
        </Router>
    );

    // We need to send the test to another route, since the home route is where it starts anyway
    fakeHistory.push('/some-other-page');

    fireEvent.click(screen.getByText(/profile/i));

    expect(fakeHistory.location.pathname).toEqual('/user-profile');
});