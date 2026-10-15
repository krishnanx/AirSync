
import { Ionicons } from '@expo/vector-icons';
import {
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Device = {
  id: string;
  name: string;
  type: 'ac' | 'tv' | 'fan' | 'light';
};

// Temporary sample data.
// Keep empty initially to display the empty state.
const devices: Device[] = [];

const deviceIcons = {
  ac: 'snow-outline',
  tv: 'tv-outline',
  fan: 'sync-outline',
  light: 'bulb-outline',
} as const;

function DeviceCard({ device }: { device: Device }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.deviceCard,
        pressed && styles.cardPressed,
      ]}
      onPress={() => {
        // Device control navigation will be added later.
      }}
    >
      <View style={styles.deviceArtwork}>
        <View style={styles.iconCircle}>
          <Ionicons
            name={deviceIcons[device.type]}
            size={38}
            color="#B7C8FF"
          />
        </View>
        <View style={styles.artworkAccent} />
      </View>

      <Text style={styles.deviceName} numberOfLines={1}>
        {device.name}
      </Text>
      <Text style={styles.deviceType}>
        {device.type === 'ac'
          ? 'Air Conditioner'
          : device.type === 'tv'
            ? 'Television'
            : device.type === 'fan'
              ? 'Fan'
              : 'Light'}
      </Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  const hasDevices = devices.length > 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0B0D12" />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>YOUR SPACE</Text>
            <Text style={styles.headerTitle}>Home</Text>
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Add device"
            style={({ pressed }) => [
              styles.addButton,
              pressed && styles.addButtonPressed,
            ]}
            onPress={() => {
              // Add Device screen will be connected later.
            }}
          >
            <Ionicons name="add" size={28} color="#0B0D12" />
          </Pressable>
        </View>

        {/* Device list or empty state */}
        {hasDevices ? (
          <ScrollView
            contentContainerStyle={styles.deviceGrid}
            showsVerticalScrollIndicator={false}
          >
            {devices.map((device) => (
              <DeviceCard key={device.id} device={device} />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyState}>
            <View style={styles.illustration}>
            <View style={[styles.orbit, styles.orbitOne]} />
            <View style={[styles.orbit, styles.orbitTwo]} />
              <View style={styles.homeIcon}>
                <Ionicons
                  name="home-outline"
                  size={62}
                  color="#C5D0FF"
                />
              </View>

              <View style={[styles.floatingIcon, styles.floatingSnow]}>
                <Ionicons
                  name="snow-outline"
                  size={22}
                  color="#A9BCFF"
                />
              </View>

              <View style={[styles.floatingIcon, styles.floatingBulb]}>
                <Ionicons
                  name="bulb-outline"
                  size={22}
                  color="#F3D59A"
                />
              </View>
            </View>

            <Text style={styles.emptyTitle}>Your home is waiting</Text>

            <Text style={styles.emptyDescription}>
              Bring your devices together in one place.
              {'\n'}Add your first device to get started.
            </Text>

            <Pressable
              style={({ pressed }) => [
                styles.emptyButton,
                pressed && styles.emptyButtonPressed,
              ]}
              onPress={() => {
                // Same Add Device flow as the header button.
              }}
            >
              <Ionicons name="add" size={20} color="#0B0D12" />
              <Text style={styles.emptyButtonText}>Add your first device</Text>
            </Pressable>

            <Text style={styles.footerHint}>
              YOUR DEVICES. YOUR CONTROL.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0B0D12',
  },
  container: {
    flex: 1,
    paddingHorizontal: 22,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 18,
    paddingBottom: 20,
  },
  eyebrow: {
    color: '#858B9A',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2.2,
    marginBottom: 5,
  },
  headerTitle: {
    color: '#F4F5FA',
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: -0.8,
  },
  addButton: {
    width: 48,
    height: 48,
    borderRadius: 17,
    backgroundColor: '#C5D0FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.96 }],
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 45,
  },
  illustration: {
    width: 230,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  orbit: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#252B3A',
    borderRadius: 999,
  },
  orbitOne: {
    width: 190,
    height: 190,
  },
  orbitTwo: {
    width: 145,
    height: 145,
  },
  homeIcon: {
    width: 112,
    height: 112,
    borderRadius: 36,
    backgroundColor: '#191E2B',
    borderWidth: 1,
    borderColor: '#343C53',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingIcon: {
    position: 'absolute',
    width: 46,
    height: 46,
    borderRadius: 16,
    backgroundColor: '#202637',
    borderWidth: 1,
    borderColor: '#343C53',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingSnow: {
    top: 27,
    right: 28,
  },
  floatingBulb: {
    bottom: 24,
    left: 24,
  },
  emptyTitle: {
    color: '#F4F5FA',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.5,
    textAlign: 'center',
    marginBottom: 12,
  },
  emptyDescription: {
    color: '#9299AA',
    fontSize: 14,
    lineHeight: 23,
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  emptyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#C5D0FF',
    paddingHorizontal: 20,
    height: 52,
    borderRadius: 17,
    marginTop: 27,
  },
  emptyButtonPressed: {
    opacity: 0.8,
  },
  emptyButtonText: {
    color: '#0B0D12',
    fontSize: 14,
    fontWeight: '700',
  },
  footerHint: {
    position: 'absolute',
    bottom: 18,
    color: '#555D70',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
  },
  deviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 24,
    gap: 14,
  },
  deviceCard: {
    width: '48%',
    aspectRatio: 0.92,
    backgroundColor: '#171B25',
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#282E3C',
    padding: 15,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  cardPressed: {
    opacity: 0.8,
  },
  deviceArtwork: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 88,
    height: 88,
    borderRadius: 30,
    backgroundColor: '#242C40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  artworkAccent: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#30384C',
  },
  deviceName: {
    color: '#F4F5FA',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  deviceType: {
    color: '#9299AA',
    fontSize: 12,
  },
});
