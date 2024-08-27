import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './Components/Header';
import ListItem from './Components/ListItem';
import AddItem from './Components/AddItem';
import { uuid } from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Milk" },
    { id: 2, text: "Eggs" },
    { id: 3, text: "Bread" },
    { id: 4, text: "Juice" },
  ]);
  const deleteItem = (id) => {
    setItems(prevItem => {
      return prevItem.filter((item) => item.id !== id);
    })
  };

  const addItems = (text) => {
    if (!text) {
      Alert.alert(
        "Error",
        "Please enter an Item",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Ok", onPress: () => console.log("OK Pressed") }
        ]
      );
    } else {
      setItems(prevItem => {
        // return [{id : prevItem.length + 1, text},...prevItem]
        return [...prevItem, { id: prevItem.length + 1, text }]
      })
    }
  }
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItems={addItems} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  }
});

export default App;






// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Hello World</Text>
//       <Image source={{uri:'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}/>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     justifyContent: 'center', 
//     alignItems: "center"
//   },
//   text: {
//     color: 'darkslateblue', 
//     fontSize: 30 
//   }, 
//   img :{
//     width : 100,
//     height : 100,
//     borderRadius : 100/2,
//   }
// })

// export default App;