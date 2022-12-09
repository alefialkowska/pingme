import React from 'react'
import { StyleSheet,View,Text,useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, useTheme } from 'react-native-paper';

const Login = () => {
  const {navigate} = useNavigation();
  const { height, width } = useWindowDimensions();
  const theme = useTheme();

  
  const styles = StyleSheet.create({
    screen: {
      backgroundColor: 'red',
      flex: 1,
      alignItems:'center',
    }
  });

  return (
    <View style={styles.screen}>
      <Text>
        Login
      </Text>
      <Button onPress={()=>{navigate('HomeTab')}}>
        do HomeTab
      </Button>
    </View>
  )
}

export default Login