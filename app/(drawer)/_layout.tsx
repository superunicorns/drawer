import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from '@/components/CustomDrawerContent';


function Layout() {
  return (
    <Drawer screenOptions={{ drawerStyle: { borderBottomRightRadius: 0, borderTopRightRadius: 0 }}} drawerContent={(props) => <CustomDrawerContent {...props} />} />
  )
}

export default Layout;