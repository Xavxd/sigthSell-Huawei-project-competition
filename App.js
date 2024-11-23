/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const App = () => {  // Se elimina el tipo React.FC
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>¡Hola Mundo con JavaScript!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
