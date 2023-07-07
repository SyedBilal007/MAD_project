import Home from './home';
import Login from './login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlatListWithAPI from './src/FlatListExamples/FlatListWithAPI';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Login',
            //  headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FlatListWithAPI" component={FlatListWithAPI} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
