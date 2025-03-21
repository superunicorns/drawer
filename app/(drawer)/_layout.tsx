import { View, Text } from 'react-native'
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from '@/components/CustomDrawerContent';


function Layout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} />
  )
}

export default Layout;