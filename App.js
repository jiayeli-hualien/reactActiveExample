import React from 'react';

import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const NUM_COLUMNS = 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    width: '50%',
    padding: 10,
  },
  amount: {
    fontSize: 32,
    width: '50%',
    padding: 10,
    textAlign: 'right',
  },
});


const TextItem = ({ item }) => {
  return (<Text style={styles.title}>{item.text}</Text>);
}

const AmountTextItem = ({ item }) => {
  return (<Text style={styles.amount}>{item.amount}</Text>);
}

const Item = ({ item }) => {
  switch (item.type) {
    case 0:
      return <TextItem item={item} />
    case 1:
      return <AmountTextItem item={item} />
    default:
      return null;
  }
};

/*
elements data of the list.
4 elements for a row

type
0: Text (for column name or item)
1: Text amount

TODO: useState
TODO: remove title from item data
*/
const ItemData = [
  { type: 0, text: "Item" }, 
  { type: 0, text: "Amount" },
  { type: 0, text: "Apple" },
  { type: 1, amount: 10 },
  { type: 0, text: "Pen" },
  { type: 1, amount: 100 },
];


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ItemData}
        numColumns={NUM_COLUMNS}
        renderItem={Item}
      />
    </SafeAreaView>
  );
}