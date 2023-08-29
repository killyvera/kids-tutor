import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DataStore } from "aws-amplify";
import { Contact } from "../models";
import { useRouter } from "next/router";

const MyContact = ({ translation }) => {
  const router = useRouter();
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Crea una nueva instancia de Contact con los datos del formulario
      const newContact = await DataStore.save(
        new Contact({
          name: values.name,
          email: values.email,
          message: values.message,
        })
      );

      console.log("New contact:", newContact);

      // Resetea los campos del formulario
      resetForm();

      // Mostrar un mensaje de éxito o redirigir a otra página
      // Por ejemplo:
      alert(
        "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto."
      );
      router.push("/");
    } catch (error) {
      console.error("Error creating contact:", error);
    }
  };

  // Esquema de validación de Yup para el formulario
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(translation?.formikVerification),
    email: Yup.string()
      .email("Formato de correo inválido")
      .required(translation?.formikVerification),
    message: Yup.string().required(translation?.formikVerification),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="text-gray-900 py-24 pr-0 pl-0 bg-white m-5 rounded">
        <section className="text-gray-800">
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <h2 className="text-3xl font-bold mb-6">{translation?.title}</h2>
              <p className="text-gray-500 mb-6">{translation?.content}</p>
              <p className="text-gray-500 mb-2">
                {translation?.contactDirection}
              </p>
              <p className="text-gray-500 mb-2">{translation?.contactPhone}</p>
              <p className="text-gray-500 mb-2">{translation?.email}</p>
            </div>
            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <Field
                type="text"
                name="name"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Name"
                required
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-600"
              />

              <Field
                type="email"
                name="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email address"
                required
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-600"
              />

              <Field
                as="textarea"
                name="message"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                rows="3"
                placeholder="Message"
                required
              />
              <ErrorMessage
                name="message"
                component="p"
                className="text-red-600"
              />

              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Send
              </button>
            </div>
          </div>
        </section>
      </Form>
    </Formik>
  );
};

export default MyContact;
