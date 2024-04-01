import React, { useEffect, useState } from "react";
import { StyleSheet , View, FlatList, Text, Image, ActivityIndicator } from "react-native";

export default function FetchExample() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(true);
    useEffect(() => { // 네트워크 실행 시 실행되는 문구
        fetch('https://reactnative.dev/movies.json')
        .then(res => res.json())
        .then(obj => {
            //console.log(obj); // PostMan으로 확인
            setData(obj.movies);
        })
        .catch(error => {
            console.error(error);
        })
        .finally(setLoading(false)); // 모든 게 다 끝나면 실행되는 곳
    }, [])

    return (
        <View style={{flex: 1, padding: 10}}> {/* flex: 1은 세로 방향으로 정렬을 의미 */}
            {isLoading ? ( /* isLoading 값이 없으면 ActivityIndicator 실행 */
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={({id}) => id}
                    renderItem={({item}) => (
                        <Text>{item.title}, {item.release}</Text>
                    )}
                />
            )}
        </View>
    );
}