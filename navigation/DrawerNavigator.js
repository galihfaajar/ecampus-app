// navigation/DrawerNavigator.js
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { DrawerView } from "@react-navigation/drawer";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import HalamanJadwal from "../screens/HalamanJadwal";
import HalamanPengumuman from "../screens/HalamanPengumuman";
import HalamanTentang from "../screens/HalamanTentang";

const Drawer = createDrawerNavigator();

// ─── Ikon SVG-free menggunakan emoji / teks ───────────────────────────────────
const DRAWER_ICONS = {
  Beranda: "🏠",
  Jadwal: "📅",
  Pengumuman: "📢",
  Tentang: "🏛️",
};

// ─── Custom Drawer Content ────────────────────────────────────────────────────
function CustomDrawerContent(props) {
  return (
    <View style={styles.drawerContainer}>
      {/* Header */}
      <View style={styles.drawerHeader}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>🎓</Text>
        </View>
        <Text style={styles.appName}>Portal Mahasiswa</Text>
        <Text style={styles.appSubtitle}>Sistem Informasi Akademik</Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Menu Items */}
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Footer */}
      <View style={styles.drawerFooter}>
        <View style={styles.divider} />
        <Text style={styles.footerText}>© 2025 Kampus Anda</Text>
        <Text style={styles.footerVersion}>v1.0.0</Text>
      </View>
    </View>
  );
}

// ─── Drawer Navigator ─────────────────────────────────────────────────────────
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        // ── Ikon tiap item ──
        drawerIcon: ({ focused, size }) => (
          <Text style={{ fontSize: size - 2 }}>
            {DRAWER_ICONS[route.name] ?? "📄"}
          </Text>
        ),

        // ── Posisi & tipe drawer ──
        drawerType: "front", // slide dari samping (bukan bottom sheet)
        drawerPosition: "left", // dari kiri
        swipeEnabled: true, // bisa diswipe

        // ── Warna & gaya label ──
        drawerActiveTintColor: "#1A237E",
        drawerInactiveTintColor: "#616161",
        drawerActiveBackgroundColor: "#E8EAF6",

        drawerLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
          marginLeft: -8,
        },

        drawerItemStyle: {
          borderRadius: 10,
          marginHorizontal: 8,
          marginVertical: 2,
        },

        // ── Header ──
        headerStyle: {
          backgroundColor: "#1A237E",
          elevation: 4,
          shadowColor: "#000",
          shadowOpacity: 0.3,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 17,
        },
        headerTitleAlign: "center",
      })}
    >
      {/* 1. Beranda → TabNavigator (3 tab: Mata Kuliah, Nilai, Profil) */}
      <Drawer.Screen
        name="Beranda"
        component={TabNavigator}
        options={{
          title: "Beranda",
          // Header Tab sudah dihandle di dalam TabNavigator/Stack
          // Biarkan Drawer header muncul di sini
          headerShown: true,
        }}
      />

      {/* 2. Jadwal Kuliah */}
      <Drawer.Screen
        name="Jadwal"
        component={HalamanJadwal}
        options={{ title: "Jadwal Kuliah" }}
      />

      {/* 3. Pengumuman */}
      <Drawer.Screen
        name="Pengumuman"
        component={HalamanPengumuman}
        options={{ title: "Pengumuman" }}
      />

      {/* 4. Tentang Kampus */}
      <Drawer.Screen
        name="Tentang"
        component={HalamanTentang}
        options={{ title: "Tentang Kampus" }}
      />
    </Drawer.Navigator>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  // Header
  drawerHeader: {
    backgroundColor: "#1A237E",
    paddingTop: 48,
    paddingBottom: 24,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  logoCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "rgba(255,255,255,0.15)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.4)",
  },
  logoText: {
    fontSize: 36,
  },
  appName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  appSubtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
    marginTop: 4,
    letterSpacing: 0.3,
  },

  // Divider
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 16,
    marginVertical: 8,
  },

  scrollContent: {
    paddingTop: 8,
  },

  // Footer
  drawerFooter: {
    paddingBottom: 24,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  footerText: {
    color: "#9E9E9E",
    fontSize: 11,
    marginTop: 8,
  },
  footerVersion: {
    color: "#BDBDBD",
    fontSize: 10,
    marginTop: 2,
  },
});
