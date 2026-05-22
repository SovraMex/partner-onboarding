🎬 PLAN DE VIDEOS — Fase D
Total: 9 videos · Duración total estimada: ~32 min

- Video 1: Entender qué es Fase D y por qué la gente importa más que el sistema — ~3 min
- Video 2: Cerrar las pruebas en producción antes de hablar de lanzamiento — ~3 min
- Video 3: Capacitar a los operadores en su flujo real — ~4 min
- Video 4: Socializar el modelo de soporte de tres niveles — ~4 min
- Video 5: Preparar al tomador de decisiones para hablar del proyecto — ~3 min
- Video 6: Definir el plan de lanzamiento y el runbook del día 1 — ~4 min
- Video 7: Decidir big bang o gradual, y train the trainer — ~3 min
- Video 8: Evitar los errores que arruinan un lanzamiento — ~3 min
- Video 9: Cerrar Fase D y entrar a post-lanzamiento — ~2 min

═══════════════════════════════════════

VIDEO 1 — Entender qué es Fase D y por qué la gente importa más que el sistema

Llegaste a Fase D. Si veniste siguiendo el orden, esto significa que ya tienes los trámites digitalizados y modelados, las áreas dueñas validaron lo que hiciste, pasaste el testing end-to-end con cero bugs críticos, y las integraciones están funcionando. La plataforma, técnicamente, está lista.

Y sin embargo no estás listo para lanzar. Esa es la trampa clásica de esta fase.

Fase D dura dos semanas, semana 9 y semana 10 del proceso. Pero no es una fase de plataforma. Es una fase de personas. El foco ya no es configurar trámites: es preparar a los operadores para que sepan usar lo que construiste, definir el modelo de soporte para que todos sepan a quién escalar qué, y armar a los tomadores de decisiones para que puedan hablar del proyecto con confianza.

Tres roles se vuelven críticos ahora. El soporte y capacitador de tu equipo, que va a entrenar a los operadores del gobierno. El equipo de comunicación, que tiene que preparar materiales y plan de lanzamiento. Y el dueño del proyecto del lado del gobierno, que va a tener que dar la cara públicamente cuando el sistema arranque.

Si saltas Fase D pensando que la plataforma se vende sola, lo que va a pasar el día 1 es que un ciudadano va a llamar con una duda, el operador no va a saber responder, esa duda va a escalar al líder del proyecto, que tampoco va a saber dónde mirar, y la prensa va a tener una historia de implementación fallida antes del mediodía.

**El sistema técnico ya está. Lo que falta es la gente. Fase D es donde el lanzamiento se decide.**

═══════════════════════════════════════

VIDEO 2 — Cerrar las pruebas en producción antes de hablar de lanzamiento

Antes de capacitar a nadie y antes de armar comunicación, tienes que cerrar el testing en producción. No el de Fase C, que era end-to-end técnico. El de Fase D, que es ejecutar el flujo completo en el ambiente real, con datos reales, como si fueras un ciudadano.

Son diez casos por trámite. Si tienes cinco trámites en producción, son cincuenta pasadas completas. Lo voy a decir derecho porque a veces se subestima: esto se hace, no se discute.

Los diez casos cubren el viaje completo del ciudadano y del operador. Que el ciudadano encuentre el trámite en la guía pública. Que se registre y se autentique sin fricción, incluyendo la integración con el sistema de identidad del gobierno si aplica. Que complete el formulario, adjunte documentos y los envíe. Que el operador reciba el expediente y pueda gestionar todas las etapas. Que el ciudadano reciba la notificación del resultado, sea aprobación o rechazo. Que el documento de salida se genere bien cuando corresponda. Que las validaciones de campos obligatorios funcionen, tanto del lado ciudadano como del operador. Que el flujo completo se vea bien en celular, porque la mayoría va a entrar desde ahí. Y que un rechazo por documentación incompleta le llegue al ciudadano con instrucciones claras de qué corregir.

El criterio para decir "listo para lanzar" es estricto: diez de diez casos pasados por trámite, cero bugs críticos abiertos, y al menos una persona externa al proyecto que haya completado el trámite sin ayuda. Si te falta uno, no lanzas. Negocias la fecha.

