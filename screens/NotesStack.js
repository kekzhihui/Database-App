import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotesScreen from "./NotesScreen"

const Innerstack = createStackNavigator();

export default function NoteStack() {
    return (
        <Innerstack.Navigator>
            <Innerstack.Screen 
                name="Notes"
                component={NotesScreen}
                options={{ 
                    headerTitle: "Notes App",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 30
                    },
                    headerStyle: {
                    height: 120,
                    backgroundColor: "yellow",
                    borderBottomColor: "#ccc",
                    borderBottomWidth: 1
                    }
                }}
            />
        </Innerstack.Navigator>
    )
}
