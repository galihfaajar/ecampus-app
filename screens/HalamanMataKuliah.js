// screens/HalamanMataKuliah.js
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const dataMK = [
  {
    id: "1",
    kode: "IF301",
    nama: "Pemrograman Mobile",
    sks: 3,
    dosen: "Pak Wildan GTG",
    jadwal: "Selasa, 08:00 – 10:30",
    ruang: "Lab Komputer A",
    semester: 4,
    deskripsi:
      "Mata kuliah ini mempelajari pengembangan aplikasi mobile dengan fokus pada desain antarmuka, logika program, dan implementasi pada perangkat seluler.",
  },
  {
    id: "2",
    kode: "IF302",
    nama: "Analisis Data Kategorikal",
    sks: 3,
    dosen: "Rizky Kusumawardani, M.Si",
    jadwal: "Selasa, 10:00 – 12:30",
    ruang: "Ruang 204",
    semester: 4,
    deskripsi:
      "Mata kuliah ini membahas metode analisis data yang berbentuk kategori untuk menemukan pola, hubungan, dan pengambilan keputusan berbasis data",
  },
  {
    id: "3",
    kode: "IF303",
    nama: "Analisis Multivariat",
    sks: 3,
    dosen: "Zulfanita M.Stat",
    jadwal: "Rabu, 13:00 – 15:30",
    ruang: "Ruang 301",
    semester: 4,
    deskripsi:
      "Mata kuliah ini mempelajari teknik analisis statistik yang digunakan untuk mengolah dan menginterpretasikan data dengan banyak variabel secara simultan.",
  },
  {
    id: "4",
    kode: "IF304",
    nama: "Phyton untuk Sains Data",
    sks: 3,
    dosen: "Isnan Nabawi, M.Kom",
    jadwal: "Kamis, 08:00 – 10:30",
    ruang: "Ruang 202",
    semester: 4,
    deskripsi:
      "Mata kuliah ini mempelajari penggunaan bahasa pemrograman Python untuk pengolahan, analisis, visualisasi, dan pemodelan data.",
  },
  {
    id: "5",
    kode: "IF305",
    nama: "Media Komunikasi Sains Data",
    sks: 2,
    dosen: "Febrianta Nugraha, M.Kom",
    jadwal: "Jum'at, 10:00 – 11:40",
    ruang: "Lab Jaringan",
    semester: 4,
    deskripsi:
      "Mata kuliah ini mempelajari cara menyampaikan hasil analisis data secara efektif melalui media visual, digital, dan presentasi yang komunikatif.",
  },
  {
    id: "6",
    kode: "IF306",
    nama: "Kewirausahaan Digital",
    sks: 2,
    dosen: "Febrianta Nugraha, M.Kom",
    jadwal: "Senin, 13:00 – 14:40",
    ruang: "Ruang 105",
    semester: 4,
    deskripsi:
      "Mata kuliah ini membahas konsep, strategi, dan inovasi dalam membangun serta mengembangkan bisnis berbasis teknologi digital.",
  },
  {
    id: "7",
    kode: "IF307",
    nama: "Data Mining",
    sks: 2,
    dosen: "Drs. Imam Wahyudi, M.Hum",
    jadwal: "Rabu, 08:00 – 09:40",
    ruang: "Ruang 101",
    semester: 4,
    deskripsi:
      "Mata kuliah ini mempelajari teknik menggali pola, pengetahuan, dan informasi tersembunyi dari kumpulan data besar untuk mendukung pengambilan keputusan.",
  },
  {
    id: "8",
    kode: "IF308",
    nama: "Bahasa Inggris",
    sks: 2,
    dosen: "Ernadewi Kartikasari, M.Pd",
    jadwal: "Rabu, 10:00 – 11:40",
    ruang: "Ruang 101",
    semester: 4,
    deskripsi:
      "Mata kuliah ini bertujuan meningkatkan kemampuan berbahasa Inggris secara lisan dan tulisan untuk kebutuhan akademik dan profesional.",
  },
];

const WARNA_SKS = { 2: "#43A047", 3: "#1E88E5", 4: "#E53935" };

export default function HalamanMataKuliah() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.kartu}
      onPress={() => navigation.navigate("DetailMK", { mk: item })}
      activeOpacity={0.75}
    >
      <View style={styles.kartuHeader}>
        <View style={styles.kodeBadge}>
          <Text style={styles.kodeText}>{item.kode}</Text>
        </View>
        <View
          style={[
            styles.sksBadge,
            { backgroundColor: WARNA_SKS[item.sks] || "#757575" },
          ]}
        >
          <Text style={styles.sksText}>{item.sks} SKS</Text>
        </View>
      </View>
      <Text style={styles.namaMK}>{item.nama}</Text>
      <Text style={styles.dosenText}>👨‍🏫 {item.dosen}</Text>
      <Text style={styles.jadwalText}>🕐 {item.jadwal}</Text>
    </TouchableOpacity>
  );

  const totalSKS = dataMK.reduce((sum, mk) => sum + mk.sks, 0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1A237E" barStyle="light-content" />

      {/* Header info ringkasan */}
      <View style={styles.infoBar}>
        <Text style={styles.infoText}>
          Semester 4 • {dataMK.length} Mata Kuliah • {totalSKS} SKS
        </Text>
      </View>

      <FlatList
        data={dataMK}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F8" },
  infoBar: {
    backgroundColor: "#1A237E",
    paddingHorizontal: 16,
    paddingTop: 4,
    paddingBottom: 12,
  },
  infoText: { color: "#90CAF9", fontSize: 13, textAlign: "center" },
  list: { padding: 14, paddingBottom: 20 },
  kartu: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#1A237E",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
  },
  kartuHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  kodeBadge: {
    backgroundColor: "#E8EAF6",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  kodeText: { color: "#1A237E", fontWeight: "bold", fontSize: 13 },
  sksBadge: {
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  sksText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 12 },
  namaMK: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#212121",
    marginBottom: 6,
  },
  dosenText: { fontSize: 13, color: "#555", marginBottom: 3 },
  jadwalText: { fontSize: 13, color: "#777" },
});
