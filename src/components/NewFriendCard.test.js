import { fireEvent, render, screen } from '@testing-library/react';
import { NewFriendCard } from './NewFriendCard';

test('it calls its onClick method with no args when the component is clicked', () => {
    const onClickMock = jest.fn();
    render(<NewFriendCard onClick={onClickMock} />);
    fireEvent.click(screen.getByRole('listitem'));
    expect(onClickMock).toHaveBeenCalledWith();
});