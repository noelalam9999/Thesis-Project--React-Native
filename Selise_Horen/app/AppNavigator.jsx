import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import AppNavigator from "./screen/AuthUser/SideBarNavigation";
import LoginSignUpNav from "./screen/LoginSignUpNav";

const App = () => {
  // try {
  //   const ii = await AsyncStorage.setItem('hello', 'world');
  //   console.log(ii);

  // } catch (error) {
  //   console.log(error);
  // }

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) setLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    };
    checkLoggedIn();
  }, []);

  return (
    // <>
    //   {!loggedIn ? (
    //     <LoginSignUpNav></LoginSignUpNav>
    //   ) : (
    <AppNavigator></AppNavigator>
    //    )}
    // </>
  );
};

export default App;
