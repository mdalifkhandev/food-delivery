import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View className="">
      <SafeAreaView>
        <ScrollView>
        <View className="flex-1 justify-between ">
          <Link href='/home'>Carv</Link>
        </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
