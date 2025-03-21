import { cssInterop } from "nativewind";
import { Text, View } from 'react-native';

const StyledView = cssInterop(View, { className: 'style'});
const StyledText = cssInterop(Text, { className: 'style'});

const ProfileScreen = () => {
  return (
    <View className="items-center flex-1 justify-center">
      <Text className="text-xl font-bold">Profile screen</Text>
    </View>
  );
};

export default ProfileScreen;