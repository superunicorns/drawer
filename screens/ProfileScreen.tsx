import { cssInterop } from 'nativewind';
import { Text, View } from 'react-native';

const StyledViewContainer = cssInterop(View, { className: 'items-center flex-1 justify-center' });
const StyledTitle = cssInterop(Text, { className: 'text-xl font-bold' });

const ProfileScreen = () => {
  return (
    <StyledViewContainer>
      <StyledTitle>Profile screen</StyledTitle>
    </StyledViewContainer>
  );
};

export default ProfileScreen;
