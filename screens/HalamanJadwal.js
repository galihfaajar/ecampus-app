// screens/HalamanJadwal.js
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

const jadwalMingguan = [
  {
    hari: "Senin",
    emoji: "🌅",
    sesi: [
      {
        jam: "13:00–14:40",
        mk: "Kewirausahaan Digital",
        kode: "IF306",
        ruang: "Lab Komputer A",
        dosen: "Febrianta Nugraha, M.Pd",
      },
    ],
  },
  {
    hari: "Selasa",
    emoji: "📘",
    sesi: [
      {
        jam: "08:00–10:30",
        mk: "Analisis Data Kategorikal",
        kode: "IF302",
        ruang: "Ruang 204",
        dosen: "Rizky Kusumawardani, M.Si",
      },
    ],
  },
  {
    hari: "Rabu",
    emoji: "🔬",
    sesi: [
      {
        jam: "08:00–09:40",
        mk: "Data Mining",
        kode: "IF307",
        ruang: "Ruang 101",
        dosen: "Dr. Aji Joko M.T",
      },
      {
        jam: "10.00–11:40",
        mk: "Bahasa Inggris",
        kode: "IF308",
        ruang: "Ruang 101",
        dosen: "Ernadewi Kartikasari, M.Pd",
      },
      {
        jam: "13:00–15:30",
        mk: "Analisis Multivariat",
        kode: "IF303",
        ruang: "Ruang 301",
        dosen: "Zulfanita M.Stat",
      },
    ],
  },
  {
    hari: "Kamis",
    emoji: "⚙️",
    sesi: [
      {
        jam: "08:00–10:30",
        mk: "Phyton Untuk Sains Data",
        kode: "IF304",
        ruang: "Ruang 202",
        dosen: "Isnan Nabawi, M.Kom",
      },
    ],
  },
  {
    hari: "Jum'at",
    emoji: "🌐",
    sesi: [
      {
        jam: "10:00–11:40",
        mk: "Media Komunikasi Sains Data",
        kode: "IF305",
        ruang: "Lab Jaringan",
        dosen: "Febrianta Nugraha, M.Kom",
      },
    ],
  },
  {
    hari: "Sabtu",
    emoji: "😴",
    sesi: [],
  },
];

const WARNA_MK = {
  IF301: "#1565C0",
  IF302: "#6A1B9A",
  IF303: "#2E7D32",
  IF304: "#E65100",
  IF305: "#AD1457",
  IF306: "#00838F",
  IF307: "#558B2F",
};

export default function HalamanJadwal() {
  const totalSesi = jadwalMingguan.reduce((sum, h) => sum + h.sesi.length, 0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1A237E" barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Info ringkasan */}
        <View style={styles.infoBar}>
          <View style={styles.infoItem}>
            <Text style={styles.infoValue}>{totalSesi}</Text>
            <Text style={styles.infoLabel}>Total Sesi</Text>
          </View>
          <View style={styles.infoDivider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoValue}>5</Text>
            <Text style={styles.infoLabel}>Hari Kuliah</Text>
          </View>
          <View style={styles.infoDivider} />
          <View style={styles.infoItem}>
            <Text style={styles.infoValue}>18</Text>
            <Text style={styles.infoLabel}>Total SKS</Text>
          </View>
        </View>

        {/* Jadwal per hari */}
        {jadwalMingguan.map((hari) => (
          <View key={hari.hari} style={styles.hariSection}>
            {/* Label hari */}
            <View style={styles.hariHeader}>
              <Text style={styles.hariEmoji}>{hari.emoji}</Text>
              <Text style={styles.hariNama}>{hari.hari}</Text>
              {hari.sesi.length === 0 && (
                <View style={styles.liburPill}>
                  <Text style={styles.liburText}>Libur</Text>
                </View>
              )}
            </View>

            {/* Sesi kuliah */}
            {hari.sesi.length === 0 ? (
              <View style={styles.liburCard}>
                <Text style={styles.liburCardText}>
                  🎉 Tidak ada kuliah hari ini
                </Text>
              </View>
            ) : (
              hari.sesi.map((sesi, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.sesiCard,
                    { borderLeftColor: WARNA_MK[sesi.kode] || "#1A237E" },
                  ]}
                >
                  <View style={styles.sesiJamRow}>
                    <View
                      style={[
                        styles.kodeBadge,
                        { backgroundColor: WARNA_MK[sesi.kode] || "#1A237E" },
                      ]}
                    >
                      <Text style={styles.kodeText}>{sesi.kode}</Text>
                    </View>
                    <Text style={styles.sesiJam}>🕐 {sesi.jam}</Text>
                  </View>
                  <Text style={styles.sesiMK}>{sesi.mk}</Text>
                  <Text style={styles.sesiInfo}>👨‍🏫 {sesi.dosen}</Text>
                  <Text style={styles.sesiInfo}>📍 {sesi.ruang}</Text>
                </View>
              ))
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F8" },
  scroll: { padding: 16, paddingBottom: 30 },
  infoBar: {
    flexDirection: "row",
    backgroundColor: "#1A237E",
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
  },
  infoItem: { flex: 1, alignItems: "center" },
  infoValue: { fontSize: 22, fontWeight: "bold", color: "#FFD54F" },
  infoLabel: { fontSize: 12, color: "#90CAF9", marginTop: 2 },
  infoDivider: { width: 1, backgroundColor: "rgba(255,255,255,0.2)" },
  hariSection: { marginBottom: 16 },
  hariHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  hariEmoji: { fontSize: 20, marginRight: 8 },
  hariNama: { fontSize: 16, fontWeight: "bold", color: "#1A237E", flex: 1 },
  liburPill: {
    backgroundColor: "#E8F5E9",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  liburText: { color: "#2E7D32", fontSize: 12, fontWeight: "600" },
  liburCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 14,
    alignItems: "center",
    opacity: 0.7,
  },
  liburCardText: { color: "#9E9E9E", fontSize: 14 },
  sesiCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  sesiJamRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  kodeBadge: { borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3 },
  kodeText: { color: "#FFFFFF", fontSize: 12, fontWeight: "bold" },
  sesiJam: { fontSize: 13, color: "#555", fontWeight: "500" },
  sesiMK: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 5,
  },
  sesiInfo: { fontSize: 13, color: "#757575", marginBottom: 2 },
});
