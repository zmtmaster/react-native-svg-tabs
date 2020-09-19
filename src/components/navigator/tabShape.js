import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { line, curveBasis } from 'd3-shape';

import { SIZES } from '~/constants';
import { useTheme } from '~/theme';

const { NAVIGATION_BOTTOM_TABS_HEIGHT } = SIZES;
const { width: wWidth } = Dimensions.get('window');
const lineGenerator = line()
  .x(({ x }) => x)
  .y(({ y }) => y);
const curveLineGenerator = line()
  .curve(curveBasis)
  .x(({ x }) => x)
  .y(({ y }) => y);

function TabShape({ tabWidth }) {
  const theme = useTheme();
  const d = useMemo(() => {
    const left = lineGenerator([
      { x: 0, y: 0 },
      { x: tabWidth * 2, y: 0 },
    ]);
    const center = curveLineGenerator([
      { x: tabWidth * 2, y: 0 },
      { x: tabWidth * 2 + 5, y: 0 },
      { x: tabWidth * 2 + 15, y: NAVIGATION_BOTTOM_TABS_HEIGHT * 0.45 },
      { x: tabWidth * 3 - 15, y: NAVIGATION_BOTTOM_TABS_HEIGHT * 0.45 },
      { x: tabWidth * 3 - 5, y: 0 },
      { x: tabWidth * 3, y: 0 },
    ]);
    const right = lineGenerator([
      { x: tabWidth * 3, y: 0 },
      { x: wWidth, y: 0 },
      { x: wWidth, y: NAVIGATION_BOTTOM_TABS_HEIGHT },
      { x: 0, y: NAVIGATION_BOTTOM_TABS_HEIGHT },
      { x: 0, y: 0 },
    ]);
    return `${left} ${center} ${right}`;
  }, [tabWidth]);

  return (
    <Svg width={wWidth} {...{ height: NAVIGATION_BOTTOM_TABS_HEIGHT }}>
      <Path fill={theme.colors.navigationTabs} {...{ d }} />
    </Svg>
  );
}

TabShape.propTypes = {
  tabWidth: PropTypes.number.isRequired,
};

export default TabShape;
