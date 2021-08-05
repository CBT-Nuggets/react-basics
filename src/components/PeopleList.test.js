import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { PeopleList } from './PeopleList';
import { fakePeople } from '../test-utils/fakes';

test('renders as many list items as people', () => {
    // Notice what we're doing here - just an alternative to using "screen"
    const { queryAllByRole } = render(<PeopleList people={fakePeople} />);
    expect(queryAllByRole('listitem').length).toEqual(fakePeople.length);
});

test('does not render an "add" button if the "allowAdditions" prop is not specified', () => {
    const { queryByText } = render(<PeopleList people={fakePeople} />)
    
    // Notice what we're doing here - we're not being super exact,
    // because the exact implementation of this concept might change.
    // This prevents problems if, say, some string with "add" is added to one
    // of the Child components (i.e. "additional info")
    expect(queryByText('add', { exact: false })).toBeNull();
});

test('renders an "add" button if the "allowAdditions" prop is set to true', () => {
    const { getByText } = render(<PeopleList people={fakePeople} allowAdditions />)
    
    // Checking both the true and false cases here gives us a sort of
    // "controlled experiment" where that's the only thing we change.
    expect(getByText('add', { exact: false })).toBeInTheDocument();
});

test('sends the user to the new friend page route when the add new friend item is clicked', () => {
    const fakeHistory = createMemoryHistory();

    const { getByText } = render(
        <Router history={fakeHistory}>
            <PeopleList people={fakePeople} allowAdditions />
        </Router>
    );

    getByText('add', { exact: false }).click();
    expect(fakeHistory.location.pathname).toEqual('/new-friend');
});

test('calls the onClickPerson callback with the id of the item when one of the list items is clicked', () => {
    const onClickMock = jest.fn();
    const { queryAllByRole } = render(<PeopleList people={fakePeople} onClickPerson={onClickMock} />);

    fireEvent.click(queryAllByRole('listitem')[0]);
    expect(onClickMock).toHaveBeenCalledWith(fakePeople[0].id);

    // Just to be extra sure
    fireEvent.click(queryAllByRole('listitem')[2]);
    expect(onClickMock).toHaveBeenCalledWith(fakePeople[2].id);
});

test('when passed an "actionName" prop, produces a list where each item has the action button available', () => {
    const { queryAllByText } = render(<PeopleList people={fakePeople} actionName="Please Click Here" />);

    // .toHaveLength is just another way of doing expect... length... toEqual
    expect(queryAllByText('Please Click Here')).toHaveLength(3);
});

test('calls the onPersonAction callback with the item id when one of the list items\' action buttons is clicked', () => {
    const onActionMock = jest.fn();
    const { queryAllByText } = render(<PeopleList people={fakePeople} actionName="Click it" onPersonAction={onActionMock} />);

    fireEvent.click(queryAllByText('Click it')[0]);
    expect(onActionMock).toHaveBeenCalledWith(fakePeople[0].id);

    // Just to be extra sure
    fireEvent.click(queryAllByText('Click it')[1]);
    expect(onActionMock).toHaveBeenCalledWith(fakePeople[1].id);
});
