import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,        
    borderColor: "red",    
  },
  listContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    borderWidth: 2,       
    borderColor: "red",    
  },

  item: {
    margin: 5,
    padding: 5,
    color: "slategrey",
    backgroundColor: "ghostwhite",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "red",
  },

  filter: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: "red",
  },

  controls: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "red",
  },
});
