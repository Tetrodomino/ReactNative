import React, { useState } from "react";
import { View, Text, Button, Image } from "react-native";

export default function State(props) {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Image
            source={require('../assets/img/cats.jpg')}
            style={{height: 300, borderRadius: 20, padding: 10}} />
            <Text>
                I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
            </Text>
            <Button
            onPress={() => {
                setIsHungry(false);
            }}
            disabled={!isHungry}
            title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
            />
        </View>
    );
}