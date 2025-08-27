import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { TouchableOpacity } from 'react-native';
export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* ... UI content here */}

      
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please log in to your account</Text>

    
      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={styles.input}
      />

      {/* Password Input */}
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
      />

      {/* Forgot Password Link */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign up link */}
      <TouchableOpacity>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.link}>Sign up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 16,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#007BFF',
    fontSize: 13,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupText: {
    color: '#444',
    fontSize: 14,
  },
  link: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
