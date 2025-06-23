import React from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface BlueButtonInterface extends TouchableOpacityProps {
    text: string;
}

const BlueButton: React.FC<BlueButtonInterface> = ({text, ...rest}) => {
    return (
        <TouchableOpacity {...rest} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default BlueButton;

const styles = StyleSheet.create({
    button: {
        borderRadius: 32,
        height: 56,
        // width: '70%',
        textAlign: 'center',
        backgroundColor: '#3045FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
    }
})