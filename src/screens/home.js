import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={40} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="eye-outline" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Saldo */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo disponível</Text>
        <Text style={styles.balanceValue}>R$ 1.250,89</Text>
      </View>

      {/* Opções */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.optionsScroll}
      >
        <TouchableOpacity style={styles.optionButton}>
          <MaterialCommunityIcons name="cash-plus" size={26} color="#fff" />
          <Text style={styles.optionText}>Depositar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <MaterialCommunityIcons name="arrow-up-bold" size={26} color="#fff" />
          <Text style={styles.optionText}>Transferir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <MaterialCommunityIcons name="arrow-down-bold" size={26} color="#fff" />
          <Text style={styles.optionText}>Receber</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionButton}>
          <MaterialCommunityIcons name="barcode" size={26} color="#fff" />
          <Text style={styles.optionText}>Pagar</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Atividade */}
      <View style={styles.activityContainer}>
        <Text style={styles.activityTitle}>Últimas atividades</Text>
        <View style={styles.activityItem}>
          <Text style={styles.activityText}>Compra no Mercado Livre</Text>
          <Text style={styles.activityValue}>- R$ 89,90</Text>
        </View>
        <View style={styles.activityItem}>
          <Text style={styles.activityText}>Depósito via Pix</Text>
          <Text style={styles.activityValuePositive}>+ R$ 250,00</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#8A05BE', paddingTop: 50 },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center' },
  balanceContainer: { paddingHorizontal: 20, marginTop: 30 },
  balanceLabel: { color: '#fff', fontSize: 16 },
  balanceValue: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginTop: 5 },
  optionsScroll: { marginTop: 30, paddingLeft: 20 },
  optionButton: { width: 90, height: 90, backgroundColor: '#9B30FF', borderRadius: 10, marginRight: 15, justifyContent: 'center', alignItems: 'center' },
  optionText: { color: '#fff', fontSize: 12, marginTop: 5 },
  activityContainer: { flex: 1, backgroundColor: '#fff', marginTop: 30, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 20 },
  activityTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  activityItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  activityText: { fontSize: 16 },
  activityValue: { fontSize: 16, color: 'red' },
  activityValuePositive: { fontSize: 16, color: 'green' },
});
