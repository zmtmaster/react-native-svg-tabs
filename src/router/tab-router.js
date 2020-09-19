import React, { useMemo, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '~/constants';
import { ScreenA, ScreenB, ScreenC, ScreenD, ScreenE } from '~/screens';
import TabsUI from '~/components/navigator';
import { Box } from '~/theme';

const Tabs = createBottomTabNavigator();

function Routes() {
  const navigation = useRef();

  const tabs = useMemo(
    () => [
      {
        name: 'A',
        action: () =>
          navigation.current?.navigate(ROUTES.A, { route: ROUTES.A }),
      },
      {
        name: 'B',
        action: () =>
          navigation.current?.navigate(ROUTES.B, { route: ROUTES.B }),
      },
      {
        name: 'C',
        action: () =>
          navigation.current?.navigate(ROUTES.C, { route: ROUTES.C }),
      },
      {
        name: 'D',
        action: () =>
          navigation.current?.navigate(ROUTES.D, { route: ROUTES.D }),
      },
      {
        name: 'E',
        action: () =>
          navigation.current?.navigate(ROUTES.E, { route: ROUTES.E }),
      },
    ],
    [],
  );

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <NavigationContainer ref={navigation}>
        <Tabs.Navigator
          initialRouteName={ROUTES.A}
          tabBar={(props) => <TabsUI {...{ tabs, ...props }} />}>
          <Tabs.Screen name={ROUTES.A} component={ScreenA} />
          <Tabs.Screen name={ROUTES.B} component={ScreenB} />
          <Tabs.Screen name={ROUTES.C} component={ScreenC} />
          <Tabs.Screen name={ROUTES.D} component={ScreenD} />
          <Tabs.Screen name={ROUTES.E} component={ScreenE} />
        </Tabs.Navigator>
      </NavigationContainer>
    </Box>
  );
}
export default Routes;
