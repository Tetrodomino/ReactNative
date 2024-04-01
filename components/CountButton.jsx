import React, { useEffect, useState } from "react";
import { Button , View, StyleSheet, Text, Image, ActivityIndicator } from "react-native";

const styles = StyleSheet.create(
    {
        button: {
            marginRight: 100
        },
        num: {
            fontSize:20,
            fontWeight: 'bold',
        }
    }
)

export default function CountButton() {
    const [number, setNumber] = useState(0);
    const [sum, setsum] = useState(0);
    const [toggle, setToggle] = useState(true);

    return (
        <View style={{flex: 1, padding: 10, maxWidth: 300}}>
            <Text style={styles.num}>{number}</Text>
            <Button
            onPress={() => {
                setNumber(number + 1);
                if (number >= 4)
                {
                    setToggle(false);
                }
            }}
            disabled={!toggle}
            title={toggle ? '카운트 올리기' : '종료'}
            />
        </View>
    );
}