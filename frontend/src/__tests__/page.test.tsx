import 'whatwg-fetch'
import {
  render,
} from '@testing-library/react';

import Home from '../pages/index';


test('The Main/Home page of the MPA renders successfully',
  async () => {
    render(<Home />);
    return;
  });
