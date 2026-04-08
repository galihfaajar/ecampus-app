// screens/HalamanDetailMK.js
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, SafeAreaView,
} from 'react-native';

export default function HalamanDetailMK({ route, navigation }) {
  const { mk } = route.params;

  const InfoRow = ({ icon, label, value }) => (
    <View style={styles.infoRow}>
      <View style={styles.infoLeft}>
        <Text style={styles.infoIcon}>{icon}</Text>
        <Text style={styles.infoLabel}>{label}</Text>
      </View>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero card */}
        <View style={styles.heroCard}>
          <View style={styles.kodePill}>
            <Text style={styles.kodeText}>{mk.kode}</Text>
          </View>
          <Text style={styles.namaMK}>{mk.nama}</Text>
          <View style={styles.sksPill}>
            <Text style={styles.sksText}>{mk.sks} SKS • Semester {mk.semester}</Text>
          </View>
        </View>

        {/* Detail info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informasi Mata Kuliah</Text>
          <View style={styles.infoCard}>
            <InfoRow icon="👨‍🏫" label="Dosen" value={mk.dosen} />
            <View style={styles.divider} />
            <InfoRow icon="🕐" label="Jadwal" value={mk.jadwal} />
            <View style={styles.divider} />
            <InfoRow icon="📍" label="Ruang" value={mk.ruang} />
            <View style={styles.divider} />
            <InfoRow icon="📚" label="SKS" value={`${mk.sks} SKS`} />
            <View style={styles.divider} />
            <InfoRow icon="🎓" label="Semester" value={`Semester ${mk.semester}`} />
          </View>
        </View>

        {/* Deskripsi */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Deskripsi Mata Kuliah</Text>
          <View style={styles.deskripsiCard}>
            <Text style={styles.deskripsiText}>{mk.deskripsi}</Text>
          </View>
        </View>

        {/* Tombol kembali */}
        <TouchableOpacity
          style={styles.tombolKembali}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.tombolKembaliText}>← Kembali ke Daftar MK</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F8' },
  heroCard: {
    backgroundColor: '#1A237E',
    padding: 24,
    paddingTop: 28,
    paddingBottom: 32,
    alignItems: 'center',
  },
  kodePill: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginBottom: 12,
  },
  kodeText: { color: '#FFD54F', fontWeight: 'bold', fontSize: 14 },
  namaMK: {
    fontSize: 22, fontWeight: 'bold', color: '#FFFFFF',
    textAlign: 'center', marginBottom: 10, lineHeight: 30,
  },
  sksPill: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  sksText: { color: '#B3E5FC', fontSize: 13 },
  section: { paddingHorizontal: 16, marginTop: 20 },
  sectionTitle: {
    fontSize: 14, fontWeight: 'bold', color: '#1A237E',
    textTransform: 'uppercase', letterSpacing: 1, marginBottom: 10,
  },
  infoCard: {
    backgroundColor: '#FFFFFF', borderRadius: 14,
    padding: 4, elevation: 2,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 4,
  },
  infoRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', paddingVertical: 12, paddingHorizontal: 14,
  },
  infoLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  infoIcon: { fontSize: 18, marginRight: 10 },
  infoLabel: { fontSize: 14, color: '#757575', fontWeight: '500' },
  infoValue: { fontSize: 14, color: '#212121', fontWeight: '600', flex: 1, textAlign: 'right' },
  divider: { height: 1, backgroundColor: '#F0F0F0', marginHorizontal: 14 },
  deskripsiCard: {
    backgroundColor: '#FFFFFF', borderRadius: 14, padding: 16,
    elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 4,
  },
  deskripsiText: { fontSize: 14, color: '#444', lineHeight: 22 },
  tombolKembali: {
    margin: 16, marginTop: 10, marginBottom: 30,
    backgroundColor: '#1A237E', borderRadius: 12,
    padding: 15, alignItems: 'center',
  },
  tombolKembaliText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 },
});
