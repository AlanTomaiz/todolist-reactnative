import { Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string
  value: number
  color: string
}

export function Badge({ name, value, color }: Props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, color }}>{name}</Text>
      <View style={styles.bag}>
        <Text style={{ fontWeight: 'bold', color: '#FFF' }}>{value}</Text>
      </View>
    </View>
  )
}
