import "./App.css";
import ListOfTokens from "./components/ListOfTokens";
// import ThemeProvider from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/theme/index";
import Sidebar from "./components/Sidebar";
import { Stack } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        className="background1"
        direction="row"
        justifyContent="space-between"
      >
        <Sidebar />
        <ListOfTokens />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
