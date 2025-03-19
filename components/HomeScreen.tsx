import { Text, View } from 'react-native';

export const HomeScreen = () => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>Hello Navigation</Text>
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  title: `text-xl text-red-700 font-bold`,
};
