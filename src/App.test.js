import React from 'react'
import App from './App'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import it from '@testing-library/jest-dom'

configure({ adapter: new Adapter() })
it('renders without crashing', () => {
  shallow(<App/>)
})
