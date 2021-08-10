export const localStorageDecorator = (key, value) => Story => {
    localStorage.setItem(key, JSON.stringify(value));

    return <Story />
}