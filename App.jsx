import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { appstyle } from './AppStyle';
export default function App() {

  return (
    <View style={appstyle.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
