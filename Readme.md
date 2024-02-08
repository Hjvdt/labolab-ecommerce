# Labolab-ecommerce app

### Helga Van der Tuin

**Aplicación de compras con capacidad de persistencia de datos y sincronización fuera de línea. Compatible con Android.**

### Sobre el proyecto

- Repositorio de Github: [Labolab-ecommerce](https://github.com/Hjvdt/labolab-ecommerce.git)
- Autor: [Helga Van der Tuin]
- Tipo: Aplicación de Tienda Online - Comercio Electrónico

### Descripción

- **La aplicación tiene las siguientes funciones:**

  - **_Login (Iniciar sesión:)_** para ingresar a la aplicación. Verifique que el correo electrónico exista en la base de datos de Firebase y que la contraseña coincida con ese correo electrónico. Muestre mensajes de error si es necesario.[https://github.com/Hjvdt/labolab-ecommerce/blob/main/assets/Login.png]
  - **_Regístrate:_** para crear una cuenta. Dispone de validaciones como comprobar que el correo electrónico tiene un formato correcto y que la contraseña tiene un mínimo de caracteres. Muestre mensajes de error si es necesario. Guarde la cuenta creada en la base de datos de Firebase.[https://github.com/Hjvdt/labolab-ecommerce/blob/main/assets/Registrarse.png]
  - **_Navegación por Categorías:_** muestra las categorías de productos disponibles.[https://github.com/Hjvdt/labolab-ecommerce/blob/main/assets/Categorias.png]
  - **_Navegación por Lista de Productos:_** muestra los productos disponibles dentro de cada categoría.[https://github.com/Hjvdt/labolab-ecommerce/blob/main/assets/Login.png]
  - **_Ver Productos Detallados:_** muestra los detalles del producto seleccionado.[https://github.com/Hjvdt/labolab-ecommerce/blob/main/assets/Detalle%20y%20Agregar%20al%20carrito.png]
  - **_Agregar Producto al Carrito:_** Agrega el producto seleccionado al carrito.
  - **_Carrito:_** muestra los productos añadidos al carrito, sus precios y el precio total a pagar.[https://github.com/Hjvdt/labolab-ecommerce/blob/main/assets/Carrito.png]
  - **_Icono de Papelera:_** elimina el producto del carrito, y resta su valor del precio total a pagar.
  - **_Ordenes:_** muestra los pedidos guardados en la base de datos de Firebase, vinculados al usuario que inició sesión.[https://github.com/Hjvdt/labolab-ecommerce/blob/main/assets/Ordenes.png]
  - **_Buscar:_** el usuario puede ingresar el nombre de un producto y la aplicación mostrará los resultados, si los hubiera.
  - **_Uso de la ubicación del dispositivo:_** solicita permisos al usuario para habilitar el uso de la ubicación y mostrar la ubicación actual del usuario y la última ubicación guardada en la base de datos de Firebase.
  - **_Uso de la cámara del dispositivo:_** solicita permisos al usuario para habilitar el uso de la cámara. El usuario puede tomar una fotografía y guardarla en el perfil de usuario. La imagen también se guarda en la base de datos de Firebase.

### Requisitos

- [Código de Visual Studio](https://code.visualstudio.com/)
  - _O el IDE que prefieras_
- [Estudio Android](https://developer.android.com/studio?hl=es-419)
  - _También puede utilizar su navegador o la aplicación [Expo Go Phone](https://expo.dev/client)_.

### Tecnologías y herramientas

- [React Native] (https://reactnative.dev/)
- [CLI de la Expo](https://docs.expo.dev/more/expo-cli/)
- [Redux](https://redux.js.org/)
- [Expo](https://docs.expo.dev/)
- [GeoLib](https://www.npmjs.com/package/geolib)
- [Yup](https://www.npmjs.com/package/yup)
- [Fuentes de Google](https://fonts.google.com/)
- [Firebase](https://firebase.google.com/?hl=es)
- [SqlLite](https://www.sqlite.org/index.html)
- [expo-sqlite](https://docs.expo.dev/versions/latest/sdk/sqlite/)

## ¿Qué necesitas para ejecutar esta aplicación?

- Abre tu terminal y ejecuta:
  ```
  git clone https://github.com/Hjvdt/labolab-ecommerce.gite
  ```
- Instalar las dependencias del proyecto ejecutando:
  ```
  npm install
  ```
- Abra el proyecto con [Visual Studio Code](https://code.visualstudio.com/) o su editor favorito:
  ```

  ```
- Para probar el codigo, Ud. puede utilizar [Android Studio](https://developer.android.com/studio?hl=es-419), ábralo, cree un nuevo dispositivo, inicie el dispositivo creado.
  ```

  ```
- Ejecutar el proyecto
  ```
  npx expo start
  ```
- Cuando la aplicación se haya creado correctamente, si desea utilizar [Android Studio](https://developer.android.com/studio?hl=es-419), elija la opción \'a\' en la consola. También puede abrir la aplicación con su teléfono inteligente escaneando el código QR desde la aplicación [Expo Go](https://expo.dev/client).

===============
​
