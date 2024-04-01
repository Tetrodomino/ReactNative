import React, { useState } from "react";
import { StyleSheet , View, FlatList, Text, Image } from "react-native";

const styles = StyleSheet.create(
    {
        container: {flex:1, paddingTop:20},
        item: {padding:10, fontSize:20, height:40}
    }
)

export default function FlatListBasic() {
    return (
        <View style={styles.container}> {/* 위에 설정된 스타일을 불러오기 */}
            <Text style={{fontSize:30, padding:15, fontWeight:4}}>내가 좋아하는 과일</Text>
            <FlatList
                data={[
                    {key: 'Apple'}, {key:'Banana'}, {key: 'Orange'}, {key: 'Mango'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}