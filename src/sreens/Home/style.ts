import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
    padding: 72
  },
  body: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#1A1A1A',
    padding: 24
  },
  form: {
    flexDirection: 'row',
    gap: 8,
    marginTop: -48
  },
  input: {
    flex: 1,
    height: 52,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#262626',
    color: '#FEFCFD',
    borderRadius: 6
  },
  button: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#333333'
  }
})
