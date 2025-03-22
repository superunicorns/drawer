import {
  DrawerContentScrollView
} from '@react-navigation/drawer';
import { TouchableOpacity, Text, ScrollView, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import items from '@/constants/DrawerItems';

const iconColor = "#334155";

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
        <View>
          {items.map((item) => {
            return (
              <TouchableOpacity
                key={item.label}
                className='bg-red-200'
                onPress={() => {
                  router.push(item.url);
                }}
              >
              <Feather name={item.icon} size={24} color={iconColor} />
              <Text>{item.label}</Text>
            </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;