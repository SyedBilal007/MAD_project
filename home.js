import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {useState} from 'react';

import UserDetailComp from './Components/userDetailComp';

const Home = props => {
  const {userDetail} = props.route.params;

  const UserList = [
    {
      name: 'ashraz',
      email: 'ashraz.developer@gmail.com',
      img: 'https://img.freepik.com/free-vector/realistic-colorful-galaxy-background_23-2148965681.jpg',
    },
    {
      name: 'ahmed',
      email: 'ahmed@gmail.com',
      img: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701899982.jpg',
    },

    {
      name: 'adeel',
      email: 'adeel@gmail.com',
      img: 'https://img.freepik.com/free-vector/realistic-colorful-galaxy-background_23-2148965681.jpg',
    },

    {
      name: 'faraz',
      email: 'faraz@gmail.com',
      img: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701899982.jpg',
    },

    {
      name: 'shakir',
      email: 'shakir@gmail.com',
      img: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701899982.jpg',
    },
  ];

  const [data, setData] = useState(UserList);

  const deleteItem = e => {
    console.log(e);
  };

  const addItem = () => {
    let items = [];

    items.push({
      name: 'abc',
      email: 'abc@gmail.com',
      img: 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701899982.jpg',
    });

    setData(items);
  };

  const _renderUserItem = ({item, index}) => {
    return (
      <UserDetailComp
        deleteRecord={deleteItem}
        cellStyle={{backgroundColor: 'red'}}
        itemDetail={item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text>{'This is FlatList Page'}</Text>

      <FlatList data={data} renderItem={_renderUserItem} />

      <TouchableOpacity onPress={() => addItem()} style={styles.button}>
        <Text
          style={{
            backgroundColor: 'red',
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
          }}>
          Add
        </Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        onPress={() => props.navigation.navigate('Login')}
        style={styles.button}>
        <Text>Login</Text>
      </TouchableOpacity> */}

      {/* <Text>{userDetail.name}</Text>
        <Text>{userDetail.email}</Text> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
