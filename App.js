// App.js — Menu sidebar geser dari KIRI tanpa Modal, pakai posisi absolut
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
  Animated,
  Dimensions,
  Pressable,
} from "react-native";
import { useState, useRef, useEffect } from "react";

import TabNavigator from "./navigation/TabNavigator";
import HalamanJadwal from "./screens/HalamanJadwal";
import HalamanPengumuman from "./screens/HalamanPengumuman";
import HalamanTentang from "./screens/HalamanTentang";

const { width: LEBAR_LAYAR } = Dimensions.get("window");
const LEBAR_PANEL = LEBAR_LAYAR * 0.72;

export const navigationRef = createNavigationContainerRef();

function navigate(name) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
}

const Stack = createNativeStackNavigator();

function MenuSamping({ visible, onClose }) {
  const slideAnim = useRef(new Animated.Value(-LEBAR_PANEL)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (visible) {
      setRendered(true);
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -LEBAR_PANEL,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start(() => setRendered(false));
    }
  }, [visible]);

  if (!rendered) return null;

  const menuItems = [
    { icon: "📅", label: "Jadwal Kuliah", screen: "Jadwal" },
    { icon: "📢", label: "Pengumuman", screen: "Pengumuman" },
    { icon: "🏛️", label: "Tentang Kampus", screen: "Tentang" },
  ];

  return (
    <View style={styles.menuWrapper}>
      {/* Background gelap — tap untuk tutup */}
      <Animated.View style={[styles.backdrop, { opacity: fadeAnim }]}>
        <Pressable style={{ flex: 1 }} onPress={onClose} />
      </Animated.View>

      {/* Panel geser dari kiri */}
      <Animated.View
        style={[styles.menuPanel, { transform: [{ translateX: slideAnim }] }]}
      >
        {/* Header */}
        <View style={styles.menuHeader}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>UIN</Text>
          </View>
          <Text style={styles.menuTitle}>E-Campus</Text>
          <Text style={styles.menuSub}>UIN Raden Mas Said Surakarta</Text>
        </View>

        <View style={styles.divider} />

        {/* Item menu */}
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.screen}
            style={styles.menuItem}
            onPress={() => {
              onClose();
              setTimeout(() => navigate(item.screen), 300);
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <Text style={styles.menuLabel}>{item.label}</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
          <Text style={styles.closeBtnText}>✕ Tutup Menu</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

export default function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
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
      </NavigationContainer>

      {/* Menu di luar NavigationContainer agar tampil di atas segalanya */}
      <MenuSamping
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  menuWrapper: {
    ...StyleSheet.absoluteFillObject, // cover seluruh layar
    flexDirection: "row",
    zIndex: 999,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  menuPanel: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: LEBAR_PANEL,
    backgroundColor: "#1A237E",
    paddingTop: 52,
    zIndex: 1000,
    elevation: 10,
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
});
