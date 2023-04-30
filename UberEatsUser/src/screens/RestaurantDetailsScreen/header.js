import {View, Text, Image} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import styles from './styles';



const restaurant = restaurants[0];


const RestaurantHomeHeader = ({restaurant}) => {
    return (
        // Restaurant image
        <View style={styles.page}>
            <Image source={{uri: restaurant.image}} style={styles.image}/>


            {/* Restaurant info */}
            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name }</Text>
                <Text style={styles.subtitle}>
                    ${restaurant.deliveryFee}  &#8226;  {restaurant.minDeliveryTime}-
                    {restaurant.maxDeliveryTime} min
                </Text>
                
                <Text style={styles.menuTitle}>Menu</Text>
            </View>
        </View>
        
    
        );
};


export default RestaurantHomeHeader; 