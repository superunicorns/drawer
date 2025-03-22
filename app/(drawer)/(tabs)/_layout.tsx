import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from "@/components/TabBar";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }} tabBar={props => <TabBar {...props} />}>  
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  )
}

export default TabLayout;