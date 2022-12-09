import React from 'react'
import { StyleSheet,View,Text,useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const {navigate} = useNavigation();
  const { height, width } = useWindowDimensions();
  const theme = useTheme();

  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems:'center',
    },
    text: {
      color: 'red',
      margin: 'auto',
      fontSize: 19
    }
  });
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.text}>
      Home dmaksmckmaskdmk awk dmkaw
      </Text>
      </SafeAreaView>
  )
}

export default Home