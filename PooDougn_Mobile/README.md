# PooDougn Mobile - React Native Expo App

A React Native Expo application with Firebase Authentication and Firestore integration.

## Features

- User signup with email and password
- Firebase Authentication integration
- Firestore database for user data storage
- Clean, responsive UI design
- Error handling and validation
- Navigation between screens
- Cross-platform (iOS and Android)

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Firebase project setup

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable "Email/Password" provider
4. Create Firestore Database:
   - Go to Firestore Database
   - Create database in test mode
5. Get your Firebase config:
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Click "Web" icon to create a web app
   - Copy the Firebase configuration object

## Installation

1. Clone this repository
2. Navigate to the project directory:
   ```bash
   cd PooDougn_Mobile
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Configure Firebase:
   - Open `firebaseConfig.js`
   - Replace the placeholder values with your actual Firebase configuration:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-actual-api-key",
     authDomain: "your-project-id.firebaseapp.com",
     projectId: "your-actual-project-id",
     storageBucket: "your-project-id.appspot.com",
     messagingSenderId: "your-actual-sender-id",
     appId: "your-actual-app-id"
   };
   ```

## Running the App

1. Start the Expo development server:
   ```bash
   npm start
   ```
   or
   ```bash
   npx expo start
   ```

2. Use one of the following methods to run the app:
   - **Expo Go App**: Scan the QR code with the Expo Go app on your phone
   - **iOS Simulator**: Press `i` in the terminal (macOS only)
   - **Android Emulator**: Press `a` in the terminal
   - **Web Browser**: Press `w` in the terminal

## Project Structure

```
PooDougn_Mobile/
├── App.js                 # Main app component with navigation
├── SignupScreen.js        # User signup screen
├── WelcomeScreen.js       # Welcome screen after signup
├── firebaseConfig.js      # Firebase configuration
├── package.json           # Dependencies and scripts
└── assets/               # App icons and images
```

## Key Dependencies

- `expo` - Expo SDK
- `react-native` - React Native framework
- `firebase` - Firebase SDK for authentication and Firestore
- `@react-navigation/native` - Navigation library
- `@react-navigation/stack` - Stack navigator
- `react-native-screens` - Native screen components
- `react-native-safe-area-context` - Safe area handling

## Features Overview

### Signup Screen
- Full name, email, and password input fields
- Form validation with error messages
- Firebase Authentication integration
- Automatic user data storage in Firestore
- Loading states and error handling
- Responsive design for all screen sizes

### Welcome Screen
- Personalized welcome message
- Sign out functionality
- Clean, centered layout

## Deployment

This app is ready for deployment and can be:
- Built with Expo Application Services (EAS)
- Deployed to app stores
- Integrated with CI/CD services like Codemagic

## Troubleshooting

1. **Firebase errors**: Make sure your Firebase configuration is correct and all services are enabled
2. **Navigation errors**: Ensure all navigation dependencies are properly installed
3. **Build errors**: Clear cache with `npx expo start --clear`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.