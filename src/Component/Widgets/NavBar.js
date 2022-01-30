import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Grid, Box, Paper, TextField, InputAdornment } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Field = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 20,
    paddingLeft: "8px",
  },
  "& .MuiInputBase-input": {
    padding: "6.5px 26px",
    paddingLeft: "0px",
  },
}));
const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        ml: 1,
        mt: 0.5,
        mb: 1,
        alignItems: "center",
      }}
    >
      <Box>
        <FacebookOutlinedIcon sx={{ fontSize: 45, mr: 0.5 }} color="primary" />
      </Box>
      <Box>
        <Field
          size="small"
          variant="outlined"
          placeholder="Search Facebook"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};
export default NavBar;
