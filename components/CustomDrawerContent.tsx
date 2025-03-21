import Feather from '@expo/vector-icons/Feather';
import { TouchableOpacity, Text, ScrollView, View, Image } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

function CustomDrawerContent({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
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
            navigation.navigate('Home');
          }}>
          <Text>Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CustomDrawerContent;