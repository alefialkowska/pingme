import {
    signInWithEmailAndPassword, createUserWithEmailAndPassword
  } from 'firebase/auth';
  import { auth } from './config';
  export const handleSignUp = (
    email,
    password,
    navigate,
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('Home');
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/user-not-found':
            console.log('Nie ma takiego użytkownika');
            break;
          case 'auth/wrong-password':
            console.log('Błędne hasło');
            break;
          default:
            console.log('Ups... coś poszło nie tak');
        }
      });
  };