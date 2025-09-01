import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'CallToAction'>;
  route: RouteProp<RootStackParamList, 'CallToAction'>;
};

const CallToActionScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/card-city.png')} style={styles.image} />
      <Text style={styles.headline}>Ready to Explore?</Text>
      <Text style={styles.subtext}>
        Join Loop and unlock a world of local events, new friends, and unforgettable experiences.
        Or continue without signing up to start discovering.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Feature')}>
        <Text style={styles.skipText}>Explore without signing up</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  loginText: {
    color: '#AAAAAA',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  skipText: {
    color: '#FF6B6B',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginBottom: 30,
  },
});

export default CallToActionScreen;
