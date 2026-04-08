// screens/HalamanProfil.js
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const profilMahasiswa = {
  nama: "Galih Fajar Nugroho",
  nim: "247411017",
  prodi: "Sains Data",
  fakultas: "Fakultas Sains dan Teknologi",
  semester: 4,
  angkatan: 2024,
  ipk: "3.92",
  sksLulus: 96,
  status: "Aktif",
  email: "247411017@mhs.uinsaid.ac.id",
  noHp: "0812-3456-7890",
  alamat: "Polokarto, Mojolaban, Kabupaten Klaten",
  pembimbing: "Atlantis PSHT",
};

export default function HalamanProfil() {
  const [fotoProfil, setFotoProfil] = useState(null);

  const pilihFoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Izin Diperlukan",
        "Aplikasi membutuhkan izin untuk mengakses galeri foto.",
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setFotoProfil(result.assets[0].uri);
    }
  };

  const inisial = profilMahasiswa.nama
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  const InfoItem = ({ icon, label, value }) => (
    <View style={styles.infoItem}>
      <Text style={styles.infoIcon}>{icon}</Text>
      <View style={styles.infoContent}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1A237E" barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header profil */}
        <View style={styles.headerBg}>
          <TouchableOpacity style={styles.avatarLingkaran} onPress={pilihFoto}>
            {fotoProfil ? (
              <Image source={{ uri: fotoProfil }} style={styles.avatarFoto} />
            ) : (
              <Text style={styles.avatarInisial}>{inisial}</Text>
            )}
            {/* Badge kamera */}
            <View style={styles.kameraBadge}>
              <Text style={styles.kameraIcon}>📷</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.namaTeks}>{profilMahasiswa.nama}</Text>
          <Text style={styles.nimTeks}>{profilMahasiswa.nim}</Text>
          <View style={styles.statusPill}>
            <Text style={styles.statusText}>🟢 {profilMahasiswa.status}</Text>
          </View>
        </View>

        {/* Statistik ringkasan */}
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profilMahasiswa.ipk}</Text>
            <Text style={styles.statLabel}>IPK</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profilMahasiswa.sksLulus}</Text>
            <Text style={styles.statLabel}>SKS Lulus</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profilMahasiswa.semester}</Text>
            <Text style={styles.statLabel}>Semester</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{profilMahasiswa.angkatan}</Text>
            <Text style={styles.statLabel}>Angkatan</Text>
          </View>
        </View>

        {/* Info akademik */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informasi Akademik</Text>
          <View style={styles.card}>
            <InfoItem
              icon="🎓"
              label="Program Studi"
              value={profilMahasiswa.prodi}
            />
            <View style={styles.divider} />
            <InfoItem
              icon="🏛️"
              label="Fakultas"
              value={profilMahasiswa.fakultas}
            />
            <View style={styles.divider} />
            <InfoItem
              icon="👨‍🏫"
              label="Dosen Pembimbing"
              value={profilMahasiswa.pembimbing}
            />
          </View>
        </View>

        {/* Info kontak */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informasi Kontak</Text>
          <View style={styles.card}>
            <InfoItem icon="📧" label="Email" value={profilMahasiswa.email} />
            <View style={styles.divider} />
            <InfoItem icon="📱" label="No. HP" value={profilMahasiswa.noHp} />
            <View style={styles.divider} />
            <InfoItem icon="🏠" label="Alamat" value={profilMahasiswa.alamat} />
          </View>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F8" },
  headerBg: {
    backgroundColor: "#1A237E",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 30,
    position: "relative",
  },
  avatarLingkaran: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#FFD54F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    elevation: 4,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.3)",
  },
  avatarFoto: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  kameraBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#FFD54F",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#1A237E",
  },
  kameraIcon: { fontSize: 11 },
  avatarInisial: { fontSize: 32, fontWeight: "bold", color: "#1A237E" },
  namaTeks: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  nimTeks: { fontSize: 14, color: "#90CAF9", marginBottom: 10 },
  statusPill: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  statusText: { color: "#B9F6CA", fontSize: 13 },
  statsRow: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: -16,
    borderRadius: 14,
    elevation: 4,
    padding: 16,
    shadowColor: "#1A237E",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  statItem: { flex: 1, alignItems: "center" },
  statValue: { fontSize: 20, fontWeight: "bold", color: "#1A237E" },
  statLabel: { fontSize: 11, color: "#9E9E9E", marginTop: 3 },
  statDivider: { width: 1, backgroundColor: "#E0E0E0" },
  section: { marginHorizontal: 16, marginTop: 20 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1A237E",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  infoItem: { flexDirection: "row", alignItems: "flex-start", padding: 14 },
  infoIcon: { fontSize: 20, marginRight: 12, marginTop: 1 },
  infoContent: { flex: 1 },
  infoLabel: { fontSize: 12, color: "#9E9E9E", marginBottom: 2 },
  infoValue: { fontSize: 14, color: "#212121", fontWeight: "500" },
  divider: { height: 1, backgroundColor: "#F0F0F0", marginHorizontal: 14 },
});
