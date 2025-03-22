import {
  DrawerContentScrollView
} from '@react-navigation/drawer';
import { TouchableOpacity, Text, ScrollView, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import items from '@/constants/DrawerItems';

const iconColor = "#64748B";

function CustomDrawerContent() {
  const insets = useSafeAreaInsets();

  return (
    <DrawerContentScrollView style={{ flex: 1, paddingTop: insets.top }}>
      <ScrollView style={{ flex: 1 }}>
        <View className="flex items-start justify-center" style={{ paddingHorizontal: 15 }}>
          <View className='overflow-hidden'>
            <Image
              source={require('../assets/images/user-photo.jpg')}
              style={{ width: 80, height: 80, borderRadius: 40 }}
            />
          </View>
          <View style={{ marginTop: 6}}>
            <Text className='font-bold text-xl' style={{ color: "#020617"}}>Sophia Rose</Text>
            <Text className='text-sm' style={{ color: "#94A3B8" }}>UX/UI Designer</Text>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: "#E2E8F0", marginVertical: 20}} /> 
        <View>
          {items.map((item) => {
            return (
              <TouchableOpacity
                key={item.label}
                style={{ display: "flex", flexDirection: "row", paddingHorizontal: 15, paddingVertical: 15, alignItems: "center" }}
                onPress={() => {
                  router.push(item.url);
                }}
              >
              <Feather name={item.icon} size={24} color={iconColor} style={{ marginRight: 10 }} />
              <Text style={{ color: "#020617", fontWeight: 500 }} >{item.label}</Text>
            </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;