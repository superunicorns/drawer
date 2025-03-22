import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from '@/components/CustomDrawerContent';

function Layout() {
  return (
    <Drawer screenOptions={{ headerShown: false, drawerStyle: { borderBottomRightRadius: 0, borderTopRightRadius: 0 }}} drawerContent={(props) => <CustomDrawerContent {...props} />} >
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="topics" options={{ title: "Topics" }} />
      <Drawer.Screen name="messages" options={{ title: "Messages" }} />
      <Drawer.Screen name="notifications" options={{ title: "Notifications" }} />
      <Drawer.Screen name="bookmarks" options={{ title: "Bookmarks" }} />
      <Drawer.Screen name="profile" options={{ title: "Profile" }} />
    </Drawer>
  )
}

export default Layout;