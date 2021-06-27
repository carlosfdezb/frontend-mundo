import React, { useState, useEffect } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import { BASE_URL, API_KEY } from '../../urls/url';

import { Item, Img } from './styles';

export const GridCalles = ({ ciudad }) => {
  const [calles, setCalles] = useState([]);

  //fetch calles
  useEffect(() => {
    setCalles([]);
    window.fetch(`${BASE_URL}getCalles/${ciudad}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((info) => {
        setCalles(info.response);
      });
  }, [ciudad]);

  return (
    <div>
      { ciudad ? (
        <Grid columns={3}>
          {
            calles.map((calle) => (
              <Cell>
                <Item>
                  <p>{calle.name}</p>
                </Item>
              </Cell>
            ))
          }
        </Grid>
      ) : (
        <Grid columns={1}>
          <Cell>
            <Item>
              <Img src='http://lasys.cl/img/loader.gif' />
              <p>Esperando datos</p>
            </Item>
          </Cell>
        </Grid>
      )}
    </div>
  );
};
