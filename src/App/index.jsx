import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import BaseStyles from './BaseStyle';
import NormalizeStyles from './NormalizeStyles';
import Routes from './Routes';
import theme from '../shared/utils/theme';

import MixpanelService from '../shared/services/MixpanelService';

const App = () => {
  // initialize mixpanel
  useEffect(() => {
    MixpanelService.get();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BaseStyles />
        <NormalizeStyles />
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
