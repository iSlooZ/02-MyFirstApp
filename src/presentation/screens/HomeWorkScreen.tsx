import { View, StyleSheet } from 'react-native';
import { Text } from "react-native-paper"


export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]}></View>
      <View style={[styles.box, styles.orangeBox]}></View>
      <View style={[styles.box, styles.blueBox]}></View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#28425B',
    position:'relative',
    alignItems:'center',
    justifyContent:'center'
    //todo: Tarea
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white'
  },
  purpleBox: {
    backgroundColor:'#5856D6',


    
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    top:50

  },
  blueBox: {
    backgroundColor: '#28C4D9',

  },
})