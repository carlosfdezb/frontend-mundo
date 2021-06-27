# Prueba técnica

## Instrucciones de uso
Para ejecutar la aplicación, después de descargarlo o clonarlo, ejecute el siguiente comando dentro del directorio de la aplicación.
```
npm install
```
Y para correr la aplicación, ejecute lo siguiente
```
npm run start
```
Generalmente la aplicación estará disponible en `http://localhost:3000`
de no ser así, en la consola saldrá especificado el puerto.

### Posibles problemas
En caso de que el `backend` esté habilitado en otro puerto, tendrá que modificarlo en el siguiente archivo. 
`DIRECTORIO/src/urls/url.js`
```
//cambiar por la dirección correspondiente
export const BASE_URL = 'http://127.0.0.1:8000/api/';
```

### **Autor**

_*Carlos Fernández*_