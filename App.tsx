import { SafeAreaView, StyleSheet } from "react-native"
import { CounterScreen } from './src/presentation/screens/CounterScreen';


export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/*<HelloWorldScreen name="Fernanando Herrera"/>*/}
      <CounterScreen />
    </SafeAreaView>
  )
}

