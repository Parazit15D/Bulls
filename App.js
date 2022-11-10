import React, { useState } from 'react'
import Stack from './navigate'

export default function App() {
  return (
    <Stack />
  );
}

// import React, { useState } from 'react'
// import Stack from './navigate'
// import * as Font from 'expo-font'
// import AppLoading from 'expo-app-loading'

// const fonts = () => Font.loadAsync({
//   'mt-regular': require('./fonts/Montserrat-Regular.ttf')
// })

// export default function App() {

//   const [font, setFont] = useState(false);
//   if (font) {
//     return (
//       <Stack />
//     );
//   }
//   else {
//     return (
//       <AppLoading
//         startAsync={fonts}
//         onFinish={() => setFont(true)}
//       />
//     );
//   }
// }