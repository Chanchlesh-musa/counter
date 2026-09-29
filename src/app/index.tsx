// import { useState } from "react";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <View style={styles.view}>
//       <Text style={styles.num}>{count}</Text>
//       <Button title="+" onPress={() => setCount((previous) => previous + 1)} />
//       <Button
//         title="-"
//         onPress={() => {
//           if (count > 0) {
//             setCount((previous) => previous - 1);
//           } else {
//             alert("Your are trying to go negative");
//           }
//         }}
//       />
//     </View>
//   );
// }

// // function increase(){
// //   onPress={increase}
// // }

// const styles = StyleSheet.create({
//   view: {
//     marginTop: 200,
//     fontSize: 40,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   num: {},
// });

// ----------------------------------------------------------------------------------------------------

import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count == 0) {
      alert("you are trying to go negative");
    } else {
      setCount(count - 1);
    }
  }
  return (
    <View style={styles.view}>
      {/* <Button title="+" onPress={increment} /> */}
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{count}</Text>

      {/* <Button title="-" onPress={decrement} /> */}
      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    marginTop: 200,
  },
  button: {
    borderRadius: 2,
    backgroundColor: "lightblue",
    alignSelf: "center",
  },
  text: {
    padding: 10,
    alignSelf: "center",
  },
});
