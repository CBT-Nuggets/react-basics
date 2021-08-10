import { Tag } from '../components/Tag';

export default {
    title: 'General/Tag',
    component: Tag,
}

export const SingleTag = args => <Tag text={args.text} />
SingleTag.args = {
    text: 'Hello',
}

export const MultipleTags = args => (
    <>
    {args.texts.map(text => (
        <Tag text={text} />
    ))}
    </>
);
MultipleTags.args = {
    texts: ['Hello', 'Goodbye', 'Yes', 'No'],
}