export const widthConstraintArgs = {
    containerWidth: 'small',
};

export const widthConstraintArgTypes = {
    containerWidth: {
        options: ['small', 'medium', 'large'],
        mapping: {
            'small': '400px',
            'medium': '800px',
            'large': '100%',
        },
        control: {
            type: 'select',
        }
    },
};

export const widthConstraintDecorator = (Story, { args, argTypes }) => {
    return (
        <div style={{ width: argTypes.containerWidth.mapping[args.containerWidth] }}>
            <Story />
        </div>
    );
}
