import React, { useState, useEffect } from "react";
import { Auth, Storage } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { Users } from "@/models";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [isFieldEdited, setIsFieldEdited] = useState(false);
  const [editableField, setEditableField] = useState(null);

  const loadAvatar = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const { username } = currentUser;
      const avatarURL = await Storage.get(`avatars/${username}`);
      setAvatar(avatarURL);
    } catch (error) {
      console.log("Error al cargar el avatar:", error);
    }
  };

  const saveAvatar = async (file) => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const { username } = currentUser;
      await Storage.put(`avatars/${username}`, file);
      loadAvatar();
    } catch (error) {
      console.log("Error al guardar el avatar:", error);
    }
  };

  const handleFieldClick = (fieldName) => {
    setEditableField(fieldName);
    setIsFieldEdited(true);
  };

  const handleFieldChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleBlur = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const { username } = currentUser;

      // Verificar si ya existe un usuario con el mismo sub_cognito
      const existingUser = await DataStore.query(Users, (u) =>
        u.sub_cognito.eq(username)
      );

      if (existingUser.length > 0) {
        // Actualizar el perfil del usuario en DataStore
        const updatedUser = await DataStore.save(
          Users.copyOf(existingUser[0], (updated) => {
            updated.name = user.name;
            updated.firstname = user.firstname;
            updated.direction = user.direction;
            updated.city = user.city;
            updated.state = user.state;
            updated.country = user.country;
            updated.postal_code = user.postal_code;
            updated.email = user.email;
          })
        );
        console.log("Perfil actualizado con éxito:", updatedUser);
        setIsFieldEdited(false);
        setEditableField(null);
      } else {
        console.log(
          "No se encontró un usuario existente con el mismo sub_cognito"
        );
      }
    } catch (error) {
      console.log("Error al actualizar el perfil:", error);
    }
  };

  const renderProfileField = (fieldName, label) => {
    if (editableField === fieldName) {
      return (
        <div className="mb-4">
          <label
            htmlFor={fieldName}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          <input
            type="text"
            id={fieldName}
            name={fieldName}
            value={user[fieldName]}
            onChange={handleFieldChange}
            onBlur={handleBlur}
            className="mt-1 p-1 border border-gray-300 rounded"
            autoFocus
          />
        </div>
      );
    } else {
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
          <div className="flex items-center">
            <span
              className="text-sm text-gray-700 cursor-pointer"
              onClick={() => handleFieldClick(fieldName)}
            >
              {user[fieldName]}
            </span>{" "}
            <button
              className="ml-2 text-sm text-blue-500 hover:text-blue-700"
              onClick={() => handleFieldClick(fieldName)}
            >
              Editar
            </button>
          </div>
        </div>
      );
    }
  };

  const renderUserProfile = () => {
    return (
      <div className="flex flex-col items-center bg-white mt-[24px] py-14" >
        <h1 className="text-xl font-bold mb-4">Perfil de Usuario</h1>
        {avatar && (
          <img
            src={avatar}
            alt="Avatar"
            className="mb-4 rounded-full w-24 h-24"
          />
        )}
        <input
          type="file"
          onChange={(event) => saveAvatar(event.target.files[0])}
          className="mb-4"
        />
        {renderProfileField("name", "Nombre")}
        {renderProfileField("firstname", "Apellido")}
        {renderProfileField("direction", "Dirección")}
        {renderProfileField("city", "Ciudad")}
        {renderProfileField("state", "Estado")}
        {renderProfileField("country", "País")}
        {renderProfileField("postal_code", "Código Postal")}
        {renderProfileField("email", "Correo Electrónico")}
        {isFieldEdited && (
          <button
            className="px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={handleBlur}
          >
            Guardar
          </button>
        )}
      </div>
    );
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const { username } = currentUser;

        // Verificar si ya existe un usuario con el mismo sub_cognito
        const existingUser = await DataStore.query(Users, (u) =>
          u.sub_cognito.eq(username)
        );

        if (existingUser.length > 0) {
          setUser(existingUser[0]);
        } else {
          // Si no existe un perfil, crear uno nuevo en DataStore
          const newUser = await DataStore.save(
            new Users({
              sub_cognito: username,
              // Asignar valores iniciales para los campos del perfil
              name: "",
              firstname: "",
              direction: "",
              city: "",
              state: "",
              country: "",
              postal_code: "",
              email: "",
            })
          );
          setUser(newUser);
        }
      } catch (error) {
        console.log("Error al obtener el perfil del usuario:", error);
      }
    };

    fetchUserData();
    loadAvatar();
  }, []);

  return (
    <div className="container mx-auto py-8">
      {user ? renderUserProfile() : <p>Cargando perfil del usuario...</p>}
    </div>
  );
};

export default UserProfile;
