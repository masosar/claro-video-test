
# Claro Video App Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Como correr la aplicación
En el directorio principal del proyecto simplemente correr:
  ### `npm run start`
---  
## Unit testing
Existe un folder ¨__tests__¨ en el que se colocan las pruebas unitarias.
-  Ejemplo de pruebas unitarias:

```
import { render, screen, cleanup } from  '@testing-library/react';
import  ClaroGrid  from  '../media/ClaroGrid';

afterEach(() => {
	cleanup();
})

test('should render ClaroGrid component', () => {
	render(<ClaroGrid/>);
	const  clarogridElement = 		screen.getByTestId('gridpeliculas');
	expect(clarogridElement).toBeInTheDocument();
})
```
---

## Comentarios
Hola. Muchas gracias por la oportunidad. Cambié la UI un par de veces porque no me agradó la manera en la que se estiraba el grid. Luego me clavé en llamar el api a través de Redux toolkit sin saber que yo solo me arrojaba  la soga al cuello cuando traté de implementar la búsqueda e incluso al ejecutar los tests. :sweat_smile: :sweat_smile: :sweat_smile:

Voy a seguir trabajando en este ejercicio. De cualquier manera gracias. Les envío un saludo.

