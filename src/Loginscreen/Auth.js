import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../ui/Button';
import Input from './Input';

function AuthForm() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);


  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
    }
  }
    const logUser = async (email, password) => {
        try {
          let response = await auth().createUserWithEmailAndPassword(
            email,
            password
          )
          if (response && response.user) {
            Alert.alert("Success ✅", "Account created successfully")
          }
        } catch (e) {
          console.error(e.message)
        }
      }

  function submitHandler() {
    if (!isLogged) {
        auth()
        .createUserWithEmailAndPassword(enteredEmail, enteredPassword)
        .then(() => {
          console.log('Zarajestrowanmo')
          setIsLogged(true)
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
    } else {
        logUser(enteredEmail, enteredPassword)
    }

  }

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Email"
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
          value={enteredEmail}
          keyboardType="email-address"
        />
        <Input
          label="Hasło"
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
          secure
          value={enteredPassword}
        />
        <View>
          <Button onPress={submitHandler}>
            {isLogin ? 'Zaloguj się' : 'Zarejestruj się'}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;