**Diez de diez o no se lanza. Una persona externa que lo logre sola es el verdadero criterio de éxito.**

═══════════════════════════════════════

VIDEO 3 — Capacitar a los operadores en su flujo real

La capacitación de operadores es la reunión más importante de Fase D. Dura mínimo dos horas por grupo, la lideras tú con apoyo del especialista funcional del gobierno, y el objetivo es que cada operador sepa usar la plataforma para su flujo específico. No "la plataforma en general". El flujo que esa persona va a ejecutar todos los días.

La agenda tiene cuatro momentos. Primero una demo del flujo completo del trámite, vista desde el rol de operador, donde ven el expediente llegar y se camina cada etapa. Segundo, práctica supervisada: cada operador gestiona un expediente de prueba, no mira a otro hacerlo. Tercero, dudas y casuística, que es donde aparece lo importante: qué hacer cuando el ciudadano sube un documento ilegible, qué hacer cuando un expediente queda trabado, qué hacer cuando hay que devolverlo. Cuarto, verificar que el acceso individual de cada operador funcione con sus credenciales reales antes de irse de la sala.

Los entregables son concretos. Operadores capacitados en su flujo. Accesos confirmados uno por uno. Una lista de dudas frecuentes documentada, que después alimenta el material de soporte. Y por lo menos un día de práctica supervisada antes de que entren a producción real.

Hay una decisión que vas a tener que tomar acá: si el gobierno tiene más de diez operadores, no los capacitas tú a todos. Capacitas a dos o tres del equipo core, ellos replican al resto. Es train the trainer y vamos a verlo más adelante.

<!-- KB-GAP: Gestión de accesos de operadores (Usuarios > Funcionarios > Añadir > módulos + roles) no está cubierta en detalle operativo en este portal — el partner debe estudiar modulo-de-usuarios.md del KB antes de la sesión. -->

**Un operador que no practicó es un operador que no sabe. La práctica supervisada no es opcional.**

═══════════════════════════════════════

VIDEO 4 — Socializar el modelo de soporte de tres niveles

Si no defines el modelo de soporte antes del lanzamiento, todo te llega a ti. Literalmente todo: la duda del ciudadano, el bug, la pregunta política, la solicitud de cambio. Y tú no puedes ser soporte de primera línea de un gobierno entero.

Por eso hay una reunión específica, de una hora, donde se socializa el modelo de soporte. Asisten cuatro personas: el coordinador del lado del gobierno, el dueño del proyecto, el equipo de Nivel 1 del gobierno, y tú como líder partner. Si falta el equipo de Nivel 1 con nombres concretos, no haces la reunión. La reagendas.

El modelo tiene tres niveles. Nivel 1 es el gobierno: atienden ciudadanos, resuelven dudas básicas, gestionan expedientes. Nivel 2 eres tú como partner: resuelves casos que el Nivel 1 escala, problemas de configuración, capacitaciones de refuerzo. Nivel 3 es Sovra: bugs de plataforma, problemas de infraestructura, integraciones que fallan.

La agenda recorre cinco temas. Presentar los tres niveles y dejar claro qué resuelve cada uno. Repasar los SLAs por severidad, con el documento completo que viene en el Kit como referencia. Definir qué canal se usa para qué nivel, sin ambigüedad. Caminar el proceso de escalación paso a paso, con un ejemplo concreto. Y armar el directorio de contactos con nombres, no con roles abstractos.

Los entregables son cuatro. El modelo de soporte firmado o aceptado por el gobierno, no solo presentado. El directorio de contactos completo. El equipo de Nivel 1 del gobierno identificado con nombres. Y los SLAs entendidos por todos, lo cual significa que alguien del gobierno pueda explicártelos a ti sin mirar el documento.

**El modelo de soporte no es un PDF, es un acuerdo entre tres equipos con nombres y responsabilidades claras.**

═══════════════════════════════════════

VIDEO 5 — Preparar al tomador de decisiones para hablar del proyecto

La sesión ejecutiva es una hora máximo. Asisten el dueño del proyecto del gobierno, el equipo de comunicación del gobierno, y tú como facilitador. El objetivo es uno solo: que el tomador de decisiones pueda hablar del proyecto con confianza ante prensa, ante sus superiores y ante ciudadanos.

