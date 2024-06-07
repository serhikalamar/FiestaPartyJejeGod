import { StyleSheet, Text, View } from 'react-native';
import Main from './src/components/main';
import InicioPantalla from './src/components/inicio';
import InicioSesion from './src/components/inicio';

export default function App() {
  return (
    <Main/>
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
