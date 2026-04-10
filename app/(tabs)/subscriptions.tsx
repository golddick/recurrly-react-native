import { Text, View } from "react-native";
import React from 'react'
import {styled} from 'nativewind'
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

const Subscription = () => {
    return (
        <SafeAreaView>
            <Text> Subscription</Text>
        </SafeAreaView>
    )
}

export  default Subscription