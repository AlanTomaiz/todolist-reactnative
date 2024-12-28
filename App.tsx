import { StatusBar } from 'expo-status-bar';

import Home from './src/sreens/Home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="auto" backgroundColor='transparent' translucent />
    </>
  );
}
