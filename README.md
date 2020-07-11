# Hackhathon
## Semana 15

### ¿Cuáles son las responsabilidades de un manejador de rutas?
Tal como indica su nombre, la responsabilidad de un manejador de rutas es enlazar nuestros componentes a las rutas correspondientes para que la instancia principal sepa la vista a ser renderizada correctamente de acuerdo a la dirección específica.

Vue Router de Vue.js tiene las siguientes responsabilidades:

* Manejar el enrutamiento anidado
* Gestionar los parametros de nuestras rutas (Ejemplo: https://ejemplo.com/params?foo=bar; donde foo es un parametro)
* Modo histoty con HTML5

### ¿Para qué sirve un manejador de rutas?
Un manejador de rutas nos permite ahorrarnos código a la hora de elaborar nuestros SPA (Single Page Applications). Los SPA son web apps basadas en JavaScript que modifican data de la pagina web actual dinamicamente en vez de realizar un pedido al servidor web para cargar una pagina entera. Esto es con el objetivo de mejorar la experiencia de usuario ya que el sitio web se siente más como un app nativa debido a la rapidez que se puede alcanzar.

Un enrutador nos ayuda al desarrollo de SPA al enlazar nuestras vistas hacia una ruta en específico. En el caso de Vue.js, una vista no es nada más que un componente Vue de nuestra app que va a ser renderizado y presentado al usuario final. Usar rutas distintas para nuestra app nos permite separar distintas areas de esta, restringir o proteger ciertas partes basandose en reglas y conservar un estado de nuestra app.

### Describir el proceso que se realiza en el ambito de front para logearse en un sistema.
En el ambito de frontend, para que un usuario se logee se tiene que crear la pagina de login. Esta se implementa usando HTML, CSS y JavaScript. JavaScript nos permite agregar funcionalidades como consumo de servicios mediante APIs y validaciones a la hora de ingreso para una mejor experiencia a nivel de usuario. 

El usuario a traves de la página de UI envía sus credenciales al servidor. Este realizará todas las validaciones necesarias para asegurarse de que la información ingresada sea la correcta. Este acto de verificar la identidad es parte de otro proceso conocido como autenticación. Cuando la petición ha sido procesada y validada por el Backend, entonces se podrá iniciar la sesión de nuestro usuario.

Sesión es un término que se refiera al momento en el cual un usuario usa la pagina web. Las sesiones se pueden implementar usando cookies, las cuales son data que se guarda en el navegador de forma persistente