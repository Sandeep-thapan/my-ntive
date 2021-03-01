import "react-native-gesture-handler";
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogoTittle from "./Components/LogoTittle";
import TopImage from "./Components/TopImage";
import TopPicks from "./Components/TopPicks";
import Popular from "./Components/Popular";
import AboutPage from "./Components/About/AboutPage";
import TestPage from "./Components/TestPage/TestPage";
import LogIn from "./Components/TestPage/LogIn";
import Colors from "./Components/About/Constants/Colors";

import Icon from "@expo/vector-icons/SimpleLineIcons";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen() {
  return (
    <KeyboardAvoidingView enabled={true}>
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.buttonBackgroundColor}
        barStyle="light-content"
      />
      <LogoTittle />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.verScroll}>
        <TopImage />
        <TopPicks />
        <Popular />
      </ScrollView>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar
        animated={true}
        backgroundColor={Colors.buttonBackgroundColor}
        barStyle="light-content"
      />
      <View>
        <LogoTittle />
        <AboutPage />
      </View>
    </SafeAreaView>
  );
}

function TestScreen() {
  return(
    <TestPage />
  );
}

function login() {
  return(
    <LogIn />
  );
}

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer style={styles.navbarStyle}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Edit") {
              iconName = focused ? "folder-open" : "folder-open-outline";
            }
            else if (route.name === "Test") {
              iconName = focused ? "code-download" : "code-download-outline";
            }
            else if (route.name === "Account") {
              iconName = focused ? "add-circle" : "add-circle-outline"
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={22} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Edit" component={AboutScreen} />
        <Tab.Screen name="Test" component={TestScreen} />
        <Tab.Screen name="Account" component={login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navbarStyle: {
    flex: 1,
    position: 'absolute'
  },
  safeContainer: {},
  verScroll: {
    marginBottom: 40,
  },
});

export default App;
