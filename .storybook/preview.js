import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // This is how you add global parameters to your project
  backgrounds: {
    values: [
        { name: 'dark gray', value: '#333' },
        { name: 'light gray', value: '#ccc' },
        { name: 'red', value: '#f00' },
    ]
  }
}