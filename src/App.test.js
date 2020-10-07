import React from 'react';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import {configure, shallow} from 'enzyme';

configure({adapter: new Adapter()});
it('renders without crashing', () => {
  shallow(<App />);
});
