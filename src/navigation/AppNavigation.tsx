

import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';

const RootStack = createNativeStackNavigator({
    screens: {
      Home: Home,
    },
  });
  
export const Navigation = createStaticNavigation(RootStack);