// screens/HalamanPengumuman.js
import {
  View, Text, StyleSheet, FlatList,
  SafeAreaView, StatusBar, TouchableOpacity,
} from 'react-native';
import { useState } from 'react';

const dataPengumuman = [
  {
    id: '1', tipe: 'Penting', judul: 'Pendaftaran KRS Semester 6',
    tanggal: '05 Apr 2025', isi: 'Pendaftaran Kartu Rencana Studi (KRS) Semester 6 dibuka mulai 10 April 2025. Mahasiswa diwajibkan berkonsultasi dengan dosen pembimbing akademik terlebih dahulu sebelum melakukan pengisian KRS di portal akademik.',
    dibaca: false,
  },
  {
    id: '2', tipe: 'Akademik', judul: 'Jadwal UTS Semester 5',
    tanggal: '02 Apr 2025', isi: 'Ujian Tengah Semester (UTS) akan dilaksanakan pada tanggal 21–28 April 2025. Mahasiswa wajib membawa kartu peserta ujian yang dapat diunduh melalui portal akademik mulai 15 April 2025.',
    dibaca: false,
  },
  {
    id: '3', tipe: 'Kegiatan', judul: 'Seminar Nasional Teknologi 2025',
    tanggal: '28 Mar 2025', isi: 'Fakultas Ilmu Komputer menyelenggarakan Seminar Nasional Teknologi 2025 pada 18 April 2025 di Gedung Auditorium. Tema: "AI dan Masa Depan Teknologi Indonesia". Pendaftaran gratis melalui link bit.ly/semnas-ti-2025.',
    dibaca: true,
  },
  {
    id: '4', tipe: 'Beasiswa', judul: 'Pembukaan Beasiswa Prestasi 2025',
    tanggal: '20 Mar 2025', isi: 'Pendaftaran Beasiswa Prestasi Akademik dibuka untuk mahasiswa aktif semester 4–7 dengan IPK minimal 3.50. Berkas dikirim ke Bagian Kemahasiswaan paling lambat 30 April 2025. Periode beasiswa: 1 semester.',
    dibaca: true,
  },
  {
    id: '5', tipe: 'Akademik', judul: 'Batas Pengumpulan Tugas Praktikum P3',
    tanggal: '10 Apr 2025', isi: 'Pengumpulan laporan dan kode praktikum Pertemuan 3 (Navigasi) melalui portal e-learning paling lambat Minggu, 13 April 2025 pukul 23:59 WIB. Keterlambatan akan dikenakan pengurangan nilai.',
    dibaca: false,
  },
];

const TIPE_WARNA = {
  'Penting': '#C62828', 'Akademik': '#1565C0',
  'Kegiatan': '#2E7D32', 'Beasiswa': '#E65100',
};

export default function HalamanPengumuman() {
  const [pengumuman, setPengumuman] = useState(dataPengumuman);
  const [expanded, setExpanded] = useState(null);

  const belumDibaca = pengumuman.filter(p => !p.dibaca).length;

  const toggleBaca = (id) => {
    setPengumuman(prev => prev.map(p => p.id === id ? { ...p, dibaca: true } : p));
    setExpanded(prev => prev === id ? null : id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.kartu, item.dibaca && styles.kartuDibaca]}
      onPress={() => toggleBaca(item.id)}
      activeOpacity={0.8}
    >
      <View style={styles.kartuHeader}>
        <View style={[styles.tipePill, { backgroundColor: TIPE_WARNA[item.tipe] || '#757575' }]}>
          <Text style={styles.tipeText}>{item.tipe}</Text>
        </View>
        <Text style={styles.tanggal}>{item.tanggal}</Text>
        {!item.dibaca && <View style={styles.unreadDot} />}
      </View>
      <Text style={[styles.judul, item.dibaca && styles.judulDibaca]}>{item.judul}</Text>
      {expanded === item.id && (
        <Text style={styles.isi}>{item.isi}</Text>
      )}
      <Text style={styles.expandHint}>
        {expanded === item.id ? '▲ Tutup' : '▼ Baca selengkapnya'}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1A237E" barStyle="light-content" />

      {/* Badge belum dibaca */}
      <View style={styles.headerInfo}>
        <Text style={styles.headerInfoText}>
          {belumDibaca > 0 ? `📬 ${belumDibaca} pengumuman belum dibaca` : '✅ Semua pengumuman sudah dibaca'}
        </Text>
      </View>

      <FlatList
        data={pengumuman}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F8' },
  headerInfo: {
    backgroundColor: '#1A237E', padding: 12, alignItems: 'center', paddingBottom: 16,
  },
  headerInfoText: { color: '#90CAF9', fontSize: 13 },
  list: { padding: 14, paddingBottom: 30 },
  kartu: {
    backgroundColor: '#FFFFFF', borderRadius: 14,
    padding: 16, marginBottom: 12,
    elevation: 3, shadowColor: '#1A237E',
    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 6,
    borderLeftWidth: 3, borderLeftColor: '#1A237E',
  },
  kartuDibaca: {
    borderLeftColor: '#BDBDBD', opacity: 0.85,
  },
  kartuHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  tipePill: {
    borderRadius: 6, paddingHorizontal: 8, paddingVertical: 3, marginRight: 8,
  },
  tipeText: { color: '#FFFFFF', fontSize: 11, fontWeight: 'bold' },
  tanggal: { fontSize: 12, color: '#9E9E9E', flex: 1 },
  unreadDot: {
    width: 8, height: 8, borderRadius: 4, backgroundColor: '#F44336',
  },
  judul: { fontSize: 15, fontWeight: 'bold', color: '#212121', marginBottom: 6 },
  judulDibaca: { color: '#757575' },
  isi: { fontSize: 13, color: '#555', lineHeight: 20, marginBottom: 8 },
  expandHint: { fontSize: 12, color: '#1565C0', fontWeight: '500' },
});
