import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, Image } from 'react-native';
import { styles } from '../css/indexStyle';
import { Link } from 'expo-router';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#61dafb" barStyle="dark-content" />
    <Image style={styles.imagens}
      source={require('../../assets/Prof(1).jpg')}
      />
        <Text>Pagina sobre Wellington Correia Borsato</Text>
    
        <Link style={styles.btn1}  href={"/"}> Index </Link>
        
        <Link style={styles.btn3}  href={"/contatos"}> Contatos </Link>
      
      </SafeAreaView>
  );
}

