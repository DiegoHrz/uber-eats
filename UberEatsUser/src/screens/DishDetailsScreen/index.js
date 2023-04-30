import {Text, View, StyleSheet, Pressable } from 'react-native';                //hook
import restaurants from '../../../assets/data/restaurants.json';
import { AntDesign }  from '@expo/vector-icons';
import {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const dish = restaurants[0].dishes[0];

const DishDetailScreen = () => {

    //const state = useState(); //the useState give us an array of 2 values

    //const value = state[0];   first item in the array is the value
    // const setter = state[1];  second item is a function that update the value in the state
    //Rule of thumb is that we never update the value directly
    //value= 2, you gotta do it like this => setter(2);

    //Thanks to the feauture Destructuring from es6 we can do this that is the same tht the elements created up here
    //const [value, setter] = useState(); but in this case will do it like this:
    
    const [quantity, setQuantity] = useState(1); //the #1 is the value that we want to initialize the hook
    const navigation = useNavigation();

    const onMinus = () => {
        if (quantity > 1){
        setQuantity(quantity - 1)}
    
    };

    const onPlus = () => {
        setQuantity(quantity + 1)
    };

    const getTotal = () =>{
        return(dish.price * quantity).toFixed(2);
    }


    return(
        <View style={styles.page}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator} />
            <View style={styles.row}>
                <AntDesign name='minuscircleo' size={60} color={'black'} onPress={onMinus}/>
                {/* //the first value of the hook */}
                <Text style={styles.quantity}>{quantity}</Text>             
                
                <AntDesign name='pluscircleo' size={60} color={'black'} onPress={onPlus}/>
            </View>

            <Pressable onPress={() => navigation.navigate('Basket')} style={styles.button}>
                <Text style={styles.buttonText}>Add {quantity} to basket &#8226; ${getTotal()}</Text>
            </Pressable>


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
        fontSize: 30,
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
        justifyContent: 'center',
        marginTop: 10,
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
    
})

export default DishDetailScreen ;