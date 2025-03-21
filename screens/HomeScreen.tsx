import { cssInterop } from "nativewind";
import { Text, View } from 'react-native';

const StyledView = cssInterop(View, { className: 'style'});
const StyledText = cssInterop(Text, { className: 'style'});

const HomeScreen = () => {
  return (
    <View className="items-center flex-1 justify-center">
      <Text className="text-xl font-bold">Home screen</Text>
    </View>
  );
};

export default HomeScreen;