import React from 'react';

import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Pressable,
  View,
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
  },
  rowHalf: {
    width: '50%',
    padding: 10,
  },
  amount: {
    fontSize: 32,
    textAlign: 'right',
  },
});


const TextItem = ({ item }) => {
  return (<Text style={styles.title}>{item.text}</Text>);
}

rowPressed = (item) => {
  console.log('pressed ' + item.id);
}

const AmountTextItemPressable = ({ item }) => {
  return (
    <View style={styles.rowHalf}>
      <Pressable
        onPress={()=>rowPressed(item)}>
          <Text style={styles.amount}>{item.amount}</Text>        
      </Pressable>
    </View>
    );
}

const TextItemPressable = ({ item }) => {
  return (
    <View style={styles.rowHalf}>
      <Pressable
        onPress={()=>rowPressed(item)}>
          <Text style={styles.title}>{item.text}</Text>        
      </Pressable>
    </View>
    );
}

const Item = ({ item }) => {
  switch (item.type) {
    case 0:
      return <TextItem item={item} />
    case 1:
      return <AmountTextItemPressable item={item} />
    case 2:
      return <TextItemPressable item={item}/>
    default:
      return null;
  }
};

/*
elements data of the list.
4 elements for a row

type
0: Text (for column name or item)
1: Text amount, pressable
2: Text, pressable

TODO: useState
TODO: remove title from item data
TODO: show in other way, pack the same ids in a object.
*/
const ItemData = [
  { type: 0, text: "Item" }, 
  { type: 0, text: "Amount" },
  { type: 2, id: 0x01, text: "Apple" },
  { type: 1, id: 0x01, amount: 10 },
  { type: 2, id: 0x02, text: "Pen" },
  { type: 1, id: 0x02, amount: 100 },
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