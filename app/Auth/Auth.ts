import {auth,GoogleProvider,db} from "../libs/firebaseConfig"
import { signInWithPopup,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth'
import { setDoc ,doc,getDoc,getDocs } from 'firebase/firestore'
import {  toast } from 'react-toastify';
import { updateProfile }  from "firebase/auth";
// import {useRouter} from "next/navigation"
// ADDING A USER EMAIL AND USERNAME TO DATABASE
export const addUserTodatabase=async(user:any,username:any)=>{
    const docRef = doc(db,"users",user.email)
    const docSnap= await getDoc(docRef)
    if(docSnap.exists()){
        return

    }
    else{
        await setDoc(doc(db,"users",user.email),{
            email:user.email,
            username:username

        })
    }
}
// Google sign in
export const signInwithGoogle=()=>{
    
    signInWithPopup(auth,GoogleProvider).then((result)=>{
        const user=result.user

    
    // Adding current user to data base
      addUserTodatabase(user,user.displayName)
      toast.success('Sucessfully Signed in!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    //   router.push("/generate") 
    }).catch((error)=>{
        toast.error('Failed', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    })
        
       
}
// Auth sign in with email and passoword
export const signUpwithEmail=(username:string,email:string,password:string)=>{
    // const router=useRouter()
    createUserWithEmailAndPassword(auth, email, password).then((result)=>{
    const user=result.user
    updateProfile(user,{
        displayName:username
    })


    // Adding current user to data base
    addUserTodatabase(user,username)
    toast.success('Sucessfully Signed in!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    
  }).catch((error)=>{
    toast.error('🦄 Failed!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
  })
  
}

export const LoginwithEmail=(email:string,password:string)=>{
    // const router=useRouter()
    signInWithEmailAndPassword(auth, email, password).then((result)=>{
       const user=result.user
       toast.success('Sucessfully Signed in!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    //    router.push("/generate")
   }).catch((error)=>{
       const errorCode = error.code;
       if (errorCode == "auth/user-not-found") {
        toast.error(' user-not-found!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
        

           // setErrormsg("user not found")
           // User does not exist
           // Display a specific error message or perform an action
         } else if (errorCode === "auth/wrong-password") {
            toast.error('Wrong password!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                })
           
           // setErrormsg("incorrect password")
           // Incorrect password
           // Display a specific error message or perform an action
         }
   })
 

}