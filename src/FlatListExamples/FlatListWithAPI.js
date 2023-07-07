import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function FlatListWithAPI() {
  const [dataList, setDataList] = useState([]);

  const _getData = () => {
    axios
      .get('https://dummyjson.com/users')
      .then(response => {
        // handle success
        console.log('_getData_data', response.data);
        setDataList(response.data.users);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    _getData();
  }, []);

  const _renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.avatar}>
          <Image style={styles.avatarImage} source={{uri: item.image}} />
        </View>
        <View style={{marginLeft: 15}}>
          <Text style={styles.title}>
            {`${item.firstName} ${item.lastName}`}
            {/* {item.firstName + ' ' + item.lastName} */}
          </Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={dataList} renderItem={_renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#E1E1E1',
    borderBottomWidth: 1,
    marginTop: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: '#E1E1E1',
    borderWidth: 1,
  },
  avatarImage: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
