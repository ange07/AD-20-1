const UserController = require("./user-controller");
const User = require("./user");

describe('Pruebas para el UserController', () => {
  let userController;
   beforeEach(() => {
    userController = new UserController();
  });

// Tarea 2

  // 1. Prueba para add
  test('add() debería agregar un nuevo usuario que no está en la lista', () => {    
      const newUser = new User(1, 'Santiago', 'santiago@generation.org');
      userController.add(newUser);
  //   Comprueba si esta el nuevo usuario
      expect(userController.getUsers()).toContain(newUser);
  });

  // 2. Pruebas para remove con usuario existente y no existente
  test('debería eliminar un usuario existente del userController', () => {    
      let user = new User(1234, "Santiago", "santiago@generation.org");
      userController.add(user);
      userController.remove(user); // se elimina usuario existente
      // comprueba que el usuario ya no se encuentra en la lista.
      expect(userController.getUsers()).not.toContain(user);
  });
  test('remove() no debería cambiar la lista si el usuario a eliminar no existe', () => { 
      // Se agrega un ususario para la prueba
      userController.add(new User(1, 'Usuario Existente', 'existe@mail.com'));
      //Usuario que no existe, no se agrega
      const nonExistentUser = new User(99, 'Nonexistent', 'nonexistent@mail.com');
      
      // Intenta eliminar al usuario que no existe.
      userController.remove(nonExistentUser);
      // La prueba verifica que la longitud del array siga siendo 1, lo que significa que no se borró nada.
      expect(userController.getUsers().length).toBe(1);
  });

  // 3. Dos pruebas unitarias para la función findByEmail
  test('findByEmail() debería encontrar y devolver un usuario por su email', () => {
    const userToFind = new User(2, 'Ana', 'ana@correo.com');
    userController.add(userToFind);
    // Busca al usuario y espera que el resultado sea el mismo objeto que se agrego
    expect(userController.findByEmail('ana@correo.com')).toEqual(userToFind);
  });
  
  test('findByEmail() debería devolver undefined si el email no se encuentra', () => {
    // Busca un email que no existe en la lista, resultado es undefined
    expect(userController.findByEmail('noexiste@correo.com')).toBeUndefined();
  });

  // 4. Dos pruebas unitarias para la función findById
  test('findById() debería encontrar y devolver un usuario por su id', () => {
    const userToFind = new User(10, 'Luis', 'luis@correo.com');
    userController.add(userToFind);
    // Busca el ID 10 y espera obtener el objeto de Luis.
    expect(userController.findById(10)).toEqual(userToFind);
  });
  test('findById() debería devolver undefined si el id no se encuentra', () => {
    // Busca un ID que no existe.
    expect(userController.findById(999)).toBeUndefined();
  });
});