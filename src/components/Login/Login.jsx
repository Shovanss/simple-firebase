import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [users,setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const handleClick = () =>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user = result.user;
            console.log(user)
            setUser(user)
        })
        .catch(error=>{
            console.log('error',error.message)
        })
    }
    const handleGitHub = () =>{
        signInWithPopup(auth,gitHubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user)
            setUser(user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleOut = () =>{
        signOut(auth)
        .then(result=>{
            console.log(result)
            setUser(null)
        })
        .catch(error=>{
            console.log(error)
        }       
)
    }

   
    return (
        <div>
            
            {
                users ? <button onClick={handleOut}>Sign Out</button>
                : <>
<button onClick={handleClick}>Google login</button>
<button onClick={handleGitHub}>Github Login</button>
                </> 
            }
          
          {users && <div>
            <h3>User : {users.email}</h3>
            <img src={users.photoURL} alt="" />
          </div>}
        </div>
    );
};

export default Login;