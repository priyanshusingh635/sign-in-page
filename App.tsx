import * as React from "react";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, SafeAreaView, ActivityIndicator, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get('window');
const scale = Math.min(width, height) / 375;

const normalize = (size: number) => {
  return Math.round(scale * size);
};

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const NGROK_URL = "https://2c43-2402-3a80-4194-bc7c-add2-e5ce-bce4-a3d4.ngrok-free.app/api/v1/users/login";

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Both email and password are required");
      return;
    }

    setLoading(true);
    setStatus("Authenticating...");

    const userData = { email, password };
    try {
      const response = await fetch(NGROK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const responseText = await response.text();
      let responseData;
      try {
        responseData = responseText ? JSON.parse(responseText) : null;
      } catch (e) {
        responseData = { success: false, message: "Invalid server response" };
      }

      if (response.ok) {
        Alert.alert("Success", "Login successful!");
      } else {
        Alert.alert("Login Failed", responseData.message || "Unknown error occurred");
      }
    } catch (error) {
      Alert.alert("Connection Error", "Failed to connect to the server. Please try again.");
    } finally {
      setLoading(false);
      setStatus("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Image 
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <Image 
          source={require('./assets/glow.png')}
          style={styles.glowEffect}
        />
        <Image 
          source={require('./assets/spark.png')}
          style={styles.particlesEffect}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleMain}>ELEVATING</Text>
          <Text style={styles.titleSub}>FITNESS</Text>
        </View>
        <Image 
          source={require('./assets/pokemon.png')}
          style={styles.mascot}
        />
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.loginTitle}>Login</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordContainer}>
            <View style={styles.lockContainer}>
              <Image source={require('./assets/lock.png')} style={styles.lockIcon} />
            </View>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity 
              style={styles.eyeIcon}
              onPress={togglePasswordVisibility}
            >
              <Image 
                source={showPassword ? require('./assets/Eye.png') : require('./assets/EyeClose.png')} 
                style={styles.eye}
              />
            </TouchableOpacity>
          </View>
        </View>

        {status ? <Text style={styles.statusText}>{status}</Text> : null}

       

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleLogin} 
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.notUser}>Not a user? </Text>
          <TouchableOpacity>
            <Text style={styles.signupText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#000000',
  },
  topSection: {
    flex: 1,
    paddingHorizontal: normalize(20),
    paddingTop: Platform.OS === 'ios' ? normalize(40) : normalize(20),
    position: 'relative',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  glowEffect: {
    position: 'absolute',
    top: '20%',
    right: '20%',
    width: 400,
    height: 400,
   
    opacity: 0.6,
    zIndex: 0,
  },
  particlesEffect: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.8,
    zIndex: 2,
  },
  titleContainer: {
    width: '100%',
    marginTop: height * 0.03,
    zIndex: 1,
  },
  titleMain: {
    fontSize: normalize(36),
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 0,
    marginBottom: -5,
    marginLeft: '42%',
    textAlign: 'left',
  },
  titleSub: {
    fontSize: normalize(36),
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.5)',
    letterSpacing: 1,
    marginLeft: '42%',
    textAlign: 'left',
  },
  mascot: {
    marginRight: '45%',
    width: 200,
    height: 200,
    position: 'absolute',
    right: 10,
    bottom: -50,
    
    zIndex: 2,
  },
  bottomSection: {
  
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    paddingTop: 40,
    paddingBottom: 50,
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000000',
    marginLeft: '35%',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFE5D9',
    borderRadius: 25,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  passwordContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lockContainer: {
    position: 'absolute',
    left: 15,
    top: 12,
    zIndex: 1,
  },
  lockIcon: {
    width: 20,
    height: 20,
    tintColor: '#000000',
  },
  passwordInput: {
    flex: 1,
    paddingLeft: 45,
    color: '#000000',
    borderWidth: 1,
    borderColor: '#FFE5D9',
    borderRadius: 25,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    zIndex: 1,
  },
  eye: {
    width: 24,
    height: 24,
  },
  forgotPasswordContainer: {
    marginTop: 5,
    marginBottom: 25,
  },
  forgotPassword: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#FF6B00',
    borderRadius: 25,
    padding: 14,
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notUser: {
    color: '#000000',
    fontSize: 16,
  },
  signupText: {
    color: '#FF6B00',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusText: {
    color: '#000000',
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
