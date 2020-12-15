import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
    { 'name': 'Nguyễn Việt Hoài', 'id': 1, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 16:41:39", "isread": "1" },
    { 'name': 'Nguyễn Việt Hoài', 'id': 2, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 16:41:39", "isread": "0" },
    { 'name': 'Nguyễn Việt Hoài', 'id': 3, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 16:41:39", "isread": "1" },
    { 'name': 'Nguyễn Việt Hoài', 'id': 4, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "0" },
    { 'name': 'Nguyễn Việt Hoài', 'id': 5, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "0" },
    { 'name': 'Nguyễn Việt Hoài', 'id': 6, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "1" },
    { 'name': 'Nguyễn Việt Hoài', 'id': 7, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "1" },
    { 'name': 'Nguyễn Việt Hoài', 'id': 8, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "1" },
    { 'name': 'Nguyễn Việt Hoài', 'id': 9, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "0" },
    { 'name': 'Nguyễn Việt Hoài', 'id': 10, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "1" },
    { 'name': 'Nguyễn Việt Hoài', 'id': 11, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "1" },
    { 'name': 'Nguyễn Việt Hoài', 'id': 12, "title": "bạn là người đẹp trai nhất thế gian này", "img_url": 'https://reactnative.dev/img/tiny_logo.png', "time": "2020-11-25 13:41:39", "isread": "0" }
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;