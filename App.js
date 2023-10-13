import { StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Text>Open up App.js to start working on your app!</Text>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
