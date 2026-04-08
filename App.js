// App.js — Menu sidebar pakai Modal + navigationRef
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";

import TabNavigator from "./navigation/TabNavigator";
import HalamanJadwal from "./screens/HalamanJadwal";
import HalamanPengumuman from "./screens/HalamanPengumuman";
import HalamanTentang from "./screens/HalamanTentang";

// Ref global untuk navigasi dari luar komponen
export const navigationRef = createNavigationContainerRef();

function navigate(name) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
}

const Stack = createNativeStackNavigator();

// Komponen Modal Menu Samping
function MenuSamping({ visible, onClose }) {
  const menuItems = [
    { icon: "📅", label: "Jadwal Kuliah", screen: "Jadwal" },
    { icon: "📢", label: "Pengumuman", screen: "Pengumuman" },
    { icon: "🏛️", label: "Tentang Kampus", screen: "Tentang" },
  ];

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        {/* Panel menu kiri */}
        <View style={styles.menuPanel}>
          {/* Header */}
          <View style={styles.menuHeader}>
            <View style={styles.logoBox}>
              <Text style={styles.logoText}>UIN</Text>
            </View>
            <Text style={styles.menuTitle}>E-Campus</Text>
            <Text style={styles.menuSub}>UIN Raden Mas Said Surakarta</Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Item menu */}
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.screen}
              style={styles.menuItem}
              onPress={() => {
                onClose();
                navigate(item.screen);
              }}
              activeOpacity={0.7}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}

          {/* Tombol tutup */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeBtnText}>✕ Tutup Menu</Text>
          </TouchableOpacity>
        </View>

        {/* Area kanan — tap untuk tutup */}
        <Pressable style={styles.sideArea} onPress={onClose} />
      </View>
    </Modal>
  );
}

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#1A237E" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontWeight: "bold", fontSize: 18 },
        }}
      >
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{
            title: "E-Campus",
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => setMenuVisible(true)}
                style={{ marginLeft: 4, padding: 6 }}
              >
                <Text style={{ color: "#FFD54F", fontSize: 24 }}>☰</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Jadwal"
          component={HalamanJadwal}
          options={{ title: "Jadwal Kuliah" }}
        />
        <Stack.Screen
          name="Pengumuman"
          component={HalamanPengumuman}
          options={{ title: "Pengumuman" }}
        />
        <Stack.Screen
          name="Tentang"
          component={HalamanTentang}
          options={{ title: "Tentang Kampus" }}
        />
      </Stack.Navigator>

      {/* Modal menu samping */}
      <MenuSamping
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  menuPanel: {
    width: "72%",
    backgroundColor: "#1A237E",
    paddingTop: 48,
  },
  menuHeader: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  logoBox: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: "#FFD54F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  logoText: { fontSize: 20, fontWeight: "bold", color: "#1A237E" },
  menuTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  menuSub: { color: "#90CAF9", fontSize: 12, textAlign: "center" },
  divider: {
    height: 1,
    backgroundColor: "rgba(255,255,255,0.15)",
    marginBottom: 8,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.08)",
  },
  menuIcon: { fontSize: 22, marginRight: 14 },
  menuLabel: { color: "#FFFFFF", fontSize: 15, fontWeight: "500", flex: 1 },
  menuArrow: { color: "#90CAF9", fontSize: 22 },
  closeBtn: {
    margin: 20,
    marginTop: 24,
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
  },
  closeBtnText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 14 },
  sideArea: { flex: 1 },
});
