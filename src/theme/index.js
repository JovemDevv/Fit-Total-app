import { createTheme } from "@mui/material/styles";
import palette from './palette'
import typography  from "./typography";

const Theme = createTheme({
  palette: palette,
  typography: typography,
})

export default Theme