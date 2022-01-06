/* import "./styles.css"
function SigUp() {
    return (
        <div>
        <h1>andrecito</h1>
        </div>
    )
}
export default SigUp */

// import { useState, useContext } from "react";
import { Link } from "react-router-dom";

// import Button from "../../components/Button/Button";
// import Header from "../../components/Header/Header";
// import AuthContext from "../../context/AuthContext";
// import { useAuth } from "../../context/AuthContext";
// import { actionTypes } from "../../context/AuthContext";

// import {
//   singInWithGoogle,
//   singUpWithEmailAndPassword,
// } from "../../firebase/firebase";

// import { syncUserData } from "../../utils/auth-requests";

function SignUp() {
    //   const [email, setEmail] = useState("");
    //   const [password, setPassword] = useState("");
    //   const [loading, setLoading] = useState(false);
    //   const [signUpError, setSignUpError] = useState(null);

    //   const { state: { currentUser },
    //     dispatch
    //   } = useAuth();

    //   async function handleSingInWithGoogleClick(e) {
    //     e.preventDefault();

    //     // setLoading(true);
    //     dispatch({actionTypes.SING_IN_GOOGLE})

    //     try {
    //       const res=await singInWithGoogle();
    //       await syncUserData();
    //     } catch (error) {
    //       setSignUpError(error.message);
    //     } finally {
    //       setLoading(false);
    //     }
    //   }

    //   async function handleSubmit(e) {
    //     e.preventDefault();

    //     setLoading(true);

    //     try {
    //       await singUpWithEmailAndPassword(email, password);
    //       await syncUserData();
    //     } catch (error) {
    //       setSignUpError(error.message);
    //     } finally {
    //       setLoading(false);
    //     }
    //   }

    return (
        <>
            <main className="container p-4 mt-5">
                <div className="row flex-column align-items-center">
                    <div className="col col-lg-6">
                        <section className="row row-cols-1 mb-5">
                            <div className="col">
                                <h1 className="h2 text-white">Sign Up</h1>
                                <hr />
                            </div>
                            <div className="col">
                                <h2 className="h5 text-white">Sign Up with Google</h2>
                                <hr />
                            </div>
                            <div className="col">
                                <button type="submit" className="btn primary btn-success"
                                    // onClick={handleSingInWithGoogleClick}
                                    text-white>
                                    Sign In With Google
                                </button>
                            </div>
                        </section>

                        <section className="row row-cols-1 mb-3">
                            <div className="col">
                                <h2 className="h5 mb-3 text-white">Sign up with email and password</h2>
                            </div>
                            <div className="col">
                                <form action="#"
                                // onSubmit={handleSubmit}
                                >
                                    <div className="mb-3">
                                        <label className="form-label text-white" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="form-control"
                                            id="email"
                                            type="email"
                                            // value={email}
                                            // onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-white" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className="form-control"
                                            id="password"
                                            type="password"
                                            // value={password}
                                            // onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <button  className="btn btn-success btn-primary" type="submit"
                                        // disabled={loading}
                                    > Sign Up
                                        {/* {loading ? "Signing up..." : "Sign Up"} */}
                                    </button>
                                </form>
                            </div>
                        </section>
                        {/* {signUpError && (
                            <section className="row row-cols-1 mb-3 border py-3 bg-light">
                                <div className="col">
                                    <h2 className="h5">Something went wrong</h2>
                                    <hr />
                                    <p className="mt-3">{signUpError}</p>
                                </div>
                            </section>
                        )} */}
                        <section className="row row-cols-1 mb-5">
                            <div className="col">
                                <hr />
                            </div>
                            <div className="col">
                                <Link to="/reset-password">Forgot your password?</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}

export default SignUp;