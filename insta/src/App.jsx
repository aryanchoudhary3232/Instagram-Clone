import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Homepage from "./Homepage";
import Signup from "./authenticate/Signup";
import Authenticate from "./authenticate/Authenticate";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setLoading } from "./store/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not loggeg in");
      }
    });
  }, []);

  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.user.isLoading);

  return (
    <div className="app">
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : user ? (
        <Homepage />
      ) : (
        <Authenticate />
      )}
    </div>
  );
}

export default App;
