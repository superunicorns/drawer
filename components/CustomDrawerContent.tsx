import Feather from '@expo/vector-icons/Feather';
import {
  DrawerContentScrollView
} from '@react-navigation/drawer';
import { TouchableOpacity, Text, ScrollView, View, Image } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';

function CustomDrawerContent() {
  const insets = useSafeAreaInsets();

  return (
    <DrawerContentScrollView style={{ flex: 1, paddingTop: insets.top }}>
      <ScrollView style={{ flex: 1 }}>
        <View className="flex items-center justify-center py-8 px-6">
          <View>
            <Image
              source={require('../assets/images/user-photo.jpg')}
              style={{ width: 200, height: 200 }}
            />
          </View>
        </View>
        <TouchableOpacity
          className='bg-red-200'
          onPress={() => {
            router.push("/(drawer)/(tabs)")
          }}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className='bg-red-200'
          onPress={() => {
            router.push("/(drawer)/(tabs)/profile")
          }}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;