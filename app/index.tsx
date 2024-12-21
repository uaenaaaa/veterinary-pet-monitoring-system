import { Button } from "@/components/ui/Button/Button";
import { Text, View } from "react-native";
export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button onPress={() => alert("Clicked")} label="Hello, world!" type="primary" icon="add" />
            <Text>Edit app/index.tsx to edit this screen.</Text>
        </View>
    );
}
