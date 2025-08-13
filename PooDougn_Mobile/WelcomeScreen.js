import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

const WelcomeScreen = ({ route, navigation }) => {
  const { fullName } = route.params || {};

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Signup');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.nameText}>{fullName || 'User'}</Text>
        <Text style={styles.messageText}>
          Your account has been created successfully.
        </Text>
        <Text style={styles.subMessageText}>
          You can now start using the app.
        </Text>
        
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  content: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '100%',
    maxWidth: 400,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 16,
    textAlign: 'center',
  },
  nameText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 24,
    textAlign: 'center',
  },
  messageText: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 24,
  },
  subMessageText: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  signOutButton: {
    backgroundColor: '#6c757d',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  signOutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WelcomeScreen;