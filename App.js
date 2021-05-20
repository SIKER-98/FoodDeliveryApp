import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { RestaurantScreen, OrderDeliveryScreen, HomeScreen } from "./screens";
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
                       initialRouteName={"Home"}
      >
        <Stack.Screen name={"Home"}
                      component={Tabs} />
        <Stack.Screen name={"Restaurant"}
                      component={RestaurantScreen} />
        <Stack.Screen name={"OrderDelivery"}
                      component={OrderDeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
