import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, Button } from "react-native";

export default function Cat(props) {
    const [text, setText] = useState('');

    return (
        <View>
           <TextInput style={{height: 40}} placeholder="입력"
           onChangeText={newText => setText(newText)}
           defaultValue={text} />
           <Text style={{padding: 10, fontSize: 40}}>
                {text.split(' ').map(word => word && '🍕').join(' ')};
           </Text>
        </View>
    );
}