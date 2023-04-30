import {Text, View, StyleSheet, FlatList} from 'react-native';                //hook
import restaurants from '../../../assets/data/restaurants.json';
import { AntDesign }  from '@expo/vector-icons';

const restaurant = restaurants[0];

const BasketDishItem = ({basketDish}) =>{
    return(
        <View style={styles.row}>
        <View style={styles.quantityContainer}>
            <Text>1</Text>
        </View>
        <Text style={{fontWeight: 'bold'}}>{basketDish.name}</Text>
        <Text style={{ marginLeft: 'auto'}}>{basketDish.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    

    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20, 
    },

    quantityContainer:{
        backgroundColor: 'lightgray',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },

    
});

export default BasketDishItem;