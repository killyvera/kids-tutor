import { Auth } from 'aws-amplify';

// ...

async function checkUserAuth() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log('El usuario está autenticado:', user);
    // aquí podrías hacer algo con el usuario autenticado, como redirigirlo a una página privada
  } catch (error) {
    console.log('El usuario NO está autenticado:', error);
    // aquí podrías hacer algo con el usuario NO autenticado, como redirigirlo a la página de inicio de sesión
  }
}

// llama a la función para comprobar si el usuario está autenticado
export default checkUserAuth;
