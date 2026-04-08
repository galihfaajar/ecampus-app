// screens/HalamanNilai.js
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

const dataNilai = [
  { kode: "IF301", nama: "Pemrograman Mobile", nilai: 88, grade: "A", sks: 3 },
  {
    kode: "IF302",
    nama: "Analisis Data Kategorikal",
    nilai: 82,
    grade: "A-",
    sks: 3,
  },
  {
    kode: "IF303",
    nama: "Analisis Multivariat",
    nilai: 75,
    grade: "B+",
    sks: 3,
  },
  {
    kode: "IF304",
    nama: "Phyton untuk Sains Data",
    nilai: 90,
    grade: "A",
    sks: 3,
  },
  {
    kode: "IF305",
    nama: "Media Komunikasi Sains Data",
    nilai: 78,
    grade: "B+",
    sks: 2,
  },
  {
    kode: "IF306",
    nama: "Kewirausahaan Digital",
    nilai: 90,
    grade: "A",
    sks: 2,
  },
  { kode: "IF307", nama: "Data Mining", nilai: 85, grade: "A-", sks: 2 },
  { kode: "IF308", nama: "Bahasa Inggris", nilai: 87, grade: "A-", sks: 2 },
];

const GRADE_POINT = {
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
};
const GRADE_COLOR = {
  A: "#2E7D32",
  "A-": "#388E3C",
  "B+": "#1565C0",
  B: "#1976D2",
  "B-": "#F57F17",
  "C+": "#E65100",
  C: "#BF360C",
};

export default function HalamanNilai() {
  // Hitung IPK
  const totalBobot = dataNilai.reduce(
    (sum, n) => sum + (GRADE_POINT[n.grade] || 0) * n.sks,
    0,
  );
  const totalSKS = dataNilai.reduce((sum, n) => sum + n.sks, 0);
  const ipk = (totalBobot / totalSKS).toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1A237E" barStyle="light-content" />

      {/* Header IPK */}
      <View style={styles.headerIPK}>
        <Text style={styles.headerTitle}>Nilai Semester 4</Text>
        <View style={styles.ipkBox}>
          <Text style={styles.ipkLabel}>IPK Sementara</Text>
          <Text style={styles.ipkValue}>{ipk}</Text>
          <Text style={styles.ipkSub}>
            {totalSKS} SKS • {dataNilai.length} Mata Kuliah
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Tabel nilai */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rincian Nilai</Text>

          {/* Header tabel */}
          <View style={styles.tableHeader}>
            <Text style={[styles.thCell, { flex: 3 }]}>Mata Kuliah</Text>
            <Text style={[styles.thCell, { flex: 1, textAlign: "center" }]}>
              Nilai
            </Text>
            <Text style={[styles.thCell, { flex: 1, textAlign: "center" }]}>
              Grade
            </Text>
            <Text style={[styles.thCell, { flex: 1, textAlign: "center" }]}>
              SKS
            </Text>
          </View>

          {dataNilai.map((item, idx) => (
            <View
              key={item.kode}
              style={[styles.tableRow, idx % 2 === 1 && styles.tableRowAlt]}
            >
              <View style={{ flex: 3 }}>
                <Text style={styles.mkNama}>{item.nama}</Text>
                <Text style={styles.mkKode}>{item.kode}</Text>
              </View>
              <Text style={[styles.tdCell, { flex: 1 }]}>{item.nilai}</Text>
              <View style={{ flex: 1, alignItems: "center" }}>
                <View
                  style={[
                    styles.gradePill,
                    { backgroundColor: GRADE_COLOR[item.grade] || "#757575" },
                  ]}
                >
                  <Text style={styles.gradeText}>{item.grade}</Text>
                </View>
              </View>
              <Text style={[styles.tdCell, { flex: 1 }]}>{item.sks}</Text>
            </View>
          ))}
        </View>

        {/* Keterangan grade */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Keterangan Grade</Text>
          <View style={styles.keteranganCard}>
            {[
              ["A", "85–100", "4.00"],
              ["A-", "80–84", "3.70"],
              ["B+", "75–79", "3.30"],
              ["B", "70–74", "3.00"],
              ["B-", "65–69", "2.70"],
              ["C+", "60–64", "2.30"],
            ].map(([grade, rentang, bobot]) => (
              <View key={grade} style={styles.keteranganRow}>
                <View
                  style={[
                    styles.gradePill,
                    {
                      backgroundColor: GRADE_COLOR[grade] || "#757575",
                      width: 40,
                    },
                  ]}
                >
                  <Text style={styles.gradeText}>{grade}</Text>
                </View>
                <Text style={styles.keteranganText}>{rentang}</Text>
                <Text style={styles.keteranganBobot}>Bobot: {bobot}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F8" },
  headerIPK: {
    backgroundColor: "#1A237E",
    padding: 20,
    alignItems: "center",
    paddingBottom: 28,
  },
  headerTitle: { color: "#90CAF9", fontSize: 13, marginBottom: 12 },
  ipkBox: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    width: "80%",
  },
  ipkLabel: { color: "#B3E5FC", fontSize: 13, marginBottom: 4 },
  ipkValue: { color: "#FFD54F", fontSize: 42, fontWeight: "bold" },
  ipkSub: { color: "#90CAF9", fontSize: 12, marginTop: 4 },
  scroll: { padding: 16, paddingBottom: 30 },
  section: { marginBottom: 20 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#1A237E",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#1A237E",
    padding: 10,
    borderRadius: 10,
    marginBottom: 2,
  },
  thCell: { color: "#FFFFFF", fontSize: 12, fontWeight: "bold" },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  tableRowAlt: { backgroundColor: "#F8F9FF" },
  mkNama: { fontSize: 13, fontWeight: "600", color: "#212121" },
  mkKode: { fontSize: 11, color: "#9E9E9E", marginTop: 1 },
  tdCell: {
    fontSize: 14,
    color: "#444",
    textAlign: "center",
    fontWeight: "500",
  },
  gradePill: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignItems: "center",
  },
  gradeText: { color: "#FFFFFF", fontSize: 12, fontWeight: "bold" },
  keteranganCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 12,
    elevation: 2,
  },
  keteranganRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  keteranganText: { flex: 1, fontSize: 13, color: "#555", marginLeft: 10 },
  keteranganBobot: { fontSize: 12, color: "#888" },
});
