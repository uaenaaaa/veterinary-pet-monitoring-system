import { StyleSheet } from "react-native";
import { themes } from "@/components/themes";

export const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.25)",
    },

    primary: {
        backgroundColor: themes.primaryColor.backgroundColor,
    },
    outline: {
        backgroundColor: "#FFF",
    },
    danger: {
        backgroundColor: themes.danger.backgroundColor,
    },
});
