import { Pressable, StyleSheet, Text } from "react-native";
import { themes } from "@/components/themes";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

type ButtonProps = {
    onPress: () => void;
    label: string;
    type: "primary" | "outline" | "danger";
    icon: keyof typeof MaterialIcons.glyphMap;
};

export const Button = ({ onPress, label, type, icon }: ButtonProps) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Pressable
            onPress={onPress}
            onHoverIn={() => setIsHovered(true)}
            style={[
                styles.button,
                type === "primary" && styles.primary,
                type === "outline" && styles.outline,
                type === "danger" && styles.danger,
            ]}
        >
            <MaterialIcons size={24} color="black" name={icon} />
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        alignItems: "center",
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        padding: 16,
        borderWidth: 2,
        borderColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    primary: {
        backgroundColor: themes.primaryColor.backgroundColor,
        borderColor: "#000",
    },
    outline: {
        backgroundColor: "#FFF",
        borderColor: "#000",
    },
    danger: {
        backgroundColor: themes.danger.backgroundColor,
        borderColor: "#000",
    },
    label: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    },
});
