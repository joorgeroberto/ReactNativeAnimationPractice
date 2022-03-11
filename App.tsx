import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Ball from './src/Ball';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Ball />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
