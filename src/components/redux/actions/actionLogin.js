import { getAuth, signInWithPopup,signInWithEmailAndPassword } from "firebase/auth";
import { loginTypes } from "../types/loginTypes";
import { facebook, google } from "../../../firebase/firebaseConfig";

export const loginEmailPassword = (email,password) =>{
return (dispatch) =>{
       const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
             dispatch(
                loginSincrono(user.uid,user.displayName)
             ) 
             console.log('Bienvenid@');
       })
       .catch(e =>{
            console.log('El usuario no existe');
       })
    }
}

export const loginGoogle = () => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) => {
            dispatch(loginSincrono(user.uid,user.displayName))
            console.log(`Bienvenid@ ${user.displayName}`);
            alert(`Bienvenid@ ${user.displayName}`)
        })
        .catch(e =>{
            console.log(e);
        })
    }
}
export const loginFacebook = () => {
    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,facebook)
        .then(({user}) => {
            dispatch(loginSincrono(user.uid,user.displayName))
            console.log(`Bienvenid@ ${user.displayName}`);
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

export const loginSincrono = (id, displayname) => {
    return{
       type: loginTypes.login,
       payload: {
           id,
           displayname
       }
    }
}

export const logoutSincrono = () => {
    return{
        type: loginTypes.logout
    }
}

