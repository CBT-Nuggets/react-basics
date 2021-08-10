import { Route } from 'react-router';

export const locationDecorator = (slugPath = '/') => Story => (
    <Route path={slugPath}>
        <Story />
    </Route>
);