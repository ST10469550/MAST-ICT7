import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  useColorScheme,
  FlatList,
  Dimensions,
  Switch,
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  Login: undefined;
  Feature: undefined; // Added for optional navigation
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Welcome'>;
  route: RouteProp<RootStackParamList, 'Welcome'>;
};

const { width } = Dimensions.get('window');

const introCards = [
  { key: '1', text: 'Find events near you', image: require('../assets/card-events.png') },
  { key: '2', text: 'Meet people with shared interests', image: require('../assets/card-people.png') },
  { key: '3', text: 'Explore your city like never before', image: require('../assets/card-city.png') },
];

const VeltoWelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
  const [language, setLanguage] = useState('en');

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={[styles.background, isDarkMode && styles.darkBackground]}
      resizeMode="cover"
    >
      <Image source={require('../assets/Velto-logo.png')} style={styles.logo} />

      <Text style={styles.headline}>Discover Your City. Meet Your People.</Text>

      <Text style={styles.subtext}>
        Velto connects you to local events, hidden gems, and the people who make your city unforgettable.
      </Text>

      <FlatList
        data={introCards}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
        style={styles.cardList}
      />

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>

      {/* Continue Without Account */}
      <TouchableOpacity onPress={() => navigation.navigate('Feature')}>
        <Text style={styles.skipText}>Continue without account</Text>
      </TouchableOpacity>

      {/* Language Selector */}
      <View style={styles.selectorRow}>
        <Text style={styles.selectorLabel}>🌐 Language:</Text>
        <Picker
          selectedValue={language}
          style={styles.picker}
          onValueChange={(itemValue) => setLanguage(itemValue)}
        >
          <Picker.Item label="isiZulu" value="zu" />
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Español" value="es" />
          <Picker.Item label="Français" value="fr" />
        </Picker>
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.selectorRow}>
        <Text style={styles.selectorLabel}>🌙 Dark Mode:</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#2D1A47',
  },
  darkBackground: {
    backgroundColor: '#1A1A1A',
  },
  logo: {
    width: 140,
    height: 50,
    marginTop: 60,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  headline: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  subtext: {
    fontSize: 16,
    color: '#CCCCCC',
    textAlign: 'center',
    marginBottom: 30,
  },
  cardList: {
    marginBottom: 30,
  },
  card: {
    width: width * 0.8,
    alignItems: 'center',
    marginHorizontal: width * 0.1,
  },
  cardImage: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
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
  selectorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectorLabel: {
    color: '#FFFFFF',
    marginRight: 10,
  },
  picker: {
    height: 40,
    width: 150,
    color: '#FFFFFF',
  },
});

export default VeltoWelcomeScreen;
