import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Login = props => {
  let detail = {
    name: 'Ashraz Rashid',
    email: 'ashraz.developer@gmail.com',
  };

  return (
    <View style={styles.container}>
      <Text>{'This is Login Page'}</Text>

      <Image
        resizeMode="contain"
        style={{width: 300, height: 300}}
        // source={{
        //   uri: 'https://img.freepik.com/free-vector/realistic-colorful-galaxy-background_23-2148965681.jpg',
        // }}

        source={require('./assets/galaxy.jpg')}
      />

      <TouchableOpacity
        onPress={() => props.navigation.navigate('FlatListWithAPI')}
        style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
