import {View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DishListItem = ({dish}) => {
    const navigation = useNavigation();
    return(
        <Pressable onPress={() => navigation.navigate('Dish', {id: dish.id})} style={styles.container}>
            <View style={{ flex : 1 }}>
                {/* flex is done to make it displaY:flex y puedas habilitar la opcion de flexdirec: row */}
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description}numberOfLines={2}>{dish.description}</Text>
                <Text style={styles.price}>{dish.price}</Text>
            </View>
            {/* If dish.image is defined go ahead and render the image     */}
            {dish.image && (
            <Image source={{uri: dish.image }} style={styles.image} />)}

        </Pressable>
    ) 
}


const styles = StyleSheet.create({


    container :{
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        flexDirection: 'row',

    },
    name:{
        fontWeight: 600,
        fontSize: 16,
         
    },
    description:{
        color: 'grey',
        marginVertical: 5,

    },
    price:{
        fontSize: 15,
    },

    image:{
        height: 75,
        aspectRatio: 1,
        // to make it a square
    },

})


export default DishListItem;