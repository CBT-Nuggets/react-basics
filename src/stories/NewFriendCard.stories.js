import { NewFriendCard } from '../components/NewFriendCard';
import { widthConstraintArgs, widthConstraintArgTypes, widthConstraintDecorator } from './widthConstraint';

export default {
    title: 'Friends/NewFriendCard',
    component: NewFriendCard,
}

export const BasicCard = args => <NewFriendCard {...args} />;
BasicCard.args = widthConstraintArgs;
BasicCard.argTypes = widthConstraintArgTypes;
BasicCard.decorators = [widthConstraintDecorator];