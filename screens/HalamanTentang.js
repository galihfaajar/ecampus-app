// screens/HalamanTentang.js
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

const infoKampus = {
  nama: "UIN Raden Mas Said Surakarta",
  singkatan: "UIN",
  rektor: "Prof. Dr. H. Toto Suharto, S.Ag",
  berdiri: 1985,
  akreditasi: "A (Unggul)",
  visi: "Menjadi Universitas Islam Unggul dan Inovatif untuk Mewujudkan Masyrarakat Indonesia Maju Berkeadaban pada 2034.",
  misi: [
    "Menyelenggarakan pendidikan tinggi berkualitas berbasis teknologi dan riset",
    "Mengembangkan ilmu pengetahuan melalui penelitian inovatif dan kolaboratif",
    "Melaksanakan pengabdian kepada masyarakat untuk kemajuan bangsa",
    "Membangun kemitraan strategis dengan industri dan institusi internasional",
  ],
  fakultas: [
    { nama: "Fakultas Ilmu Sains dan Teknologi", prodi: 4 },
    { nama: "Fakultas Lainnya", prodi: 6 },
    { nama: "Fakultas Lainnya", prodi: 3 },
    { nama: "Fakultas Lainnya", prodi: 5 },
  ],
  alamat:
    "Jl. Pandawa, Pucangan, Kartasura, Sukoharjo, Jawa Tengah, Indonesia.",
  telp: "+62271 7815 16",
  email: "humas@uinsaid.ac.id",
  website: "www.uinsaid.ac.id",
};

export default function HalamanTentang() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1A237E" barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo/hero */}
        <View style={styles.heroSection}>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>{infoKampus.singkatan}</Text>
          </View>
          <Text style={styles.namaKampus}>{infoKampus.nama}</Text>
          <Text style={styles.subInfo}>
            Berdiri {infoKampus.berdiri} • Akreditasi {infoKampus.akreditasi}
          </Text>
        </View>

        {/* Pimpinan */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pimpinan</Text>
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.rowIcon}>👨‍💼</Text>
              <View>
                <Text style={styles.rowLabel}>Rektor</Text>
                <Text style={styles.rowValue}>{infoKampus.rektor}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Visi */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Visi</Text>
          <View style={[styles.card, styles.visiCard]}>
            <Text style={styles.visiText}>"{infoKampus.visi}"</Text>
          </View>
        </View>

        {/* Misi */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Misi</Text>
          <View style={styles.card}>
            {infoKampus.misi.map((m, idx) => (
              <View key={idx} style={styles.misiItem}>
                <View style={styles.misiNomor}>
                  <Text style={styles.misiNomorText}>{idx + 1}</Text>
                </View>
                <Text style={styles.misiText}>{m}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Fakultas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fakultas & Program Studi</Text>
          <View style={styles.card}>
            {infoKampus.fakultas.map((f, idx) => (
              <View
                key={idx}
                style={[
                  styles.row,
                  idx < infoKampus.fakultas.length - 1 && styles.rowDivider,
                ]}
              >
                <Text style={styles.rowIcon}>🏛️</Text>
                <View style={{ flex: 1 }}>
                  <Text style={styles.rowValue}>{f.nama}</Text>
                  <Text style={styles.rowLabel}>{f.prodi} Program Studi</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Kontak */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kontak & Lokasi</Text>
          <View style={styles.card}>
            {[
              ["📍", infoKampus.alamat],
              ["📞", infoKampus.telp],
              ["📧", infoKampus.email],
              ["🌐", infoKampus.website],
            ].map(([icon, val], idx) => (
              <View
                key={idx}
                style={[styles.row, idx < 3 && styles.rowDivider]}
              >
                <Text style={styles.rowIcon}>{icon}</Text>
                <Text style={styles.rowValue}>{val}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          © 2025 {infoKampus.singkatan} — E-Kampus Mini App
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F8" },
  scroll: { paddingBottom: 30 },
  heroSection: {
    backgroundColor: "#1A237E",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  logoBox: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#FFD54F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
    elevation: 4,
  },
  logoText: { fontSize: 28, fontWeight: "bold", color: "#1A237E" },
  namaKampus: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 8,
    lineHeight: 26,
  },
  subInfo: { color: "#90CAF9", fontSize: 13 },
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
    padding: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  visiCard: { padding: 16 },
  visiText: {
    fontSize: 14,
    color: "#37474F",
    lineHeight: 22,
    fontStyle: "italic",
  },
  row: { flexDirection: "row", alignItems: "flex-start", padding: 14 },
  rowDivider: { borderBottomWidth: 1, borderBottomColor: "#F0F0F0" },
  rowIcon: { fontSize: 20, marginRight: 12 },
  rowLabel: { fontSize: 12, color: "#9E9E9E", marginBottom: 2 },
  rowValue: { fontSize: 14, color: "#212121", fontWeight: "500", flex: 1 },
  misiItem: { flexDirection: "row", alignItems: "flex-start", padding: 12 },
  misiNomor: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#1A237E",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginTop: 1,
    flexShrink: 0,
  },
  misiNomorText: { color: "#FFFFFF", fontSize: 12, fontWeight: "bold" },
  misiText: { fontSize: 13, color: "#444", lineHeight: 20, flex: 1 },
  footer: {
    textAlign: "center",
    color: "#BDBDBD",
    fontSize: 12,
    marginTop: 24,
    marginBottom: 10,
  },
});
