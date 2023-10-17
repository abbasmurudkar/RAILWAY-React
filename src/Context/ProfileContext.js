import React,{ createContext, useContext, useEffect, useState } from "react";
import { auth, database } from "../misc/Firebase";

const ProfileContexts = createContext();

export const ProfileProvider  = ({children}) =>{
const [profile,setProfile] = useState(null);
const [isLoading, setisLoading] = useState(true)
useEffect(()=>{
    let useRef;
   const authUnsub =  auth.onAuthStateChanged(authObj=>{
        // console.log(authObj)
        if(authObj)
        {
           useRef = database.ref(`/profiles/${authObj.uid}`);
            useRef.on("value",(snap)=>{
                const result = snap.val();
                if(result){
                    const {Name , CreatedAt,Avatar} = snap.val() //fetching data from database
                    const data = {
                        Avatar,
                        Name ,
                        CreatedAt,
                        uid : authObj.uid,
                        email: authObj.email
                    }
                    setProfile(data)
                    setisLoading(false)
                }
            })
        }
        else
        {
            if(useRef){
                useRef.off()
            }
            setProfile(null)
            setisLoading(false)
        }})
        return ()=>{
            authUnsub()
            if(useRef){
                useRef.off()
            }
        }
},[])

return <ProfileContexts.Provider value={{isLoading,profile}}>
{children}
</ProfileContexts.Provider>

}

export const useProfile =()=> useContext(ProfileContexts)