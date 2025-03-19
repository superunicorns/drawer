import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} className="rounded-tl-none bg-white">
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;

const styles = {};
