🎬 PLAN DE VIDEOS — Fase C
Total: 8 videos · Duración total estimada: ~28-30 min

- Video 1: Abrir la Fase C — ~3 min
- Video 2: Modelar con el gobierno, no por ellos — ~3 min
- Video 3: Modelar el formulario del trámite — ~4 min
- Video 4: Modelar las etapas operativas — ~4 min
- Video 5: Cerrar el trámite (documento de salida, ficha y configuración) — ~4 min
- Video 6: Resolver integraciones técnicas — ~3 min
- Video 7: Probar de punta a punta — ~4 min
- Video 8: Errores comunes, decisiones y qué viene — ~4 min

Tono: profesional, cercano, directo. Como si Sovra te recibiera y te dijera "esto es lo que tienes que saber para arrancar Fase C".

Basado en: `src/data/fase-c-content.ts` + audit 2026-05-13 + review instruccional 2026-05-13.

NOTA: Esto es texto puro. El formato de entrega (video, audio, interactivo) se define después.

═══════════════════════════════════════

VIDEO 1 — Abrir la Fase C

Llegaste a la fase donde el trámite deja de ser una conversación y pasa a ser una pantalla. En Fase B trabajaste con el gobierno para priorizar trámites, definir integraciones y dejar al equipo capacitado. Ahora toca digitalizar.

Fase C son las semanas 6 a 8. Hay un solo criterio para saber si está lista: si un ciudadano puede completar el trámite sin ayuda extra, está listo. Si necesita que alguien le explique, todavía no.

En la práctica vas a hacer tres cosas en paralelo. Vas a modelar cada trámite priorizado en la plataforma. Vas a poner a punto las integraciones técnicas, sobre todo el sistema de autenticación del gobierno. Y vas a probar todo de punta a punta, desde el ciudadano que entra a la guía pública hasta el operador que cierra la solicitud y emite el documento.

Mientras dura la fase, tres roles cargan el peso. El especialista funcional del partner lidera el modelado, porque conoce la plataforma a fondo. El técnico se ocupa de las integraciones. Y las áreas dueñas de cada trámite validan que lo que se modeló refleja cómo se hace de verdad. Sin esas áreas, no hay validación. Sin validación, no hay Fase D.

Una cosa más antes de arrancar. Fase C es densa. Vas a tocar formulario, etapas, documento de salida, ficha pública, catálogos, imagen institucional y dominio. Todo al mismo tiempo, todo con plazo de tres semanas. Por eso esta fase pide ritmo de iteración corto: modelar, mostrar al área dueña, ajustar, mostrar otra vez.

**Si Fase B fue acordar qué se digitaliza, Fase C es hacerlo realidad en la plataforma.**

═══════════════════════════════════════

VIDEO 2 — Modelar con el gobierno, no por ellos

El error más caro que puedes cometer en Fase C es modelar tú solo y entregar el trámite terminado. Funciona la primera vez. Después el gobierno te necesita para cada cambio, y tu salida del proyecto se vuelve imposible.

La regla es simple. Modelas junto con el equipo del gobierno, no para ellos. El partner enseña, el gobierno ejecuta. Tu trabajo es guiar a la persona que va a quedar a cargo, mostrarle cómo se configura cada parte y por qué se decide de una forma o de otra.

Esto cambia la dinámica de las reuniones. En vez de presentarles un trámite ya modelado, te sientas con quien va a operarlo y configuran juntos. Esa persona, normalmente un especialista funcional del lado del gobierno, debería terminar Fase C pudiendo modelar un trámite nuevo sin que tú estés en la sala.

Hay una decisión que aparece seguido. ¿Qué haces cuando el área dueña rechaza el modelado? La respuesta del manual es clara. Pides una reunión con el operador real, no con su jefe. El jefe te dice cómo le gustaría que fuera el trámite. El operador te dice cómo se hace de verdad, con todas las excepciones, atajos y pasos que el manual oficial no documenta. Treinta minutos con el operador real valen más que tres reuniones con la jefatura.

La otra trampa habitual es modelar sin validar. Modelas el trámite completo, lo dejas listo y recién ahí lo mostras. Cuando el área dueña ve el resultado, descubres que media docena de cosas no funcionan como hacen ellos. Tienes que rehacer trabajo de una semana.

La alternativa cuesta menos. Modelas un pedazo, lo muestras, lo ajustas. Modelas el siguiente pedazo, lo muestras, lo ajustas. Pierdes algunas horas de reunión y ahorras varios días de reproceso.

**Si terminas Fase C y el gobierno depende de ti para tocar un trámite, no terminaste tu trabajo. Lo postergaste.**

