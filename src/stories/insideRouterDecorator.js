import { MemoryRouter as Router } from 'react-router';

export const insideRouterDecorator = (currentLocation = '/') => Story => (
    <Router initialEntries={[currentLocation]}>
        <Story />
    </Router>
);