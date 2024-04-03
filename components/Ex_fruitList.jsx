import React, { useState } from "react";
import { View, Text, Image, TextInput, Button, FlatList, StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        container: {flex:1, marginLeft:10, paddingTop:20, width:210},
        item: {padding:10, fontSize:20, height:40},
        input: {height: 40, paddingLeft:5, marginTop: 10,  marginBottom: 10, borderWidth: 1}
    }
)

export default function Ex_fruitList() {
    const [text, setText] = useState('');
    const [fdata, setFdata] = useState([
        {key: '사과'}, {key:'복숭아'}, {key: '수박'}
    ])

    const addFruit = (text) => {
        if (text !== null && text !== '')
            setFdata([...fdata, {key: text}]);
    }

    return (
        <View style={styles.container}>
            <View>
                <Image
                source={{
                    uri: `https://picsum.photos/200/200`,
                }}
                style={{width: 200, height: 200, borderRadius: 100}}
                />
            </View>
            <TextInput style={styles.input} placeholder="과일 이름을 입력하세요"
            onChangeText={newText => setText(newText)}
            defaultValue={text} />
            <Button onPress={() => addFruit(text)} title={'추가'}></Button>
            <FlatList
                data={fdata}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}