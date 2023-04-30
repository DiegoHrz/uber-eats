import { StyleSheet, FlatList, View } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json';


export default function HomeScreen() {
  return (

    //   {/*RESTAURANT ITEM IN A NORMAL REGULAR RENDER WAY*/}

    //   {/*
    //   <RestaurantItem restaurant={restaurants[0]}/>
    //   <RestaurantItem restaurant={restaurants[1]}/>
    //   <RestaurantItem restaurant={restaurants[2]}/>
    //   */}
      
    //   {/*RESTAURANT ITEM RENDERING USING THE LOOP MAP FOR REACT NATIVE CALLED FLATLIST THAT USES 2 PROPERTIES DATA AND RENDERITEM*/}
      <View style={styles.page}>
        <FlatList 
          data={restaurants}  // ARRAY OF RESTAURANTS IN THE DATA
          renderItem={({item})=><RestaurantItem restaurant={item}/>}     //FUNCTION THAT WILL CALL EVERY ITEM INDIVIDUALLY
          showsVerticalScrollIndicator={true}
        />
      </View>

  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
  }
});




{/* props are are a way to send data from the parent component to the child component */}