import { Text, View } from 'react-native';
import 'nativewind';
import '../styles/global.css';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg font-bold">Hello React Native!</Text>
      <Text className="text-base">Meu App</Text>
    </View>
  );
}