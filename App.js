import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from '@expo/vector-icons';
import NotesStack from "./screens/NotesStack";
import AddScreen from "./screens/AddScreen";


const Stack = createStackNavigator();


function NotesScreen({ navigation }) {
  // create state variables for our notes
  const [notes, setNotes] = useState([
    {title: "walk the dog", done: false, id: "0"},
    {title: "water the plants", done: false, id: "1"},
  ]);

  function addNote() {
    navigation.navigate("Add Note");
  }

  

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen
          name="Notes Stack"
          component={NotesStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Add Note" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