═══════════════════════════════════════

VIDEO 3 — Modelar el formulario del trámite

El formulario es el cuestionario que completa el ciudadano. Es la primera pieza que vas a modelar y la que más conversación va a generar con el área dueña, porque cada pregunta refleja una decisión sobre qué información necesita el gobierno para resolver la solicitud.

La plataforma te da varios tipos de preguntas. Texto libre, números, fechas, opciones para elegir, carga de archivos y campos que se completan a partir de un catálogo. También puedes encadenar preguntas con lógica condicional, para que ciertos campos solo aparezcan según lo que el ciudadano respondió antes. Por ejemplo, si el ciudadano marca que el trámite es para un vehículo, recién ahí aparece la pregunta del dominio del vehículo.

Antes de empezar a modelar, conviene tener a mano el formulario en papel que el gobierno usa hoy. Esa hoja es la fuente más honesta de qué se pregunta y en qué orden. Cualquier campo que esté en el papel y no esté en el formulario digital tiene que justificarse. Cualquier campo nuevo que agregues también.

Los catálogos son la pieza que se olvida más seguido. Si una pregunta tiene una lista de opciones que ya existe en otro trámite, configúrala una sola vez como catálogo y vincúlala desde donde la necesites. La lista de localidades, los tipos de documento, las categorías de comercio, las áreas internas del municipio. Todo eso vive una sola vez y se reutiliza.

La validación de cada campo también se modela en esta etapa. Qué es obligatorio, qué formato tiene que tener, qué archivos se aceptan, qué tamaño máximo. Cada validación que defines es una sesión de soporte que no vas a tener que dar después.

Cuando termines el formulario, hay una prueba rápida. Pídele a alguien del equipo del gobierno que lo complete como si fuera ciudadano. Si tarda más de lo que tarda en hacer el trámite en ventanilla, algo está de más.

**Un formulario bien modelado se siente más corto de lo que en realidad es. Uno mal modelado pide cosas que el gobierno nunca necesitó.**

═══════════════════════════════════════

VIDEO 4 — Modelar las etapas operativas

Una vez que el ciudadano envía el formulario, la solicitud entra al flujo interno del gobierno. Ese flujo se modela como etapas. Cada etapa es un paso por el que pasa el expediente antes de resolverse: revisión documental, pago si corresponde, cita presencial si hace falta, inspección de campo, firma de un responsable, emisión del documento final.

Modelar las etapas es donde se hace visible cómo trabaja el gobierno de verdad. En el manual oficial probablemente diga que el trámite tiene tres pasos. Cuando te sientas con el área dueña, descubres que en realidad pasa por cinco escritorios distintos. El modelo tiene que reflejar el flujo real, no el flujo ideal.

Hay una decisión que aparece todo el tiempo. ¿Conviene una etapa simple o conviene partirla en subetapas? El criterio es práctico. Si puedes dibujar el flujo como una línea recta, donde el expediente pasa de una mano a la siguiente sin bifurcaciones, te alcanza con etapas simples. Si dos áreas trabajan en paralelo sobre la misma solicitud, o si un área tiene que dividir el trabajo entre varias personas internas, ahí necesitas subetapas.

Hay piezas opcionales que se conectan al flujo según el trámite. Si el trámite cobra una tasa, una de las etapas es el pago, y eso te lleva al módulo de pagos. Si el ciudadano tiene que ir presencialmente a una oficina, se modela como una cita. Si un inspector tiene que ir al domicilio o al comercio, se modela como una inspección.

Una recomendación que vale para todos los trámites complejos. Modela primero el camino feliz, donde el ciudadano cumple todo y el expediente avanza sin problemas. Después agrega los caminos de excepción, donde falta un documento, el pago no se acreditó o la inspección observó algo. Si modelas todo junto desde el principio, te empantanas.

**Las etapas se modelan mirando cómo se trabaja, no cómo se debería trabajar. La plataforma puede después ayudar a mejorar el proceso, pero primero tiene que reflejar la realidad.**

═══════════════════════════════════════

VIDEO 5 — Cerrar el trámite (documento de salida, ficha y configuración)

Hay tres piezas que cierran el modelado de cada trámite. Sin ellas, lo que tienes es un formulario lindo que no se conecta con el resto del mundo.

