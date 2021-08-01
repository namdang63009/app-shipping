import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";

const ListProduct = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>

                <Text>{props.id}</Text>
                <Text>     </Text>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <Button title="Confirm Checkout" style={styles.confirmButton} />

        </View>



    )
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
    confirmButton: {
        fontSize: 10,
        width: 12,
        height: 12,
    }
});

export default ListProduct