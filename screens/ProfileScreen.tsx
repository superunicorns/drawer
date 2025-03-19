import { Text, View } from 'react-native';

const ProfileScreen = () => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>Hello Navigation</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = {
  container: `items-center flex-1 justify-center`,
  title: `text-xl font-bold`,
};
