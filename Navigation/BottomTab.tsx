import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import HomeStack from "../Stack/HomeStack";
import ProfileStack from "../Stack/ProfileStack";

const Tab = createBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={HomeStack} options={
                {
                    headerShown: false,
                    title: 'Home',
                }
            } />
            <Tab.Screen name="ProfileStack" component={ProfileStack} options={
                {
                    headerShown: false,
                    title: 'Profile',
                }
            } />
        </Tab.Navigator>
    );
}

export default MainTab;