import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          Mi lista de tareas
        </Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Ingresar tarea" style={styles.inputTarea} />
          <Button title="Agregar" color="green"></Button>
        </View>
      </View>

      <View style={styles.taskContainer}>
        <View style={styles.taskCard}>
          <Text style={styles.texto}>Tarea 1</Text>
          <Button title="DEL" />
        </View>

        <View style={styles.taskCard}>
          <Text style={styles.texto}>Tarea 2</Text>
          <Button title="DEL" />
        </View>

        <View style={styles.taskCard}>
          <Text style={styles.texto}>Tarea 3</Text>
          <Button title="DEL" />
        </View>

        <View style={styles.taskCard}>
          <Text style={styles.texto}>Tarea 4</Text>
          <Button title="DEL" />
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.texto}>
            Box 1
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.texto}>
            Box 2
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.texto}>
            Box 3
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.texto}>
            Box 4
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.texto}>
            Box 5
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.texto}>
            Box 6
          </Text>
        </View>

      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
    paddingTop: 20
  },

  inputTarea: {
    borderWidth: 2,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    width: 250
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 2,
    borderColor: "white"
  },

  taskContainer: {
    backgroundColor: "violet",
    alignItems: "center",
    gap: 25,
    paddingVertical: 10,
    paddingHorizontal: 10
  },

  texto: {
    fontSize: 24,
    color: "white",
    width: "70%"
  },

  taskCard: {
    flexDirection: "row",
    backgroundColor: "grey",
    padding: 15,
    alignItems: "center",
    borderRadius: 10, 
  },

  boxContainer: {
    backgroundColor: "orange",
    // Por defecto estan en columna
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap"
  },

  box: {
    backgroundColor: "red",
    width: 90,
    height: 100,
    margin: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },

  box2: {
    backgroundColor: "red",
    width: 90,
    height: 150,
    margin: 10,
    padding: 10,
    alignItems: "center"
  }
})