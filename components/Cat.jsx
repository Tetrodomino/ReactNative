import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";

export default function Cat(props) {
    return (
        <View>
            <Text>Hello I am {props.name}</Text> {/* 파라메터 받기 */}
            <View>
                <Image
                source={{
                    uri: `https://reactnative.dev/docs/assets/p_cat${props.num}.png`,
                }}
                style={{width: 200, height: 200}}
                />
            </View>
        </View>
    );
}