Este video importa porque, si esa persona habla bien, el proyecto se posiciona como un logro de gestión. Si habla mal o duda, el proyecto se vuelve atacable. Y nadie habla bien improvisando un tema técnico que apenas conoce.

La agenda tiene cuatro partes. Primero, traducir el valor de la plataforma a lenguaje político: no se trata de "modelamos los trámites en el módulo de etapas", se trata de "los vecinos resuelven en cinco minutos lo que antes les tomaba un día". Segundo, elegir tres a cinco métricas clave que el dueño del proyecto va a repetir en cada conversación pública. Tercero, anticipar las preguntas difíciles: ¿qué pasa con la gente sin internet?, ¿esto reemplaza empleados?, ¿quién es dueño de los datos? Y cuarto, practicar el pitch de dos minutos, en voz alta, en la sala. No se asume que sabe: se ensaya.

Los entregables son talking points documentados en una sola página, métricas clave seleccionadas y memorizadas, y el dueño del proyecto listo para comunicar. Y "listo" significa que pueda recitar el pitch sin notas al final de la hora.

**Si el dueño del proyecto no puede explicar el valor en dos minutos, el lanzamiento se va a leer como un proyecto técnico, no como una mejora de gestión.**

═══════════════════════════════════════

VIDEO 6 — Definir el plan de lanzamiento y el runbook del día 1

La cuarta reunión de Fase D es de preparación de comunicación y lanzamiento. Dura entre una y dos horas y asisten el equipo de comunicación del gobierno, el coordinador y tú como líder partner. Acá se decide cuándo, cómo y con qué materiales se lanza.

La agenda cubre cinco puntos. Confirmar fecha de lanzamiento, no estimar. Definir el plan de comunicación con canales internos del gobierno y canales externos hacia los ciudadanos. Tener listos los materiales: guía del ciudadano para usar el trámite, FAQ con las dudas más comunes, piezas para redes sociales y prensa. Escribir el runbook de lanzamiento, que es el documento clave de esta reunión. Y decidir si el lanzamiento es big bang o gradual.

El runbook merece atención aparte. Es el documento de "qué hacer si X falla en el día 1". Si el sistema se cae, ¿quién decide bajar el anuncio público? Si un trámite empieza a rechazar a todos por error, ¿quién se contacta con quién y en cuánto tiempo? Si la prensa pregunta por un caso negativo viralizado, ¿quién responde y qué dice? El runbook no anticipa todo, pero anticipa los escenarios obvios y deja roles claros para los no obvios.

Los entregables de esta reunión son cuatro. Fecha de lanzamiento confirmada, sin "alrededor de". Plan de comunicación documentado. Materiales de comunicación efectivamente listos, no en redacción. Y el runbook de lanzamiento escrito, no acordado verbalmente.

**El runbook es el seguro del día 1. No lo escribes para usarlo, lo escribes para no necesitar improvisar bajo presión.**

═══════════════════════════════════════

VIDEO 7 — Decidir big bang o gradual, y train the trainer

Hay tres decisiones de Fase D que vas a tener que tomar con criterio, no con plantilla. Vale la pena pararnos en cada una.

La primera es train the trainer o capacitación directa. La regla práctica: si el gobierno tiene más de diez operadores, no los capacitas tú. Capacitas a dos o tres del equipo core, generalmente los más fuertes técnicamente y los que ya tienen ascendencia sobre el resto, y ellos replican. Funciona porque el conocimiento se queda dentro del gobierno y porque la segunda ola de capacitación va a estar mejor adaptada al lenguaje interno. La trampa es no validar la calidad: tienes que sentarte en al menos una de las capacitaciones replicadas, para confirmar que lo que están enseñando se parece a lo que enseñaste tú.

La segunda es big bang o gradual. Big bang significa que el día del lanzamiento todos los trámites están disponibles para todos los ciudadanos. Gradual significa que arrancas con un trámite o con una zona acotada, ves cómo se comporta, y vas abriendo. El criterio: si el gobierno tiene poca experiencia digital previa, o si el equipo de soporte está recién armado, vas gradual. Si ya tienen adopción digital, los operadores son experimentados y los trámites son de alto volumen, big bang funciona porque generas un evento comunicacional fuerte.

