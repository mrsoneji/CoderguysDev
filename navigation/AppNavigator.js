import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainNavigator from './MainNavigator';

const switchNavigator = createSwitchNavigator(
  {
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
    title: 'Main',
    navigationOptions: {
      headerStyle: { backgroundColor: '#E73536' },
      title: 'You are not logged in',
      headerTintColor: 'white',
    },
  },
);

export default createAppContainer(switchNavigator);
