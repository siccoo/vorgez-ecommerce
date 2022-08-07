import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, selectedUser } from "../../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";

const HeaderComponent = () => {

  const { user } = useAppSelector(selectedUser);
  const cart = useAppSelector((state) => state.product);

  const [cartCount, setCartCount] = useState(0);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const totalQty = cart.reduce((acc: any, item: { quantity: any; }) => acc + item.quantity, 0);
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