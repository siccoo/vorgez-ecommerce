import { useEffect } from "react";
import { logout, selectedUser } from "../../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";

const HeaderComponent = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector(selectedUser);

  useEffect(() => {
    console.log(123, user);
    
  }, [user])
  

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

export default HeaderComponent