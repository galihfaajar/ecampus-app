// navigation/HomeStack.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanMataKuliah from '../screens/HalamanMataKuliah';
import HalamanDetailMK from '../screens/HalamanDetailMK';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#1A237E' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen
        name="MataKuliah"
        component={HalamanMataKuliah}
        options={{ title: 'Mata Kuliah' }}
      />
      <Stack.Screen
        name="DetailMK"
        component={HalamanDetailMK}
        options={({ route }) => ({
          title: route.params?.mk?.kode || 'Detail MK',
        })}
      />
    </Stack.Navigator>
  );
}
