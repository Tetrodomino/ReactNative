import React, { useState } from "react";
import { StyleSheet , View, FlatList, Text, Image, SectionList } from "react-native";

const styles = StyleSheet.create(
    {
        container: {flex:1},
        sectionHeader: {
            paddingTop:2,
            paddingRight:10,
            paddingBottom:2,
            paddingLeft:10,
            fontSize: 16, fontWeight: 'bold'
        },
        item: {padding:10, fontSize:16, height:40}
    }
)

export default function SectionListBasic() {
    return (
        <View style={styles.container}> {/* 위에 설정된 스타일을 불러오기 */}
            <Text style={{fontSize:30, padding:15, fontWeight:'bold'}}>내가 좋아하는 과일</Text>
            <SectionList
                sections={[
                    {title: '토종', data: ['사과', '감', '배']},
                    {title: '수입', data: ['Banana', 'Orange', 'Mango']}
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => `basicListEntry-${item}`}
            />
        </View>
    );
}