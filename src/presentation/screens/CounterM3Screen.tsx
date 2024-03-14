import { useState } from "react"
import { Text, View } from "react-native"
import { globalStyles } from "../theme/global.styles";
import { FAB } from "react-native-paper";


export const CounterM3Screen = () => {

  const{centerContainer, title, fab} = globalStyles

  const [count, setCount] = useState(10);

  return (
    <View style={centerContainer}>
      <Text style={title}>{count}</Text>

      <FAB 
        label="+1"
        style={fab}
        onPress={ () => setCount(count + 1) }
        onLongPress={ () => setCount(0) }
      />
    </View>
  )
}


