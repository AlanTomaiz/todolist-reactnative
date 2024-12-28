import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#262626',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 8
  },
  check: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    borderRadius: 99999
  },
  description: {
    flex: 1,
    color: '#F2F2F2'
  },
  checked: {
    borderColor: '#5E60CE',
    backgroundColor: '#5E60CE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  descriptionChecked: {
    textDecorationLine: 'line-through'
  }
})
