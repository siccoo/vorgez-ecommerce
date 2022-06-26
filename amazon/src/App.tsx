import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "@mui/material";
import { theme } from "./shared/utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
