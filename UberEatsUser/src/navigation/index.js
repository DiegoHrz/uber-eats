import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import DishDetailScreen from '../screens/DishDetailsScreen';
import Basket from '../screens/Basket';
import OrderScreen from '../screens/OrderScreen';
import OrderDetails from '../screens/OrderDetails'; 
import { Foundation, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const RootNavigator = () => { 
    return(
    <Stack.Navigator screenOptions={{headerShown: false }}>
        <Stack.Screen name='HomeTabs' component={HomeTabs} />
    </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () =>{
    return(
        <Tab.Navigator barStyle={{ backgroundColor: 'white'}}>
            <Tab.Screen 
                name='Home' 
                component={HomeStackNavigator} 
                options={{ 
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen 
                name='Orders' 
                component={OrderStacKNavigator} 
                options={{ 
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="clipboard-list-outline" size={24} color={color} />
                    ), 
                }}
            />            

            <Tab.Screen 
                name='Profile' 
                component={OrderScreen} 
                options={{ 
                    tabBarIcon: ({color}) => ( 
                        <FontAwesome5 name="user-alt" size={24} color={color} />
                    ), 
                }}
            />            

            </Tab.Navigator>
     ); 
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Restaurants' component={HomeScreen} />
            <HomeStack.Screen name='Restaurant' component={RestaurantDetailsScreen} />
            <HomeStack.Screen name='Dish' component={DishDetailScreen} />
            <HomeStack.Screen name='Basket' component={Basket} />
        </HomeStack.Navigator>
    );
};

const OrderStack = createNativeStackNavigator();

const OrderStacKNavigator = () => {
    return(
        <OrderStack.Navigator>
            <OrderStack.Screen name='Orders' component={OrderScreen} />
            <OrderStack.Screen name='Order' component={OrderDetails} />
        </OrderStack.Navigator>
    );
};

export default RootNavigator; 