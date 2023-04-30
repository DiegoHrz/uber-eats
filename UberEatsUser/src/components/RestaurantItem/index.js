import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


{/*creating the function for the restaurantContainer, always return a JSX component  */}
const RestaurantItem = ({ restaurant }) =>{

  const navigation = useNavigation();

  const onPress= () => {  
      navigation.navigate('Restaurant', { id: restaurant.id });

  };


  return(
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
        <Image
          source={{
            uri: restaurant.image,}}
          style={styles.image}
        />
        
        { /*View is considered as a container un this case a container with rows the first(title+subt) 2nd (ratings) */}
        <View style={styles.row}>   
          <View>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>${restaurant.deliveryFee}  &#8226;  {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} min</Text>
          </View>

          <View style={styles.rating}>
            <Text>{restaurant.rating}</Text>
          </View>

        </View>
      </Pressable> 
  );
}; 

export default RestaurantItem

const styles = StyleSheet.create({  
    restaurantContainer: {
      width: '100%',
      marginVertical: 10,
  
    },
    image: {
      width: '100%',
      aspectRatio: 5 / 3,
      marginBottom: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: 600,
      marginVertical: 5,
  
    },
    subtitle: {
      fontWeight: 500,
      fontSize: 14,
      color: 'grey',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rating: {
      marginLeft: 'auto',
      backgroundColor: 'lightgray',
      borderRadius: 13,
      width: 30,
      height: 25,
      alignItems: 'center',
      justifyContent: 'center'

    },
  });
   