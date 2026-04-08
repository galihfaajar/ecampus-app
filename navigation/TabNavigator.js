// navigation/TabNavigator.js
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";

import HomeStack from "./HomeStack";
import HalamanNilai from "../screens/HalamanNilai";
import HalamanProfil from "../screens/HalamanProfil";

const Tab = createBottomTabNavigator();

const ICONS = {
  HomeTab: { active: "📚", inactive: "📖" },
  Nilai: { active: "📊", inactive: "📉" },
  Profil: { active: "👤", inactive: "👥" },
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          const icon = ICONS[route.name];
          return (
            <Text style={{ fontSize: size - 2 }}>
              {focused ? icon.active : icon.inactive}
            </Text>
          );
        },
        tabBarActiveTintColor: "#1A237E",
        tabBarInactiveTintColor: "#9E9E9E",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#E0E0E0",
          paddingBottom: 6,
          paddingTop: 4,
          height: 62,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
        // Header Tab disembunyikan — header dikelola Stack di App.js
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{ title: "Mata Kuliah" }}
      />
      <Tab.Screen
        name="Nilai"
        component={HalamanNilai}
        options={{ title: "Nilai" }}
      />
      <Tab.Screen
        name="Profil"
        component={HalamanProfil}
        options={{ title: "Profil Saya" }}
      />
    </Tab.Navigator>
  );
}
