import React, { useState, useEffect } from "react";
import { Auth, Storage } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { Users } from "@/models";
import LogoutButton from "./LogoutButton";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import Link from "next/link";
const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [isFieldEdited, setIsFieldEdited] = useState(false);
  const [editableField, setEditableField] = useState(null);

  const saveAvatar = async (file) => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const { username } = currentUser;
      const filename = `avatars/${username}`;
      await Storage.put(filename, file);
      const avatarURL = await Storage.get(filename);
      setAvatar(avatarURL);
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
      const { username, attributes } = currentUser;

      // Verificar si ya existe un usuario con el mismo sub_cognito
      const existingUser = await DataStore.query(Users, (u) =>
        u.sub_cognito.eq(username)
      );

      if (existingUser.length > 0) {
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
        // Crear un nuevo usuario en DataStore con los datos obtenidos
        const newUser = await DataStore.save(new Users(user));
        console.log("Usuario creado con éxito:", newUser);
        setIsFieldEdited(false);
        setEditableField(null);
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
          <div className="flex flex-row">
            <span
              className="text-sm text-gray-700 cursor-pointer"
              onClick={() => handleFieldClick(fieldName)}
            >
              {user[fieldName]}
            </span>{" "}
            <button
              className="ml-2 text-sm text-blue-500 hover:text-blue-700 flex flex-row space-x-1 hover:scale-105"
              onClick={() => handleFieldClick(fieldName)}
            >
              <p>Edit</p>
              <img
                src="/pencil.png"
                alt="edit"
                width={"16px"}
                className="opacity-50 hover:opacity-75"
              />
            </button>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    const loadAvatar = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const { username, attributes } = currentUser;
        let avatarURL = attributes.picture;
        console.log(avatarURL);

        // Paso 1: Revisar si hay un avatar en el storage

        const avatarList = await Storage.list(`avatars/${username}`);
        console.log(avatarList);
        if (avatarList.results.length > 0) {
          avatarURL = await Storage.get(`avatars/${username}`);
          setAvatar(avatarURL);
        } else {
          console.log("El usuario no tiene avatar.");
          setAvatar(attributes.picture);
        }
      } catch (error) {
        if (error.code === "NoSuchKey" && error.statusCode === 404) {
          console.log("Error al cargar el avatar: Avatar no encontrado.");
          // Conservar el picture de cognito como avatar
          setAvatar(attributes.picture);
          console.log(avatar);
        } else {
          console.log("Error al cargar el avatar:", error);
        }
      }
    };
    const fetchUserData = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const { username, attributes } = currentUser;
        console.log(currentUser, "---current---user--");

        // Verificar si ya existe un usuario con el mismo sub_cognito
        const existingUser = await DataStore.query(Users, (u) =>
          u.sub_cognito.eq(username)
        );

        if (existingUser.length > 0) {
          setUser(existingUser[0]);
        } else {
          // Obtener datos del usuario del proveedor de autenticación
          let userData = {
            sub_cognito: username,
            name: attributes.name,
            firstname: "",
            direction: "",
            city: "",
            state: "",
            country: "",
            postal_code: "",
            email: attributes.email,
          };

          setUser(userData);
        }
      } catch (error) {
        console.log("Error al obtener el perfil del usuario:", error);
      }
    };

    fetchUserData();
    loadAvatar();
  }, [avatar]);

  const renderUserProfile = () => {
    return (
      <div className="flex flex-col items-center bg-white mt-[24px] py-14">
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
        {renderProfileField("email", "Correo Electrónico")}
        {/* {renderProfileField("firstname", "Apellido")} */}
        {renderProfileField("direction", "Dirección")}
        {renderProfileField("city", "Ciudad")}
        {renderProfileField("state", "Estado")}
        {renderProfileField("country", "País")}
        {renderProfileField("postal_code", "Código Postal")}

        {isFieldEdited && (
          <button
            className="px-8 mb-4 py-2 mt-4 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={handleBlur}
          >
            Guardar
          </button>
        )}
        <Link href={`/download?email=${encodeURIComponent(user.email)}`}>
          <button className={styleButton + " mb-4"}>Mis Compras</button>
        </Link>
        <LogoutButton />
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8">
      {user ? renderUserProfile() : <p>Cargando perfil del usuario...</p>}
    </div>
  );
};

export default UserProfile;

const styleButton =
  "bg-blue-500 block mt-4 lg:inline-block lg:mt-0 text-white transition duration-50 hover:scale-125 mr-4 hover:bg-blue-400 hover:px-2 rounded font-semibold hover:shadow-sm px-2 py-1 text-base";