La primera es el documento de salida. Es el archivo que recibe el ciudadano cuando el trámite se aprueba: el certificado, el permiso, la habilitación, la constancia. Se arma con un editor visual donde combinas elementos de diseño, como el escudo y el encabezado institucional, con variables del trámite, como el nombre del ciudadano, el número de expediente, la fecha y los datos del formulario. La regla es que cada dato que aparece en el documento ya tiene que estar capturado en el formulario o en alguna etapa. Si no, no hay de dónde sacarlo.

La segunda es la ficha del trámite. Es la página pública que el ciudadano ve en la guía antes de iniciar la solicitud. Le explica qué es el trámite, qué necesita, cuánto cuesta si corresponde y cuánto tarda en resolverse. La ficha no es decoración. Es la primera línea de soporte. Una ficha bien escrita evita la mitad de las llamadas al área. Una ficha pobre las multiplica.

La tercera es la configuración general del trámite. Acá entran las reglas globales que se aplican al trámite completo: si está visible o sigue oculto, si depende de que otro trámite esté resuelto primero, qué identificador interno tiene, qué firmas necesita y cuál es su vigencia. Son decisiones que parecen menores pero definen cómo se comporta el trámite en producción.

Una sugerencia de orden. Modela formulario y etapas primero, porque son lo más visible. Después arma el documento de salida, porque ya tienes claros los datos que vas a usar. Recién al final ajustas la ficha pública y la configuración general, cuando el resto está estable.

Y antes de pasar al testing, aplica la imagen institucional. Logo, colores del gobierno, secciones del home, dominio propio. El KB de apariencia tiene la guía completa, con todas las secciones de tema y de página de inicio que se pueden personalizar. Si lo dejas para el final, te vas a comer la urgencia de Fase D haciéndolo.

**El trámite no termina en el formulario. Termina cuando el ciudadano puede entrar por la guía pública, completar, recibir su documento y entender qué pasó en cada paso.**

═══════════════════════════════════════

VIDEO 6 — Resolver integraciones técnicas

Mientras el equipo funcional modela los trámites, el equipo técnico trabaja en las integraciones. Son tres y se trabajan en paralelo, no en secuencia.

La primera y más crítica es el sistema de autenticación del gobierno. Lo que en planes y reuniones técnicas se nombra como IDP. Sin esto, el ciudadano no puede iniciar sesión, y sin login no hay trámite que arranque. Por eso es prioridad uno. La integración tiene que estar funcionando en ambiente de pruebas antes de que termine la fase, ojalá antes. <!-- KB-GAP: Integración IDP no documentada en KB; manuales describen el registro propio pero no la integración con sistemas de identidad externos del gobierno -->

La segunda son los pagos, si el trámite cobra una tasa. Esto suma alrededor de dos semanas al cronograma, así que si ya sabías desde Fase B que iban a haber pagos, la integración tendría que estar arrancada. Si te toma por sorpresa en Fase C, vas a tener que correr el lanzamiento.

La tercera son las consultas a bases de datos externas del gobierno. Son las que permiten que el formulario valide datos en línea: que un número de documento exista, que una patente esté registrada, que un domicilio esté dentro del partido. No todos los trámites las necesitan, pero los que sí dependen de respuestas rápidas y confiables.

Las tres integraciones tienen un punto de coincidencia: hay que probar conectividad y velocidad de respuesta antes del testing de punta a punta. Si la integración funciona pero tarda quince segundos, el ciudadano la va a leer como un error y va a abandonar el trámite. Los tiempos de respuesta importan tanto como la integración en sí.

Documenta cada integración a medida que la cierras. A qué servicio se conecta, qué datos le pide, qué datos devuelve, qué pasa si el servicio del gobierno no responde. Esa documentación se la vas a entregar al equipo del gobierno en Fase E, y va a ser su única defensa cuando algo deje de funcionar y tú ya no estés en el proyecto.

**Las integraciones no son un anexo de Fase C. Son lo que diferencia un trámite digital de un formulario online. Si dejas las integraciones para el final, no te alcanza el tiempo.**

═══════════════════════════════════════

VIDEO 7 — Probar de punta a punta

El testing de Fase C es la prueba de fuego. Cada trámite priorizado tiene que pasar el ciclo completo, desde que el ciudadano lo encuentra en la guía pública hasta que recibe su documento final. Si alguno de los pasos falla, el trámite no está listo.

El protocolo son siete pasos en orden. Uno, el ciudadano encuentra el trámite en la guía. Dos, se registra o autentica. Tres, completa el formulario y adjunta los documentos. Cuatro, el operador recibe el expediente en su bandeja. Cinco, el operador gestiona las etapas hasta resolverlo. Seis, el ciudadano recibe la notificación del resultado. Siete, el documento de salida se genera correctamente.

