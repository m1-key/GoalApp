import React from "react";
import { StyleSheet, TextInput, Modal } from "react-native";

const GoalInput = props => {
    return (
        <TextInput
        placeholder="YOUR GOALS"
        style={styles.textContainer}
        onChangeText={props.goalSetter}
        value={props.currGoal}
        />
    );
};

const styles = StyleSheet.create({
    textContainer: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: "80%",
        marginBottom: 10
    }
});
export default GoalInput;
