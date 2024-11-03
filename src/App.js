import { SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import Container from './components/Container';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <HomePage></HomePage>
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
