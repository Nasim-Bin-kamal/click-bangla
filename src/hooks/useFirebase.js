import { useEffect, useState } from 'react';
import initializeFirebase from '../firebase/firebase.init';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, createUserWithEmailAndPassword, getIdToken, sendEmailVerification, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    //Register user by email and password

    const registerUser = (email, password, name, location, navigate) => {

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setErrorMsg('');

                //set user name
                const newUser = { email, displayName: name }
                setUser(newUser);

                //save user data
                saveUserData(email, name, 'POST');

                verifyEmail();

                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    //profile updated
                }).catch(error => {
                    setErrorMsg(error.message);
                });

                //for redirect user
                const destination = location?.state?.from || '/';
                navigate(destination);

                setUser(result.user);
            }).catch(error => {
                setErrorMsg(error.message);
                // console.log(error.message);
            }).finally(() => {
                setIsLoading(false);
            });
    }

    //verify user email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                //email verification sent
            });
    }


    //sign in with email and password
    const userSignIn = (email, password, location, navigate) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                //logged in
                setUser(result?.user);
                //redirect user
                const destination = location?.state?.from || '/';
                navigate(destination);

                setErrorMsg('');
            }).catch(error => {
                setErrorMsg(error.message);
            }).finally(() => {
                setIsLoading(false);
            });
    }

    //user sign out

    const userSingOut = (location, navigate) => {
        setIsLoading(true);
        signOut(auth).then(() => {
            //signout successfull
            setErrorMsg('');
            //redirect user
            const destination = location?.state?.from || '/';
            navigate(destination);
        }).catch((error) => {
            setErrorMsg(error.message);
            //error happened
        }).finally(() => {
            setIsLoading(false);
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem('idToken', idToken));
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })

        return () => unsubscribe;
    }, [auth]);


    //sign in with google
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setErrorMsg('');
                const user = result?.user;
                console.log(result);

                //save user date to database
                saveUserData(user?.email, user?.displayName, 'PUT');

                //redirect user
                const destination = location?.state?.from || '/';
                navigate(destination);

            }).catch(error => {
                setErrorMsg(error?.message);
            }).finally(() => {
                setIsLoading(false);
            });
    }

    //sign in with github
    const signInWithGithub = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setErrorMsg('');
                const user = result?.user;
                //save user date to database
                saveUserData(user?.email, user?.displayName, 'PUT');

                //redirect user
                const destination = location?.state?.from || '/';
                navigate(destination);

            }).catch(error => {
                setErrorMsg(error?.message);
            }).finally(() => {
                setIsLoading(false);
            });
    }

    //save user information in database
    const saveUserData = (email, displayName, method) => {
        const user = { email, displayName }; //if property name and value is same ,it can write in this way;
        fetch('https://serene-fjord-11430.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => {

        });

    }

    //check admin info
    useEffect(() => {
        fetch(`https://serene-fjord-11430.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user?.email]);




    return {
        signInWithGithub,
        signInWithGoogle,
        registerUser,
        userSignIn,
        userSingOut,
        user,
        isLoading,
        errorMsg,
        admin
    }
};

export default useFirebase;