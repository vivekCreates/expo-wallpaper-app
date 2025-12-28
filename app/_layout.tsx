import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
    return(
    <SafeAreaView>
        <View style={{ width: "100%", height: "97%" }}>
            <Slot />
        </View>
        <View style={{ flexDirection: "row", paddingHorizontal: 10, justifyContent: "space-between", backgroundColor: "blue" }}>

            <Link href={"/"}><Text>For you</Text></Link>
            <Link href={"/explore"}><Text>Explore</Text></Link>
            <Link href={"/account"}><Text>Account</Text></Link>
        </View>
    </SafeAreaView>)
}