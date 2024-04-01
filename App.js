import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import Cat from './components/Cat';
import State from './components/State';
import PizzaTranslator from './components/PizzaTranslator';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 32,
  height: 32,
};

export default function App() {
  return (
    <ScrollView>
      <Image source={logo} />
      <PizzaTranslator />
      <Image source={logo} />
      <State name='asdf' />
      <Cat name='one cat' num='1' />
      <Cat name='two cat' num='2' />
      <Image source={logo} />
    </ScrollView>
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