La tercera es cuándo involucrar a comunicación. La respuesta corta: ya deberías. Idealmente comunicación está informada desde Fase B, no desde Fase D. Si recién la traes ahora, perdiste tiempo. Hazlo igual, pero anótalo como lección aprendida.

**Las decisiones de Fase D no se toman por intuición. Se toman con criterio explícito, y el criterio se documenta para la próxima implementación.**

═══════════════════════════════════════

VIDEO 8 — Evitar los errores que arruinan un lanzamiento

Hay tres errores típicos en Fase D, y los tres son evitables con disciplina, no con experiencia. Te los digo derecho.

Primer error: lanzar sin capacitar operadores. Es el más obvio y aún así se comete cada vez que la presión política aprieta. Un equipo terminó la configuración el viernes, hay un evento de lanzamiento el lunes, y alguien decide capacitar "en paralelo" durante el lanzamiento. No funciona. La regla mínima es una sesión de dos horas más un día de práctica supervisada. Si no entra en el calendario, mueves el lanzamiento.

Segundo error: no preparar el discurso político. El tomador de decisiones llega al lanzamiento, le pregunta un periodista qué porcentaje de adopción esperan en seis meses, y la respuesta es "no sabría decirte ahora". Esa respuesta sola le da a la nota un tono dubitativo. La sesión ejecutiva de una hora resuelve esto. Qué valor genera la plataforma, qué métricas vas a comunicar, qué responder ante preguntas difíciles. No es opcional, es protocolo.

Tercer error: soporte sin estructura. La conversación es "cuando lance, vemos cómo lo vamos resolviendo". El día 1 entra una avalancha y nadie sabe a quién escalar. Define los niveles antes del lanzamiento. Usa el template del Kit, ajústalo, hazlo firmar.

**Los tres errores se evitan con tres reuniones. Si no las haces, el lanzamiento te va a pasar factura.**

═══════════════════════════════════════

VIDEO 9 — Cerrar Fase D y entrar a post-lanzamiento

Para cerrar Fase D con tranquilidad, repasa este checklist mental. ¿Las pruebas en producción están pasadas? ¿Los accesos de cada operador están gestionados y confirmados uno a uno? ¿Los operadores están capacitados en su flujo específico, no en una demo genérica? ¿El modelo de soporte está socializado, con los tres niveles claros y SLAs aceptados? ¿El equipo de comunicación tiene los materiales y el plan de lanzamiento? ¿Los tomadores de decisión están alineados con el discurso? ¿La fecha de lanzamiento está confirmada? ¿Tienes el runbook escrito? ¿Los roles están verificados y vigentes, incluyendo el Nivel 1 de soporte con nombres concretos?

Si todo eso está, lanzas. Si falta uno solo, te detienes y lo resuelves antes.

Algo importante sobre Fase D que vale recordar: las reuniones acá las lidera el partner. Sovra no entra a capacitar operadores ni a presentar el modelo de soporte. Sovra entra solo si hay un escalamiento real: un problema en producción que afecta disponibilidad, un cambio de alcance del gobierno antes de lanzar, o un conflicto político que amenaza la fecha. Si te encuentras en alguno de esos tres, escalas. Si no, sigues tú.

Y la otra cosa, no menor: en Fase D la minuta se vuelve más frecuente. Puede ser dos veces por semana. Después de cada reunión, mandas qué se acordó, qué quedó pendiente, quién es responsable. No se entrega un lanzamiento sin esa trazabilidad.

Lo que viene es Fase E, post-lanzamiento. Ahí el foco cambia de nuevo: monitoreo de métricas reales, documentación de lecciones aprendidas y cierre del proyecto. La adrenalina del día 1 ya pasó, pero el trabajo no terminó. La Fase E es la que define si la implementación se sostiene o se desinfla a los tres meses.

**Fase D termina cuando lanzas con la gente lista, no cuando termina el calendario. Si llegaste hasta acá con los nueve ítems cerrados, estás listo.**
