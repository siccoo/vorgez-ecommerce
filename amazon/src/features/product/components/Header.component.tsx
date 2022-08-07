import { useEffect, useState } from "react";

import { AppBar, Badge, Box, Button, Toolbar } from "@mui/material";
// import { ShoppingBagOutlinedIcon } from "@mui/icons-material/ShoppingBagOutlined";

import { useNavigate } from "react-router-dom";
import { logout, selectedUser } from "../../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";

const HeaderComponent = () => {

  const { user } = useAppSelector(selectedUser);
  const { cart } = useAppSelector((state) => state.product);

  const [cartCount, setCartCount] = useState(0);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(() => totalQty);
  }, [user])


  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        backgroundColor:
          '#131921', color: '#ffffff', padding: '4px'
      }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src="/vorgez-logo.png" alt="vorgez-logo" onClick={() => navigate('/')} style={{ width: '113px', height: '50px', paddingTop: '10px', cursor: 'pointer' }} />
          <div style={{ display: 'flex' }}>
            <div>
              <div>Hello, {user?.name}</div>
              <Button onClick={logoutHandler} sx={{ padding: 0, marginRight: '16px', color: 'inherit' }}>Sign out</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {/* <h1>Home page</h1>
      <a onClick={logoutHandler}
        style={{
          backgroundColor: "yellow",
          cursor: "pointer",
          width: "60px",
          height: "40px",
          padding: "8px",
          // float: "right",
        }}>Logout</a>
      {user?.email} */}
    </Box>
  )
}

export default HeaderComponent