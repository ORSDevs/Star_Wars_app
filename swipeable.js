import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView, Text, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

const App = () => {
  const data = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ];

  const renderRightActions = () => {
    return (
      <View
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: 20,
        }}
      >
        <Text style={{ color: "white" }}>Delete</Text>
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        {data.map((item, index) => (
          <Swipeable key={index} renderRightActions={renderRightActions}>
            <View
              style={{
                padding: 20,
                borderBottomWidth: 1,
                borderColor: "#ddd",
              }}
            >
              <Text>{item}</Text>
            </View>
          </Swipeable>
        ))}
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default App;
