import React, { useEffect, useState, useRef } from 'react';
import { BASE_URL, API_KEY } from '../../urls/url';

import { GridCalles } from '../Grid';

import { Container, Title, Selector } from './styles';

export const Select = () => {
  const [regiones, setRegiones] = useState([]);
  const [provincias, setProvincias] = useState([]);
  const [ciudades, setCiudades] = useState([]);

  const [regionSelected, setRegionSelected] = useState(null);
  const [provinciaSelected, setProvinciaSelected] = useState(null);
  const [ciudadSelected, setCiudadSelected] = useState(null);

  const provinciasRef = useRef();
  const ciudadesRef = useRef();

  //fetch regiones
  useEffect(() => {
    window.fetch(`${BASE_URL}getRegiones?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((info) => {
        setRegiones(info.response);
      });
  }, []);

  //fetch provincias
  useEffect(() => {
    window.fetch(`${BASE_URL}getProvincias/${regionSelected}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((info) => {
        setProvincias(info.response);
        provinciasRef.current.value = 'Seleccione Provincia';
        ciudadesRef.current.value = 'Seleccione Ciudad';
        setCiudades([]);
        setCiudadSelected(null);
      });
  }, [regionSelected]);

  //fetch ciudades
  useEffect(() => {
    setCiudadSelected(null);
    window.fetch(`${BASE_URL}getCiudades/${provinciaSelected}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((info) => {
        setCiudades(info.response);
        ciudadesRef.current.value = 'Seleccione Ciudad';
      });
  }, [provinciaSelected]);

  return (
    <Container>
      <Title>Región</Title>
      <Selector onChange={(event) => setRegionSelected(event.target.value)}>
        <option defaultValue hidden>Seleccione Región</option>
        {
          regiones.map((region) => <option value={region.id} key={region.id}>{region.name}</option>)
        }
      </Selector>

      <Title>Provincia</Title>
      <Selector onChange={(event) => setProvinciaSelected(event.target.value)} ref={provinciasRef}>
        <option defaultValue hidden>Seleccione Provincia</option>
        {
          provincias.map((provincia) => <option value={provincia.id} key={provincia.id}>{provincia.name}</option>)
        }
      </Selector>

      <Title>Ciudad</Title>
      <Selector onChange={(event) => setCiudadSelected(event.target.value)} ref={ciudadesRef}>
        <option defaultValue hidden>Seleccione Ciudad</option>
        {
          ciudades.map((ciudad) => <option value={ciudad.id} key={ciudad.id}>{ciudad.name}</option>)
        }
      </Selector>

      <Title>Calles</Title>
      <GridCalles ciudad={ciudadSelected} />
    </Container>
  );
};
