import '../src/index.css';
import { insideRouterDecorator } from '../src/stories/insideRouterDecorator';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
        { name: 'dark gray', value: '#333' },
        { name: 'light gray', value: '#ccc' },
        { name: 'red', value: '#f00' },
    ]
  },
}

export const decorators = [insideRouterDecorator('/')];