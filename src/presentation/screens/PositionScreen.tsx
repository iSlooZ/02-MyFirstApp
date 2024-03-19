import { View, Text, StyleSheet } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox}></View>
      <View style={styles.purpleBox}></View>
      <View style={styles.orangeBox}></View>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    // top: 200
    bottom: 0,
  },
  orangeBox:{
    width:100,
    height:100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right:0
  },
  greenBox:{
    // flex:1,
    // width:100,
    // height:100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // bottom:0,
    // right:0,
    // top:0,
    // left:0,
    ...StyleSheet.absoluteFillObject //Esta linea de código hace lo mismo que lo relacionado con el  absolute
  },
})