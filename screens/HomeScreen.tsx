import { Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>Home screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = {
  container: `items-center flex-1 justify-center`,
  title: `text-xl font-bold`,
};
