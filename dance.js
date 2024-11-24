import React from 'react';
import { AppRegistry, Platform, View, Image, Text } from 'react-native';
import { name as appName } from './app.json';

import danceGif from './assets/images/dance.gif';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Dance!</Text>
      {}
      <Image
        source={danceGif}
        style={{ width: 300, height: 300 }}
        resizeMode="contain"
      />
    </View>
  );
};

if (Platform.OS === 'web') {
  AppRegistry.registerComponent(appName, () => App);
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('app-root'),
  });
} else {
  AppRegistry.registerComponent(appName, () => App);
}

export default App;
