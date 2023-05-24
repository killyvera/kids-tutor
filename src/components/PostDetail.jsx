import React from "react";
import MyBadgeList from "./MyBadgeList";
import MyTagList from "./MyTagList";
import RenderHTML from "./RenderHTML";

export default function PostDetail({
  element,
  type,
  categories,
  postCategories,
}) {
  // console.log(element, element.tags, categories, postCategories);
  return (
    // <!-- component -->
    <div className=" bg-slate-50">
      <main className="pt-20 max-w-screen-lg mx-auto">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight pb-9">
              {element?.title}
            </h2>
          </div>

          <img
            src={element?.cover}
            className="w-full object-cover lg:rounded"
            style={{ height: "28em" }}
          />
          <div style={{ textAlignLast: "left" }} className="pt-4">
            <MyBadgeList
              resourceId={element?.id}
              categories={
                postCategories
                  ? getPostCategories(postCategories, categories, element.id)
                  : categories
              }
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <RenderHTML htmlContent={element?.content} />
            <div className="flex justify-between w-full mb-16">
              <p className="text-sm text-gray-500">{element?.author}</p>
              <p className="text-sm text-gray-500">
                {new Date(element?.createdAt).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="flex py-2">
                <img
                  src="/avatar.png"
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    {" "}
                    Bernard Thomas{" "}
                  </p>
                  <p className="font-semibold text-gray-600 text-xs">
                    Creative & Entrepreneur
                  </p>
                </div>
              </div>
              <p className="text-gray-700 py-3">
                Aprender es diversión. Descubre cómo Kids Tutor está cambiando
                la forma en que los niños aprenden hoy.
              </p>
              <button className="px-2 py-1 text-gray-100 bg-blue-500 flex w-full items-center justify-center rounded">
                Mensaje
                <i className="bx bx-user-plus ml-2"></i>
              </button>
            </div>
            <MyTagList tagList={element?.tags} />
          </div>
        </div>
      </main>
    </div>
  );
}

function getPostCategories(postCategories, categories, blogPostId) {
  const categoryIds = postCategories
    .filter((pc) => pc.blogPostId === blogPostId)
    .map((pc) => pc.categoryId);

  const categoriesList = categories.filter((category) =>
    categoryIds.includes(category.id)
  );

  return categoriesList;
}

<>
  <p class="pb-6">
    Las diferencias en los planes de estudio para el primer grado de primaria en
    matemáticas entre México, Estados Unidos, Japón y España pueden variar según
    las políticas educativas de cada país.
  </p>
  <p>
    Los temarios son muy similares unos a otros, la principal diferencia es el
    enfoque que se da al material y la profundidad con la que se ve. A
    continuación, se presentan algunas diferencias generales que se pueden
    observar:
  </p>
  <br />
  <h4 class="semi-bold">México:</h4>
  <br />
  <div class="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
    Se busca que los estudiantes adquieran una comprensión numérica básica , se
    familiaricen con los conceptos de adición y sustracción, y desarrollen
    habilidades de resolución de problemas sencillos
  </div>
  <div class="pb-6 flex flex-col">
    <div class="flex flex-row">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>
      <div>
        En México, el plan de estudios para el primer grado de primaria en
        matemáticas se basa en el Marco Curricular Común, el cual establece los
        con tenidos y competencias a desarrollar.
      </div>
    </div>
    <div class="flex flex-row">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>
      <div>
        Se enfatiza el desarrollo de habilidades matemáticas básicas, como el
        reconocimiento y escritura de números, contar, identificar formas
        geométricas y resolver problemas sencillos.
      </div>
    </div>
  </div>
  <h4 class="semi-bold">Estados Unidos:</h4> <br />
  <div class="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
    Se busca que los estudiantes desarrollen habilidades de razonamiento lógico,
    comunicación matemática y comprensión básica de las operaciones matemáticas.
  </div>
  <div class="pb-6 flex flex-col">
    <div class="flex flex-row">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>
      <div>
        En Estados Unidos, los planes de estudio para el primer grado de
        primaria en matemáticas varían según los estados y los dist ritos
        escolares.
      </div>
    </div>
    <div class="flex flex-row">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>
      <div>
        Los temas cubiertos suelen incluir el reconocimiento y escritura de
        números, contar y agrupar objetos, patrones numéricos y geométricos
        básicos, así como la resolución de problemas simples.
      </div>
    </div>
  </div>
  <h4 class="semi-bold">Japón:</h4> <br />
  <div class="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
    Se busca que los estudiantes adquieran una comprensión profunda de los
    números y desarrollen habilidades de razonamiento matemático mediante
    actividades prácticas y de resolución de problemas.
  </div>
  <div class="pb-6 flex flex-col">
    <div class="flex flex-row">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>
      <div>
        En Japón, el plan de estudios para el primer grado de primaria en
        matemáticas se basa en el Gakushū Shidō Yōryō, que establece los
        objetivos y contenidos a desarrollar.
      </div>
    </div>
    <div class="flex flex-row">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>
      <div>
        Se enfatiza el desarrollo de habilidades de cálculo mental,
        reconocimiento de números, contar, identificar formas geométricas
        simples y resolver problemas básicos.
      </div>
    </div>
  </div>
  <h4 class="semi-bold">España:</h4> <br />
  <div class="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
    Se busca que los estudiantes desarrollen habilidades de cálculo ,
    razonamiento matemático y comprensión básica de los conceptos matemáticos.
  </div>
  <div class="pb-6 flex flex-col">
    <div class="flex flex-row">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>
      <div>
        En España, los planes de estudio para el primer grado de primaria en
        matemáticas están regulados por el Ministerio de Educación y se est
        ablecen los contenidos y objetivos a desarrollar.
      </div>
    </div>
    <div class="flex flex-row">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>
      <div>
        Los temas cubiertos suelen incluir el reconocimiento y escritura de
        números, contar, operaciones básicas como sumas y restas, patrones
        numéricos y resolución de problemas sencillos.
      </div>
    </div>
  </div>
  <p class="pb-6">
    Es importante tener en cuenta que estas son generalizaciones y que los
    planes de estudio para el primer grado de primaria pueden variar según las
    políticas educativas y las particularidades de cada región o distrito
    escolar dentro de cada país.
  </p>
</>;

<>
  <p class="pb-6">
    Saber contar hasta 10 es importante porque es una habilidad básica de
    numeración que se utiliza en diversas situaciones cotidianas y académicas.
    Aquí tienes algunas razones por las cuales es importante tener conocimiento
    de los números hasta 10:
  </p>

  <div class="pb-6 flex flex-col">
    <div class="flex flex-row pb-6">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>
      <div>
        Fundamentos matemáticos: aprender a contar hasta 10 es un paso necesario
        para dominar conceptos matemáticos más difíciles. excelente base para
        comprender las ideas de suma, resta y multiplicaciones relacionadas con
        los números.
      </div>
    </div>
    <div class="flex flex-row pb-6">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>
      <div>
        Lenguaje y comunicación: contar hasta 10 facilita la explicación de
        cantidades y la comunicación de ideas. Puede expresar con mayor
        precisión la cantidad de artículos, personas o lo que sea que esté
        contando al poder reconocer y nombrar números.
      </div>
    </div>
    <div class="flex flex-row pb-6">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>
      <div>
        Secuenciación y orden: conocer el orden de los números es necesario para
        poder contar hasta 10. Esto fomenta el desarrollo de habilidades de
        identificación de patrones y secuenciación, que son cruciales para
        estudiar matemáticas y otras materias.
      </div>
    </div>
    <div class="flex flex-row pb-6">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>

      <div>
        Resolución de problemas: puede abordar y resolver problemas de cantidad
        sencillos contando hasta 10. Contar le permite saber el resultado, por
        ejemplo, si tiene una cierta cantidad de objetos y desea agregar o
        quitar alguno.
      </div>
    </div>
    <div class="flex flex-row pb-6">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>

      <div>
        Desarrollo cognitivo: Contar hasta 10 ayuda en el desarrollo de
        habilidades cognitivas como el enfoque, la memoria y el razonamiento
        lógico. Al contar, se utilizan diferentes partes del cerebro, lo que
        fortalece las conexiones neuronales y fomenta una forma de pensar más
        organizada.
      </div>
    </div>
    <div class="flex flex-row pb-6">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>

      <div>
        Preparación para la escuela: saber contar hasta 10 es necesario para la
        instrucción escolar formal. Numerosos ejercicios e ideas de matemáticas
        elementales se basan en el sentido numérico hasta el 10. Los ejemplos
        incluyen contar en orden, contrastar cantidades y resolver problemas
        sencillos.
      </div>
    </div>
    <div class="flex flex-row pb-6">
      <div class="w-3 h-3 rounded-full bg-gray-500 mr-2 min-h-[12px] min-w-[12px] self-center"></div>

      <div>
        Vida cotidiana: contar hasta 10 es útil para muchas tareas de la vida
        cotidiana, incluida la organización de eventos, la programación del
        tiempo, el seguimiento de instrucciones numéricas y el conteo de
        artículos en una tienda.
      </div>
    </div>
    <p class="pb-6">
      En conclusión, la capacidad de contar ha sta 10 es una habilidad
      fundamental que sienta una base sólida para el desarrollo del pensamiento
      matemático, la comunicación, la resolución de problemas y el razonamiento
      lógico. También es necesario realizar tareas cotidianas y prepararse
      académicamente.
    </p>
  </div>
</>;
