import React, { useEffect, useState } from 'react';
import F1 from '../images/Icon/f1.jpg';
import F2 from '../images/Icon/f2.jpg';
import F3 from '../images/Icon/f3.jpg';
import F4 from '../images/Icon/f4.jpg';
import F5 from '../images/Icon/f5.jpg';
import F6 from '../images/Icon/f6.jpg';
import F7 from '../images/Icon/f7.jpg';
import M1 from '../images/Icon/m1.jpg';
import M2 from '../images/Icon/m2.jpg';
import M3 from '../images/Icon/m3.jpg';
import M4 from '../images/Icon/m4.jpg';
import M5 from '../images/Icon/m5.jpg';
import Pegion from '../images/Icon/Pegion.png';
import { Box } from '@mui/material';
import Header from '../Components/Header/Header';
import axios from 'axios';
const feMaleImage = [F1, F2, F3, F4, F5, F6, F7];
const maleImage = [M1, M2, M3, M4, M5];

const Data = ({ setTheme, theme }) => {
  const [tableData, setTableData] = useState([]);
  const getData = async () => {
    let options = {
      url: 'https://alchimetis-bt.vercel.app/getData',
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    };
    try {
      let fetchResponse = await axios(options);
      console.log(fetchResponse);
      setTableData(fetchResponse.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
      }}
    >
      <Header setTheme={setTheme} theme={theme}>
        Chart
      </Header>
      {setTableData.length == 0 ? null : (
        <table
          style={{
            width: '100%',
            border:
              theme.color == 'white' ? '1px solid white' : '1px solid black',
            // borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr
              style={{
                border:
                  theme.color == 'white'
                    ? '1px solid white'
                    : '1px solid black',
              }}
            >
              <th
                style={{
                  border:
                    theme.color == 'white'
                      ? '1px solid white'
                      : '1px solid black',
                }}
              >
                Sl No
              </th>
              <th
                style={{
                  border:
                    theme.color == 'white'
                      ? '1px solid white'
                      : '1px solid black',
                }}
              >
                Profile
              </th>
              <th
                style={{
                  border:
                    theme.color == 'white'
                      ? '1px solid white'
                      : '1px solid black',
                }}
              >
                Name
              </th>
              <th
                style={{
                  border:
                    theme.color == 'white'
                      ? '1px solid white'
                      : '1px solid black',
                }}
              >
                Age
              </th>
              <th
                style={{
                  border:
                    theme.color == 'white'
                      ? '1px solid white'
                      : '1px solid black',
                }}
              >
                Gender
              </th>
              <th
                style={{
                  border:
                    theme.color == 'white'
                      ? '1px solid white'
                      : '1px solid black',
                }}
              >
                Blood Group
              </th>
              <th
                style={{
                  border:
                    theme.color == 'white'
                      ? '1px solid white'
                      : '1px solid black',
                }}
              >
                City
              </th>
              <th
                style={{
                  border:
                    theme.color == 'white'
                      ? '1px solid white'
                      : '1px solid black',
                }}
              >
                Country
              </th>
              <th
                style={{
                  border:
                    theme.color == 'white'
                      ? '1px solid white'
                      : '1px solid black',
                }}
              >
                Contact No
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
              return (
                <tr key={index}>
                  <td
                    align="center"
                    style={{
                      border:
                        theme.color == 'white'
                          ? '1px solid white'
                          : '1px solid black',
                    }}
                  >
                    {index + 1}
                  </td>
                  <td
                    align="center"
                    style={{
                      border:
                        theme.color == 'white'
                          ? '1px solid white'
                          : '1px solid black',
                    }}
                  >
                    {item.gender.toLowerCase() == 'male' ? (
                      <img
                        src={
                          maleImage[
                            Math.floor(Math.random() * maleImage.length)
                          ]
                        }
                        alt={'profile image'}
                        style={{
                          minwidth: '30px',
                          maxWidth: '30px',
                        }}
                      />
                    ) : (
                      <img
                        src={
                          feMaleImage[
                            Math.floor(Math.random() * feMaleImage.length)
                          ]
                        }
                        alt={'profile image'}
                        style={{
                          minwidth: '30px',
                          maxWidth: '30px',
                        }}
                      />
                    )}
                  </td>
                  <td
                    align="center"
                    style={{
                      border:
                        theme.color == 'white'
                          ? '1px solid white'
                          : '1px solid black',
                    }}
                  >
                    {item.name}
                  </td>
                  <td
                    align="center"
                    style={{
                      border:
                        theme.color == 'white'
                          ? '1px solid white'
                          : '1px solid black',
                    }}
                  >
                    {item.age}
                  </td>
                  <td
                    align="center"
                    style={{
                      border:
                        theme.color == 'white'
                          ? '1px solid white'
                          : '1px solid black',
                    }}
                  >
                    {item.gender}
                  </td>
                  <td
                    align="center"
                    style={{
                      border:
                        theme.color == 'white'
                          ? '1px solid white'
                          : '1px solid black',
                    }}
                  >
                    {item['Blood Group']}
                  </td>
                  <td
                    align="center"
                    style={{
                      border:
                        theme.color == 'white'
                          ? '1px solid white'
                          : '1px solid black',
                    }}
                  >
                    {item.city}
                  </td>
                  <td
                    align="center"
                    style={{
                      border:
                        theme.color == 'white'
                          ? '1px solid white'
                          : '1px solid black',
                    }}
                  >
                    {item.country}
                  </td>
                  <td
                    align="center"
                    style={{
                      border:
                        theme.color == 'white'
                          ? '1px solid white'
                          : '1px solid black',
                    }}
                  >
                    {item['contact number']}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Box>
  );
};

export default Data;
