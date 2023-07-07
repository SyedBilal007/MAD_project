import {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FlatListWithAPI from './src/FlatListExamples/FlatListWithAPI';

function App(props) {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const _login = () => {
    console.log({userName, password});
    props.navigation.navigate('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.subTitle}>Welcome To DSU Login</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter User Name"
        placeholderTextColor={'white'}
        value={userName}
        onChangeText={value => setUserName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor={'white'}
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => _login()} style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    // justifyContent:'',
    //alignItems:'center'
  },

  button: {
    backgroundColor: 'tomato',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 25,
  },
  headerView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 15,
  },
  login: {
    color: 'white',
    fontSize: 25,
    // textAlign:'center',
  },
  subTitle: {
    color: 'white',
    fontSize: 25,
  },
});

export default App;