Cada paso tiene que probarse explícitamente. No es suficiente con que el formulario se complete. Hay que ver que el expediente le llega al operador correcto, que la notificación se dispara, que el documento sale con todos los datos en el lugar que corresponde.

Hay una regla incómoda pero crítica. La prueba del lado ciudadano no la puede hacer alguien que participó en el modelado. Si quien modeló el trámite también lo prueba, conoce todos los atajos y todas las preguntas trampa. Va a completar el trámite en tres minutos y vas a creer que está listo. Pídele a alguien que no estuvo en el modelado, cuanto más alejado mejor, que complete el trámite como si nunca lo hubiera visto. Si tropieza, ahí está el problema. Si no puede sin ayuda, no está listo.

La prueba del lado operador también necesita a alguien real. No al técnico del gobierno que entiende cómo funciona la plataforma. Al operador de carne y hueso que va a gestionar el trámite todos los días una vez que lance. Si el operador se confunde con las etapas o no encuentra dónde está el expediente, hay que rediseñar antes de avanzar.

Estandariza el naming de los usuarios de prueba para que no se mezclen con usuarios reales. Y mantén un reporte simple por cada trámite probado: paso a paso, qué pasó, qué falló, qué bug se abrió. Ese reporte es lo que después le muestras al dueño del proyecto del gobierno cuando preguntan si está todo listo.

Antes de cerrar Fase C, el criterio es cero bugs críticos abiertos. Los bugs menores se pueden aceptar, pero cada uno tiene que tener responsable y fecha de resolución. Y si un trámite tiene un bug crítico que no logras resolver, esa es la señal para escalar a Sovra antes de avanzar.

**Si la persona externa puede completar el trámite sin ayuda, está listo. Si no puede, todavía no. No hay puntos intermedios.**

═══════════════════════════════════════

VIDEO 8 — Errores comunes, decisiones y qué viene

Antes de cerrar la fase, vale la pena dejar a la vista las tres trampas que se repiten en cada implementación, los criterios para resolver las decisiones que vas a enfrentar y qué te espera del otro lado.

Las trampas, primero. Modelar sin validar con el área dueña. Es la forma más rápida de gastar tiempo en algo que después hay que rehacer. Treinta minutos con el operador real son más baratos y más valiosos que dos días de modelado sin feedback. La segunda trampa es dejar las integraciones para el final. El sistema de autenticación del gobierno bloquea todo lo demás, así que se prioriza desde Fase B y se cierra a más tardar en mitad de Fase C. La tercera trampa es probar solo del lado operador. Si nadie probó el trámite desde la silla del ciudadano, no sabes si funciona; sabes que el operador no lo rompe.

Las decisiones, ahora. Cuando el área dueña rechaza el modelado, te sientas con el operador real, no con su jefe. Cuando dudas entre etapas simples y subetapas, te preguntas si el flujo se dibuja como línea recta; si sí, alcanza con etapas. Cuando no sabes si seguir iterando, te preguntas si el ciudadano puede completar el trámite sin ayuda; si sí, está listo.

Antes de declarar la fase cerrada, revisa el checklist completo. Todos los trámites priorizados, modelados. Cada uno validado con su área dueña, con firma o confirmación explícita. Testing de punta a punta pasado para cada trámite, con ciudadano y operador. Integraciones funcionando, sobre todo la de identidad. Cero bugs críticos abiertos. Guía pública configurada y revisada. Imagen institucional aplicada. Dominio funcionando. Y los roles, revisados una vez más, porque entre Fase B y Fase D puede haber rotación y conviene confirmar quién va a operar el sistema en producción.

Si encuentras un bloqueo que no puedes resolver, ese es el momento de escalar a Sovra. Un bug crítico que no destrabas, una integración que no responde, un área dueña que rechaza el modelado y no logras mediar. Para eso está el modelo de soporte que armaste en fases anteriores.

Cuando termines Fase C, lo que tienes en la mano es una plataforma funcional con trámites probados. Lo que viene en Fase D es prepararla para producción. Vas a capacitar a los operadores reales que la van a usar todos los días, vas a montar el modelo de soporte ciudadano, vas a armar la comunicación de lanzamiento y vas a hacer una última ronda de testing en condiciones lo más parecidas posible a las de producción. Son dos semanas más cortas pero más intensas, porque cada decisión que tomas ahí ya tiene consecuencias visibles para el ciudadano.

**Cierras Fase C cuando un ciudadano externo, sin nadie al lado, puede completar cualquiera de los trámites priorizados y recibir su documento. Si todavía no, falta. Si sí, te espera Fase D.**
