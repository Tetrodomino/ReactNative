import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native';
import Cat from './components/Cat';
import State from './components/State';
import PizzaTranslator from './components/PizzaTranslator';
import FlatListBasic from './components/FlatListBasic';
import SectionListBasic from './components/SectionListBasic';
import FetchExample from './components/FetchExample';
import CountButton from './components/CountButton';
import Ex_fruitList from './components/Ex_fruitList';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 32,
  height: 32,
};

export default function App() {
  return (
    <ScrollView>
      <Image source={logo} />
      <Ex_fruitList />
      {/* <Image source={logo} />
      <CountButton />
      <Image source={logo} />
      <FetchExample />
      <Image source={logo} />
      <SectionListBasic />
      <Image source={logo} />
      <FlatListBasic />
      <Image source={logo} />
      <PizzaTranslator />
      <Image source={logo} />
      <State name='asdf' />
      <Cat name='one cat' num='1' />
      <Cat name='two cat' num='2' />
      <Image source={logo} /> */}
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
