import "@/global.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";
import {styled} from 'nativewind'
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView)

export default function App() {
    return (
        <SafeAreaView className="flex-1 p-5 bg-background">
            <Text className="text-xl font-bold text-success">
                Welcome to Nativewind!
            </Text>
            <Link href={'/(auth)/sign-in'} className={'mt-4 rounded p-5 bg-primary text-white'}>
                go to sign-in
            </Link>
            <Link href={'/(auth)/sign-up'} className={'mt-4 rounded p-5 bg-primary text-white'}>
                go to sign-up
            </Link>
            <Link href={'/onboarding'} className={'mt-4 rounded p-5 bg-primary text-white'}>
                go to onboarding
            </Link>
            <Link href={{
                pathname:'/subscriptions/[id]',
                params: {id: 'claude'},
            }} className={'mt-4 rounded p-5 bg-primary text-white'}>
                sub claude
            </Link>
        </SafeAreaView>
    );
}