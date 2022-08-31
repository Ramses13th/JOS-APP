import languageScreen from "./Components/Continut/Screens/LangScreen";
import Home from "./Components/Continut/Screens/RO/Home";
import HomeEn from "./Components/Continut/Screens/EN/Home";
import DrawerLoader from "./Components/Continut/Drawers/RO/DrawerLoader";
import DrawerLoaderEn from "./Components/Continut/Drawers/EN/DrawerLoader";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="lang-menu"
          component={languageScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ro"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ro-main"
          component={DrawerLoader}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="en"
          component={HomeEn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="en-main"
          component={DrawerLoaderEn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /* Aici vei adauga un stackscreen pt fiecare limba. */
}
