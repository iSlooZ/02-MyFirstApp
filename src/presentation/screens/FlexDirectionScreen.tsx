import { StyleSheet, View } from "react-native"


export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}/>
      <View style={[styles.box, styles.box2]}/>
      <View style={[styles.box, styles.box3]}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'


    // backgroundColor: 'gray',
  },
  box: {
    width:100,
    height: 100,

  },
  box1:{
    backgroundColor: '#4c4ab1',
    top:-100,
  },
  box2: {
    backgroundColor: '#403e92',
    
  },
  box3: {
    backgroundColor: '#363575',
    top:100,
  },
})