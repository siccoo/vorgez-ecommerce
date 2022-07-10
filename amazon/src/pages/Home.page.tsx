import { logout } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux/hooks";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div>
      <h1>Home page</h1>
      <a onClick={logoutHandler}
        style={{
          backgroundColor: "yellow",
          cursor: "pointer",
          width: "60px",
          height: "40px",
          padding: "8px",
          // float: "right",
        }}>Logout</a>
      {user?.email}
    </div>
  )
}

export default HomePage