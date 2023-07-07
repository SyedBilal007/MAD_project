import {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const UserDetailComp = ({cellStyle, itemDetail, deleteRecord}) => {
  return (
    <TouchableOpacity
      onPress={deleteRecord}
      // onPress={() => {
      //   deleteRecord('itemDetail');
      // }}
      style={[styles.cell, cellStyle]}>
      <Text style={styles.detail}>{itemDetail.name}</Text>
      <Text style={styles.detail}>{itemDetail.email}</Text>
    </TouchableOpacity>
  );
};

export default UserDetailComp;

const styles = StyleSheet.create({
  cell: {
    backgroundColor: 'green',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  detail: {
    margin: 10,
  },
});
