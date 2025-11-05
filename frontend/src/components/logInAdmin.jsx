import Container from "react-bootstrap/esm/Container";
import {useState} from 'react';

import AdminForm from "./adminForm";

export default function LoginAdmin(){

    const [isLoggedIn, setIsLoggedIn] = useState(false); // Indicator of logged in
    // Hard coding 1 user for now
    const adminAccount = {user:"mbertoni", password:"1234"}


    function handleLogin({user:"", password:""}){
        if(user === adminAccount.user && password === adminAccount.password){
            
        } else {
            alert("You are not logged in");
            
        }

    }



   

}