import { useState } from "react";
import { API, DataStore } from "aws-amplify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AddColleges } from "../models";
import { useRouter } from "next/router";

const AddCollegesForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter()
  const handleSubmit = async (values, { resetForm }) => {
    console.log(values)
    setSubmitting(true);

    try {
      // Formatear el teléfono y el horario de llamada según las especificaciones
      const formattedPhone = `(${values.phoneExt})-${values.phone}`;
      const formattedSchedule = `${values.startTime}-${values.endTime}`;

      // Crear un nuevo objeto con los datos del formulario
      const newCollege = new AddColleges({
        college: values.name,
        details: {
          name: values.contactName,
          phone: formattedPhone,
          email: values.email,
          schedule_call: formattedSchedule,
          position: values.position,
        },
      });

      // Guardar el nuevo registro en DataStore
      await DataStore.save(newCollege);
      console.log(newCollege)

      // Limpiar el formulario después de enviar los datos
      resetForm();
      setSubmitting(false);

      // Mostrar un mensaje de éxito o redirigir a otra página
      // Por ejemplo:
      alert(
        "¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto."
      );
      router.push("/")
    } catch (error) {
      console.error("Error al guardar el formulario:", error);
      setSubmitting(false);
    }
  };

  // Esquema de validación de Yup para el formulario
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Este campo es obligatorio"),
    contactName: Yup.string().required("Este campo es obligatorio"),
    phone: Yup.string().required("Este campo es obligatorio"),
    phoneExt: Yup.string(),
    email: Yup.string()
      .email("Formato de correo inválido")
      .required("Este campo es obligatorio"),
    startTime: Yup.string().required("Este campo es obligatorio"),
    endTime: Yup.string().required("Este campo es obligatorio"),
    position: Yup.string().required("Este campo es obligatorio"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        contactName: "",
        phone: "",
        phoneExt: "",
        email: "",
        startTime: "",
        endTime: "",
        position: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          Incorpora tu Colegio aquí.
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nombre del Colegio
          </label>
          <Field
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border rounded-lg"
            placeholder="Nombre del Colegio"
          />
          <ErrorMessage name="name" component="p" className="text-red-600" />
        </div>

        <div className="mb-4">
          <label
            htmlFor="contactName"
            className="block text-gray-700 font-bold mb-2"
          >
            Nombre de Contacto
          </label>
          <Field
            type="text"
            id="contactName"
            name="contactName"
            className="w-full p-2 border rounded-lg"
            placeholder="Nombre de Contacto"
          />
          <ErrorMessage
            name="contactName"
            component="p"
            className="text-red-600"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
            Teléfono de Contacto
          </label>
          <div className="flex">
            <Field
              type="text"
              id="phone"
              name="phone"
              className="w-1/2 p-2 border rounded-l-lg"
              placeholder="Teléfono"
            />
            <Field
              type="text"
              id="phoneExt"
              name="phoneExt"
              className="w-1/2 p-2 border rounded-r-lg"
              placeholder="Ext"
            />
          </div>
          <ErrorMessage name="phone" component="p" className="text-red-600" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Correo Electrónico
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border rounded-lg"
            placeholder="Correo Electrónico"
          />
          <ErrorMessage name="email" component="p" className="text-red-600" />
        </div>

        <div className="mb-4">
          <label
            htmlFor="startTime"
            className="block text-gray-700 font-bold mb-2"
          >
            Hora de Inicio de Llamada
          </label>
          <Field
            type="text"
            id="startTime"
            name="startTime"
            className="w-full p-2 border rounded-lg"
            placeholder="Hora de Inicio"
          />
          <ErrorMessage
            name="startTime"
            component="p"
            className="text-red-600"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="endTime"
            className="block text-gray-700 font-bold mb-2"
          >
            Hora de Fin de Llamada
          </label>
          <Field
            type="text"
            id="endTime"
            name="endTime"
            className="w-full p-2 border rounded-lg"
            placeholder="Hora de Fin"
          />
          <ErrorMessage name="endTime" component="p" className="text-red-600" />
        </div>

        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-gray-700 font-bold mb-2"
          >
            Puesto
          </label>
          <Field
            type="text"
            id="position"
            name="position"
            className="w-full p-2 border rounded-lg"
            placeholder="Puesto"
          />
          <ErrorMessage
            name="position"
            component="p"
            className="text-red-600"
          />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={submitting}
            className={`w-full px-4 py-2 text-white font-bold ${
              submitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500  transition hover:scale-110 hover:bg-blue-400"
            } rounded`}
          >
            Enviar
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddCollegesForm;
