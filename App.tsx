import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CustomDrawerContent from 'screens/CustomDrawerContent';
import HomeScreen from 'screens/HomeScreen';
import ProfileScreen from 'screens/ProfileScreen';
import './global.css';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} navigation={navigation} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
        },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
