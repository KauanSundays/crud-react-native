import React, {useState, useEffect} from "react";
import {
    SafeareaView,
    View,
    Text,
    TouchableOpacity, 
    FlatList
} from "react-native"


export default function Task() {
    const [task, setTask] = useState([])

    return (
        <View>
            <Text>
                Page Tasks
            </Text>
        </View>
    )
}