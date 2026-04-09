import "@/global.css"
import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
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
        </View>
    );
}