import React from "react";
import Header from "../Components/Header/Header";
import { Box, Typography } from "@mui/material";
import ArrowPng from "../images/arrow.png";

const Assembly = ({ setTheme, theme }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Header setTheme={setTheme} theme={theme}>
        Assembly
      </Header>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "220px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "blue",
              textDecoration: "underLine",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Line
          </Typography>
          <table
            style={{
              border:
                theme.color == "white" ? "1px solid red" : "1px solid red",
              borderCollapse: "collapse",
            }}
          >
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                Trim 1
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Trim 2
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Final 1
              </td>
            </tr>
          </table>
        </Box>
        <img
          src={ArrowPng}
          alt={"arrow image"}
          style={{
            width: "50px",
            height: "20px",
            position: "absolute",
            top: "55px",
            left: "300px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "350px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "blue",
              textDecoration: "underLine",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Team Or Process
          </Typography>
          <table
            style={{ border: "1px solid black", borderCollapse: "collapse" }}
          >
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                Team A
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Team B
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Team C
              </td>
            </tr>
          </table>
        </Box>
        <img
          src={ArrowPng}
          alt={"arrow image"}
          style={{
            width: "50px",
            height: "20px",
            position: "absolute",
            top: "55px",
            left: "470px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "540px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "blue",
              textDecoration: "underLine",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Work Station
          </Typography>
          <table
            style={{ border: "1px solid black", borderCollapse: "collapse" }}
          >
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                Station 10
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Station 20
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Station 30
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Station 40
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Station 50
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Station 60
              </td>
            </tr>
          </table>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "240px",
            left: "680px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "blue",
              textDecoration: "underLine",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Process
          </Typography>
          <table
            style={{ border: "1px solid black", borderCollapse: "collapse" }}
          >
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                Team A
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Team B
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Team C
              </td>
            </tr>
          </table>
        </Box>
        <img
          src={ArrowPng}
          alt={"arrow image"}
          style={{
            width: "50px",
            height: "20px",
            position: "absolute",
            top: "270px",
            left: "770px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "240px",
            left: "840px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "blue",
              textDecoration: "underLine",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Work Station
          </Typography>
          <table
            style={{ border: "1px solid black", borderCollapse: "collapse" }}
          >
            <tr>
              <td
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                Station 10
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Station 20
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Station 30
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Station 40
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Station 50
              </td>
            </tr>
            <tr>
              <td style={{ border: "1px solid black", padding: "10px" }}>
                Station 60
              </td>
            </tr>
          </table>
        </Box>
      </Box>
    </Box>
  );
};

export default Assembly;
