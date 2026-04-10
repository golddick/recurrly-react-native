import { Text, View } from "react-native";
import React from 'react'
import {styled} from 'nativewind'
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

const Onboarding = () => {
    return (
        <SafeAreaView>
            <Text> Onboarding</Text>
        </SafeAreaView>
    )
}

export  default Onboarding