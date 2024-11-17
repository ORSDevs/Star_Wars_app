import { AppRegistry, Platform } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

if (Platform.OS === "web") {
  AppRegistry.registerComponent(appName, () => App);
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById("app-root"),
  });
} else {
  AppRegistry.registerComponent(appName, () => App);
}
