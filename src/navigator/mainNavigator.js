import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen415197Navigator from '../features/BlankScreen415197/navigator';
import BlankScreen214202Navigator from '../features/BlankScreen214202/navigator';
import BlankScreen114201Navigator from '../features/BlankScreen114201/navigator';
import BlankScreen014061Navigator from '../features/BlankScreen014061/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen415197: { screen: BlankScreen415197Navigator },
BlankScreen214202: { screen: BlankScreen214202Navigator },
BlankScreen114201: { screen: BlankScreen114201Navigator },
BlankScreen014061: { screen: BlankScreen014061Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
