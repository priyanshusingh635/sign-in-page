import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleSendOTP = () => {
    console.log('Send OTP pressed');
  };

  return (
    <ImageBackground
      source={require('./assets/signup-background.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>

      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleMain}>ELEVATING</Text>
        <Text style={styles.titleSub}>FITNESS</Text>
      </View>

      {/* Forgot Password Container */}
      <View style={styles.greyContainer}>
        <Text style={styles.headerText}>Forgot Password</Text>

        {/* Input Field with "@" Symbol */}
        <View style={styles.inputContainer}>
          <Text style={styles.atSymbol}>@</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Send OTP Button */}
        <TouchableOpacity style={styles.sendOTPButton} onPress={handleSendOTP}>
          <Text style={styles.sendOTPButtonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  titleContainer: {
    position: 'absolute',
    top: '20%',
    left: 20,
  },
  titleMain: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  titleSub: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    opacity: 0.5,
  },
  greyContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '40%',
    backgroundColor: '#221E1E',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 25,
    paddingHorizontal: 15,
    width: '100%',
    marginBottom: 20,
  },
  atSymbol: {
    fontSize: 22,     // Adjusted size
    color: '#000',    // Color of "@"
    marginRight: 10,  // Spacing between "@" and text input
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 15,
    color: '#000',
  },
  sendOTPButton: {
    backgroundColor: '#FF6B00',
    borderRadius: 25,
    paddingVertical: 15,
    width: '50%',
    alignItems: 'center',
  },
  sendOTPButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
