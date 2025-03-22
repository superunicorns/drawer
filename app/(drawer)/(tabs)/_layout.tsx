import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from "@/components/TabBar";
import { DrawerToggleButton } from '@react-navigation/drawer';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerLeft: () => <DrawerToggleButton />, headerShown: true }} tabBar={props => <TabBar {...props} />}>  
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  )
}

export default TabLayout;