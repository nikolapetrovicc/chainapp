import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import moment from "moment";

const useStyles = makeStyles({
  tableContainer: {
    backgroundColor: "#181820",
    color: "white",
  },
  red: {
    backgroundColor: "transparent",
  },
  titleButtons: {
    margin: "2rem 0rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {},
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "2rem",
  },
  buttons: {},
  fieldMale: {
    borderRadius: "0.5rem",
    backgroundColor: "#5b2def",
    padding: "0.2rem",
  },
});

const ListOfTokens = () => {
  const [resp, setResp] = useState<any>();
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((resp) => setResp(resp?.data?.results))
      .catch(() => console.log("error"));
  }, []);

  return (
    <Box flex={7}>
      <Container>
        <Header />
        <Box className={classes.titleButtons}>
          <Box className={classes.title}>
            <Typography variant="h5">
              List of upcoming tokensale events
            </Typography>
          </Box>
          <Box className={classes.buttons}>
            <Button>Upcoming</Button>
            <Button
              variant="contained"
              sx={{
                marginLeft: "0.5rem",
              }}
            >
              Past
            </Button>
          </Box>
        </Box>
        <TableContainer className={`${classes.tableContainer} rounded`}>
          <Table
            size="small"
            sx={{
              minWidth: 650,
            }}
            aria-label="simple table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography variant="body1">Name</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">Status</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">Species</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">Created</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">Location</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="body1">Gender</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resp?.map((item: any) => (
                <TableRow
                  key={item?.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <Box className={classes.box}>
                      <Avatar
                        sx={{
                          width: "1.5rem",
                          height: "1.5rem",
                          marginRight: "0.5rem",
                        }}
                        alt={item?.name}
                        src={item?.image}
                      />
                      {item?.name}
                    </Box>
                  </TableCell>
                  <TableCell align="center">{item?.status}</TableCell>
                  <TableCell align="center">{item?.species}</TableCell>
                  <TableCell align="center">
                    {moment(item?.created).format("MMM Do YY")}
                  </TableCell>
                  <TableCell align="center">{item?.location?.name}</TableCell>
                  <TableCell align="center">
                    <Box className={classes.fieldMale}>{item?.gender}</Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default ListOfTokens;
