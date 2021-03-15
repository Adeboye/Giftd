import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import BaseStyles from './BaseStyle';
import NormalizeStyles from './NormalizeStyles';
import Routes from './Routes';
import theme from '../shared/utils/theme';

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <BaseStyles />
      <NormalizeStyles />
      <Routes />
    </ThemeProvider>
  </>
);

export default App;
