import { TabNavigator } from 'react-navigation';

// Screens
import Radon from '../Components/Environment/Radon/Radon';
import Water from '../Components/Environment/Water/Water';

const Tabs = TabNavigator({
  Radon: { screen: Radon },
  Water: { screen: Water },
}, {
  swipeEnabled: true,
  animationEnabled: true,
});

export default Tabs;
