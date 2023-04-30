import {Text, View, StyleSheet, FlatList} from 'react-native';                //hook
import restaurants from '../../../assets/data/restaurants.json';
import BasketDishItem from '../../components/BasketDishItem';

const restaurant = restaurants[0];

const Basket = () => {

    

    return(
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>
            
            <Text style={ {fontWeight: 'bold', marginTop: 20, fontSize: 19 }}>Your items</Text>

            <FlatList 
            data={restaurant.dishes}
            renderItem={({ item }) => <BasketDishItem basketDish={item} />} 
            />
 
            <View style={styles.separator} />
 
            <View style={styles.button}>
                <Text style={styles.buttonText}>Create order</Text>
            </View>


        </View>
    );

};




const styles = StyleSheet.create({
    
    page:{
        flex: 1,
        width: '100%',
        paddingVertical: 40, // temporary fix
        padding: 10,
    },
    
    name:{
        fontSize: 24,
        fontWeight: 600,
        marginVertical: 10,
    },

    description:{
        color: 'grey',

    },
    separator:{
        backgroundColor: 'lightgray',
        height:1,
        marginVertical: 10,
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20, 
    },
    quantity:{
    fontSize: 25,
    marginHorizontal: 20, //this is what makes the items separate from each other
    },
    button:{
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',
    },
    buttonText:{
        color:'white',
        fontWeight: 600,
        fontSize: 10,
    },
    quantityContainer:{
        backgroundColor: 'lightgray',
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },

    
})

export default Basket ;