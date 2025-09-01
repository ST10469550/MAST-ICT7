import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Feature: undefined;
  CallToAction: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Feature'>;
  route: RouteProp<RootStackParamList, 'Feature'>;
};

const LoopFeatureScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/card-people.png')} style={styles.image} />
      <Text style={styles.headline}>Find Your People</Text>
      <Text style={styles.subtext}>
        Loop helps you connect with others who share your passions — from hiking to poetry slams.
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={() => navigation.navigate('CallToAction')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('CallToAction')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D1A47',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 220,
    height: 140,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  headline: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtext: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#FF6B6B',
    fontWeight: '600',
  },
  skipText: {
    fontSize: 16,
    color: '#AAAAAA',
    textDecorationLine: 'underline',
  },
});

export default LoopFeatureScreen;
