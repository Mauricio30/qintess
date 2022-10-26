 import { render, screen } from '@testing-library/react';
 import '@testing-library/jest-dom/extend-expect';
 
 import ListImages from './index';
 
 describe('<ListImages />', () => {
   test('renders', () => {
     const mockData = {
         name: 'charmander',
         picture: 'url'
     }
     render(<ListImages {...mockData} />);
     screen.getByText('charmander');
   });
});