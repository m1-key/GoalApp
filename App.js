import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  Modal,
  Text
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [currState, setCurrState] = useState("");
  const [goalList, setGoalList] = useState([]);
  const [visibility, setVisibility] = useState(false);

  const onChangeHandler = currState => {
    setCurrState(currState);
  };

  const addButtonHandler = () => {
    if(currState.length===0)
      return;
    setGoalList(goalList.concat(currState));
    setVisibility(false);
    setCurrState("");
    //console.log(goalList);
  };

  const removeGoal = ind => {
    setGoalList(currentGoals => {
      return currentGoals.filter((goal, index) => ind !== index);
    });
    //console.log(goalList);
  };

  const cancelHandler = () => {
    setVisibility(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setVisibility(true)} />
      <Modal visible={visibility} animationType="slide">
        <View style={styles.inputContainer}>
          <GoalInput currGoal={currState} goalSetter={onChangeHandler} />
          <View style={styles.buttonStyle}>
            <View style={styles.button}>
              <Button title="CANCEL" color="red" onPress={cancelHandler} />
            </View>
            <View style = {styles.button}>
              <Button title="Click" onPress={addButtonHandler} />
            </View>
          </View>
        </View>
      </Modal>
      <View>
        <ScrollView>
          {goalList.map((goal, index) => (
            <GoalItem title={goal} index={index} onDelete={removeGoal} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  button: {
    width: "40%"
  }
});
