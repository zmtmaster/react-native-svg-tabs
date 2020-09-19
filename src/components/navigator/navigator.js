import React, { useMemo } from 'react';
import { Dimensions, StyleSheet } from 'react-native';

import { Box } from '~/theme';
import { SIZES, NAVIGATION_TAB_PROP_TYPE } from '~/constants';

import TabHandler from './tabs';
import TabShape from './tabShape';

const { NAVIGATION_BOTTOM_TABS_HEIGHT } = SIZES;
const { width: wWidth } = Dimensions.get('window');

function TabsUI({ tabs }) {
  const tabWidth = useMemo(() => wWidth / tabs.length, [tabs.length]);

  return (
    <Box
      {...{ height: NAVIGATION_BOTTOM_TABS_HEIGHT, width: wWidth }}
      backgroundColor="noColor">
      <TabShape {...{ tabWidth }} />
      <Box {...StyleSheet.absoluteFill}>
        <TabHandler {...{ tabs, tabWidth }} />
      </Box>
    </Box>
  );
}

TabsUI.propTypes = {
  tabs: NAVIGATION_TAB_PROP_TYPE.isRequired,
};

export default TabsUI;
