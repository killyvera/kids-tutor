import Layout from "@/components/Layout";

const TermsAndConditions = () => {
  return (
    <div>
    <div className="bg-gray-100" style={{maxWidth: '80%'}}>
      <div className="mx-auto pt-20">
        <h1 className="text-2xl font-bold mb-4">
          Términos y Condiciones de KidsTutor.co
        </h1>
        <p className="mb-4">Fecha de última actualización: [Fecha]</p>

        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">1. Uso del sitio web</h2>
          <p className="mb-4">
            El contenido de KidsTutor.co se proporciona únicamente con fines
            informativos y educativos. No se garantiza la precisión, integridad
            o actualidad de la información.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">2. Responsabilidad del usuario</h2>
          <p className="mb-4">
            Eres responsable de mantener la confidencialidad de tus credenciales
            de inicio de sesión y de cualquier actividad que ocurra bajo tu
            cuenta. No puedes compartir tu cuenta con terceros ni utilizar
            cuentas de otros usuarios sin autorización.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">3. Propiedad intelectual</h2>
          <p className="mb-4">
            Todos los derechos de propiedad intelectual del contenido y
            materiales en KidsTutor.co son propiedad exclusiva de KidsTutor.co,
            a menos que se indique lo contrario. No puedes utilizar, reproducir,
            modificar, distribuir o transmitir ningún contenido de KidsTutor.co
            sin nuestro consentimiento expreso por escrito.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">
            4. Enlaces a sitios de terceros
          </h2>
          <p className="mb-4">
            KidsTutor.co puede contener enlaces a sitios web de terceros que no
            están bajo nuestro control. No nos responsabilizamos de la
            disponibilidad, contenido, publicidad u otras prácticas de dichos
            sitios. Los enlaces a sitios web de terceros no implican ningún
            respaldo o asociación con KidsTutor.co.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">
            5. Limitación de responsabilidad
          </h2>
          <p className="mb-4">
            KidsTutor.co no se hace responsable de cualquier daño directo,
            indirecto, incidental, especial o consecuente que surja del uso o la
            incapacidad de utilizar nuestros servicios. No ofrecemos garantías
            ni representaciones con respecto a la precisión o disponibilidad del
            sitio web.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">
            6. Modificaciones a los términos y condiciones
          </h2>
          <p className="mb-4">
            KidsTutor.co se reserva el derecho de modificar o actualizar estos
            términos y condiciones en cualquier momento. Se te notificará
            cualquier cambio importante y deberás revisar periódicamente los
            términos y condiciones actualizados.
          </p>
        </div>

        <p className="mt-4 pb-20">
          Si tienes alguna pregunta o inquietud sobre estos términos y
          condiciones, no dudes en contactarnos a través de [dirección de correo
          electrónico o formulario de contacto].
        </p>
      </div>
    </div>
    </div>
  );
};

export default TermsAndConditions;
