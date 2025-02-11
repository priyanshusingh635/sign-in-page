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

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    console.log('Sign up pressed');
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

      {/* Main Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          <Text style={styles.titleMain}>ELEVATING{'\n'}</Text>
          <Text style={styles.titleSub}>FITNESS</Text>
        </Text>
      </View>

      {/* Grey Container */}
      <View style={styles.greyContainer}>
        <Text style={styles.signUpHeader}>Sign Up</Text>

        {/* Input Fields */}
        <View style={styles.inputsContainer}>

          {/* Email Field with @ */}
          <View style={styles.inputField}>
            <Text style={styles.atSymbol}>@</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Password Field */}
          <View style={styles.inputField}>
            <Image source={require('./assets/Lock.png')} style={styles.icon} />
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
              <Image
                source={showPassword ? require('./assets/Eye.png') : require('./assets/eyeClosedIcon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password Field */}
          <View style={styles.inputField}>
            <Image source={require('./assets/Lock.png')} style={styles.icon} />
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              placeholderTextColor="#999"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
              <Image
                source={showConfirmPassword ? require('./assets/Eye.png') : require('./assets/eyeClosedIcon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          {/* Sign Up Button */}
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* Login Option */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already a user? </Text>
            <TouchableOpacity onPress={() => console.log('Login pressed')}>
              <Text style={styles.loginLink}>Log in</Text>
            </TouchableOpacity>
          </View>
          
        </View>
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
    top: 40,
    left: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  titleContainer: {
    position: 'absolute',
    top: '20%',
    left: 20,
  },
  titleText: {
    marginBottom: 20,
  },
  titleMain: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textShadowColor: 'rgba(128, 128, 128, 0.9)',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 8,
  },
  titleSub: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    opacity: 0.5,
    textShadowColor: 'rgba(128, 128, 128, 0.9)',
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 8,
  },
  greyContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '55%',
    backgroundColor: '#221E1E',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
    paddingBottom: 30,
  },
  signUpHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputsContainer: {
    gap: 20,
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    paddingHorizontal: 15,
    shadowColor: '#666',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 8,
  },
  atSymbol: {
    fontSize: 18,
    color: '#666',
    fontWeight: 'bold',
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#666',
    marginRight: 10,
  },
  eyeIcon: {
    padding: 15,
  },
  signUpButton: {
    backgroundColor: '#FF6B00',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  loginText: {
    color: '#FFFFFF',
  },
  loginLink: {
    color: '#FF6B00',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
