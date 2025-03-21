import Feather from '@expo/vector-icons/Feather';
import { cssInterop } from 'nativewind';
import { TouchableOpacity, Text, ScrollView, View, Image } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const StyledTopView = cssInterop(View, { className: 'flex items-center justify-center py-8 px-6' });
const StyledTouchableOpacity = cssInterop(TouchableOpacity, { className: 'bg-red-100' });
const StyledImageContainer = cssInterop(View, { className: 'w-full h-auto' });

function CustomDrawerContent({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
      <ScrollView style={{ flex: 1 }}>
        <StyledTopView>
          <StyledImageContainer>
            <Image
              source={require('../assets/user-photo.jpg')}
              style={{ width: 200, height: 200 }}
            />
          </StyledImageContainer>
        </StyledTopView>
        <StyledTouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text>Home</Text>
        </StyledTouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CustomDrawerContent;
