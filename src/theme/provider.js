import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as ShopifyThemeProvider } from '@shopify/restyle';

import theme from './theme';

const ThemeProvider = ({ children }) => (
  <ShopifyThemeProvider {...{ theme }}>{children}</ShopifyThemeProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

ThemeProvider.defaultProps = {
  children: null,
};

export default ThemeProvider;
