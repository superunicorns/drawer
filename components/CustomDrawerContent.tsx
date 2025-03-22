import { useEffect } from 'react';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { TouchableOpacity, Text, ScrollView, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router, usePathname } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import items from '@/constants/DrawerItems';

const iconColor = "#64748B";

function CustomDrawerContent() {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();

  useEffect(() => {
  
  }, [pathname]);

  return (
    <DrawerContentScrollView style={{ flex: 1, paddingTop: insets.top }}>
      <ScrollView style={{ flex: 1 }}>
        <View className="flex items-start justify-center" style={{ paddingHorizontal: 15 }}>
          <View className='overflow-hidden'>
            <Image
              source={require('../assets/images/user-photo.jpg')}
              style={{ width: 70, height: 70, borderRadius: 35 }}
            />
          </View>
          <View style={{ marginTop: 6, borderBottomColor: "#E2E8F0", borderBottomWidth: 1,  }}>
            <Text className='font-bold text-xl' style={{ color: "#020617"}}>Sophia Rose</Text>
            <Text className='text-sm' style={{ color: "#94A3B8", marginBottom: 20 }}>UX/UI Designer</Text>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          {items.map((item) => {
            return (
              <DrawerItem
                key={item.label}
                onPress={() => {
                  router.push(item.url);
                }}
                label={item.label}
                icon={() => (
                  <Feather name={item.icon} size={24} color={pathname == item.path ? "#fff" : iconColor} style={{ marginRight: 10 }} />
                )}
                labelStyle={{ color: pathname == item.path ? "#fff" : "#020617", fontWeight: 500, fontSize: 16, marginLeft: -15 }}
                style={{ 
                  justifyContent: "center", 
                  backgroundColor: pathname == item.path ? "#2563EB" : "transparent", 
                  borderRadius: 6, 
                  marginVertical: 4,
                  shadowColor: pathname == item.path ? "#60A5FA" : "transparent",
                  shadowOffset: {
                    width: 0,
                    height: pathname == item.path ? 15 : 0,
                  },
                  shadowOpacity:  pathname == item.path ? 0.24 : 0,
                  shadowRadius: pathname == item.path ? 16.41 : 0,
                  elevation: pathname == item.path ? 20 : 0
                }}
              />
            )
          })}
        </View>
      </ScrollView>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;