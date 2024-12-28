import { Image, Text, TouchableOpacity, View } from "react-native"

import Check from '../../../assets/check.png'
import Trash from '../../../assets/trash.png'
import { style } from "./style"

type Props = {
  task: string
  completed: boolean
  onDone: () => void
  onRemove: () => void
}

export function Task({ task, completed, onDone, onRemove }: Props) {
  return (
    <View style={style.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={[style.check, completed ? style.checked : {}]}
        onPress={onDone}
        disabled={completed}
      >
        {completed && <Image source={Check} style={{ width: 12 }} />}
      </TouchableOpacity>
      <Text style={[style.description, completed ? style.descriptionChecked : {}]}>
        {task}
      </Text>
      <TouchableOpacity style={{ padding: 10 }} onPress={onRemove}>
        <Image source={Trash} />
      </TouchableOpacity>
    </View>
  )
}
