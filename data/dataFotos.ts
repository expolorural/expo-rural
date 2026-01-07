import { Photo } from "@/objeto/fotos";

export const photos: Photo[] = [
  {
    id: 1,
    title: "Calavera de vaca en la pared",
    url: "calavera-de-foto",
    venta: {
      "Fotografía 30x40 - Marco Negro": "$30.000"
    },
    main: true,
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Es muy usual que en las casas rurales se puedan ver colgadas en las paredes o en algún tronco una calavera de vaca o toro. A veces se hace por estética, pero también existe la creencia de que este elemento funciona como un 'contra' para las malas intenciones o hechizos de quienes puedan llegar a la casa. Otros elementos que cumplen esta función son la cruz de palos de parqui amarrada con lana roja, tener una planta de ruda a la entrada de la casa, o tener una tijera colgada abierta dentro de la casa.",
    imageUrl: "/calavera-de-vaca.png",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 2,
    title: "Señora Olivia viendo pasar la tarde",
    url: "",
    main: true,
    description: "Dulce señora olivia",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Para las personas de la tercera edad es muy común sentarse afuera de su casa a ver pasar la tarde, sobre todo en el campo. Así lo hace la señora Olivia en el pueblo de Colín. Cuando la vi ahí instalada le pedí permiso para tomarle una foto, luego de esto vino una conversación sobre su vida actual y sobre lo esforzada que ha sido en el pasado. ",
    imageUrl: "/señora-olivia.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 3,
    title: "Señora Isabel trabajando la greda",
    url: "a",
    main: true,
    description: "Haciendo manualidades",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Si te encaminas hacia la localidad de Maule, a pocos minutos de salir de Talca te encontrarás con un un villorio perteneciente a Unihue al costado derecho de la ruta. En este lugar abundan las artesanas y artesanos. Una de ellas es la señora Isabel, quien, junto a su familia, recolecta, moldea, cuece y vende sus productos. ",
    imageUrl: "/señora-isabel.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 4,
    title: "Un pozo solitario ",
    url: "a",
    main: true,
    venta: {
      "Fotografía 20x30 - Marco blanco": "$15.000",
      "Fotografía 30x40 - Marco blanco": "$30.000"
    },
    description: "Un pozo en el bosque",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "En un rincón de Linares de Perales encontramos en sector de La Puntilla, que es donde se unen el Río Claro con el Río Maule. En este entorno y si aparente dueño, nos encontramos con este pozo solitario. ",
    imageUrl: "/pozo.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 5,
    title: "La garita y el atardecer",
    url: "a",
    main: true,
    venta: {
      "Fotografía 20x30 - Marco Blanco / Simulacion Madera": "$15.000",
      "Fotografía 30x40 - Marco Blanco / Simulacoin Madera": "$30.000" 
    },
    description: "Una calle",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Esta fotografía captura...",
    imageUrl: "/atardecer.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 6,
    title: "Collage Cordillerano",
    url: "a",
    venta: {
      "Fotografía 40x50 - Marco en madera de caucho + paspartú": "$45.000",
      "Fotografía 30x40 - Marco Blanco": "$35.000"
    },
    main: true,
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Esta imagen está compuesta de fotos realizadas principalmente en el sector de Achibueno (Comuna de Linares) y Vilches (Comuna de San Clemente). En él se intenta plasmar la riqueza de texturas y relieves que se pueden apreciar al visitar la cordillera, lo que a su vez habla de la abundancia y variedad de las formas de vida. ",
    imageUrl: "/collage.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 7,
    title: "Cultivando entre pala y muleta",
    url: "a",
    main: true,
    description: "Un grande ese hombre",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Existen algunas ocupaciones que no se hacen sólo por obtener sustento, y para muchos agricultores el cultivo de la tierra es una de ellas. Es como si necesitaran hacerlo para sentirse completos, lo hacen a pesar de la enfermedad. Después de toda una vida haciéndolo el cuerpo sigue pidiendo levantarse al alba.",
    imageUrl: "/cultivando.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 8,
    title: "Merlina descubriendo un damasco",
    url: "a",
    main: true,
    description: "La Lina con un damasco",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Que mi hija crezca en contacto y conciencia de la naturaleza siempre fue una de mis ambiciones como madre. Esos momentos de descubrir bichitos, una fruta creciendo, el comportamiento del agua al jugar o los paisajes, son de gran estímulo tanto sensorial como cognitivo, y tan relevantes como aprender a leer o sumar.",
    imageUrl: "/damasco.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 9,
    title: "Forel",
    url: "a",
    venta: {
      "Fotografía 30x40 - Marco negro": "$30.000",
      "Fotografía 20x30 - Marco negro": "$20.000"
    },
    main: true,
    description: "No se que es un forel",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Cierto día decidimos subirnos al Ramal con un amigo y le pedimos al chofer que nos dejara en la estación más linda. Nos recomendó Forel. Nos bajamos ahí y luego de caminar cerro arriba unos 45 minutos, nos encontramos con un villorrio y nos acercamos a una casa a preguntar si había algún almacén donde comprar, pero no había nada. En lugar de eso, la señora María, dueña de la casa, nos invitó a comer sopaipillas, pan amasado, tomar chicha de Curtiduría, conocer a su esposo, sus animales y a dar un paseo por el sector, el que hace meses había sufrido con los incendios forestales.",
    imageUrl: "/forel.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 9,
    title: "Señora Maria",
    url: "a",
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Esta fotografía captura...",
    imageUrl: "/señora-maria.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 9,
    title: "Señora Maria",
    url: "a",
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Esta fotografía captura...",
    imageUrl: "/forel3.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 9,
    title: "Señora Maria",
    url: "a",
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Esta fotografía captura...",
    imageUrl: "/forel4.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 9,
    title: "Señora Maria",
    url: "a",
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Esta fotografía captura...",
    imageUrl: "/forel5.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 10,
    title: "Reinaldo regando la huerta",
    url: "a",
    main: true,
    description: "Toca más pala que yo",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Regar las plantas, alimentar los animales, cosechar algunas frutas o verduras, recoger los huevitos del gallinero, son tareas que los niños realmente disfrutan y en los que vale la pena incluirlos. A pesar de que no lo hagan a la perfección, su experiencia es muy valiosa.",
    imageUrl: "/regando.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 11,
    title: "Rio Maule y sus soledades",
    url: "a",
    main: true,
    venta: {
      "Fotografía 20x30 - Marco Negro": "$15.000",
      "Fotografía 30x40 - Marco Negro": "$25.000"
    },
    description: "Una foto de agua",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Esta fotografía captura...",
    imageUrl: "/rio-maule.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 12,
    title: "Un Roble Solitario",
    url: "a",
    main: true,
    venta: {
      "Fotografía 20x30 - Marco Blanco": "$15.000",
      "Fotografía 30x40 - Marco Blanco": "$25.000"
    },
    description: "Soy ese",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "En un rincón de Linares de Perales encontramos en sector de La Puntilla, que es donde se unen el Río Claro con el Río Maule. En este entorno y si aparente dueño, nos encontramos con este pozo solitario. ",
    imageUrl: "/roble.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 13,
    title: "Tatas camino a la Iglesia",
    url: "a",
    main: true,
    venta: {
      "Fotografía 20x30 - Marco simulación madera": "$15.000",
      "Fotografía 30x40 - Marco simulacion madera": "$30.000"
    },
    description: "Que viva el amor",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Mis abuelos son parte de la iglesia del pueblo desde hace décadas. Esta foto es de hace pocos años, cuando ambos aún tenían salud compatible para poder ir caminando a la iglesia que queda a unas tres cuadras de su casa, un rito que para ellos es de gran importancia.",
    imageUrl: "/tatas-a-iglesia.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 14,
    title: "Tío Chicho regando entre las chiras",
    url: "a",
    main: true,
    venta: {
      "Fotografía 20x30 - Marco simulación madera": "$15.000",
      "Fotografía 30x40 - Marco simulación madera": "$25.000"
    },
    description: "Un grande",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Luego de vivir toda su vida en la capital, el tío Chicho junto a su familia decidieron venir a vivir al campo maulino, tal como lo hizo él en su infancia. ",
    imageUrl: "/tio-chicho.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 15,
    title: "Roberto recolectando tomates",
    url: "a",
    main: true,
    venta: {
      "Fotografía 20x30 - Marco Blanco": "$15.000"
    },
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Desde que tengo conciencia que mi familia cultivó tomates en Colín, hasta hace pocos años. Durante mis años de estudio, este era el trabajo que me permitía pagar la matrícula y otros gastos y así alivianar la carga económica de mis padres. Aquí se ve a mi padre recolectar tomates, pero en realidad es un trabajo mucho más duro de lo que se pueda apreciar en esta foto, ya que aquí el lo estaba haciendo para uso personal. Quienes cosechan o ‘cortan’ tomates siempre andan de pantalón y manga larga, de lo contrario terminas con la piel pinchada. Se pasan la mayor parte de la mañana agachados, cargando el cajón que poco a poco se va llenando y en un día caluroso de veranos, pasado el mediodía si estás aún dentro del invernadero, puedes sentir unos 40 grados.",
    imageUrl: "/tomates.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 16,
    title: "Animales",
    url: "a",
    main: true,
    venta: {
      "Fotografía 30x40 - Marco Blanco": "$30.000",
      "Fotografía 20x30 - Marco Blanco": "$20.000"
    },
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Él sólo comía. Yo vi una escena de timidez, pureza y ternura",
    imageUrl: "/caballo.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 16,
    title: "Patos",
    url: "a",
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Él sólo comía. Yo vi una escena de timidez, pureza y ternura",
    imageUrl: "/patos.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 16,
    title: "Cabra",
    url: "a",
    venta: {
      "Fotografía 20x30 - Marco Blanco": "$15.000"
    },
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Él sólo comía. Yo vi una escena de timidez, pureza y ternura",
    imageUrl: "/cabra.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 16,
    title: "Animal Comiendo",
    url: "a",
    venta: {
      "Fotografía 20x30 - Marco Blanco": "$15.000"
    },
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Él sólo comía. Yo vi una escena de timidez, pureza y ternura",
    imageUrl: "/animal-comiendo.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 16,
    title: "Caballo en su pesebrera",
    url: "a",
    venta: {
      "Fotografía 20x30 - Marco Blanco": "$20.000",
      "Fotografía 30x40 - Marco Blanco": "$30.000"
    },
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Él sólo comía. Yo vi una escena de timidez, pureza y ternura",
    imageUrl: "/caballo-pesebrera.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 16,
    title: "Perro",
    url: "a",
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Él sólo comía. Yo vi una escena de timidez, pureza y ternura",
    imageUrl: "/perro.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 17,
    title: "Baile de los negros de Lora",
    url: "a",
    main: true,
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "El Baile de los Negros de Lora es una festividad religiosa que está reconocida como Tesoro Humano Vivo. Es un ritual con raíces prehispánicas que luego de la llegada de los españoles se mezcló con el cristianismo. El resultado es una ceremonia de adoración a la virgen, acompañado de pifilcas, bailes monótonos, mujeres mapuches pintadas de negro (‘las negras’) y hombres vestidos con cueros de animales (‘los encuerados’). Durante esta ceremonia, que ocurre cada tercer domingo de octubre, se adora y acompaña a una virgen de la que se dice que es natural, con pelo real. Es una celebración abierta al público.",
    imageUrl: "/baile-negro.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 17,
    title: "Baile de los negros de Lora",
    url: "a",
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "El Baile de los Negros de Lora es una festividad religiosa que está reconocida como Tesoro Humano Vivo. Es un ritual con raíces prehispánicas que luego de la llegada de los españoles se mezcló con el cristianismo. El resultado es una ceremonia de adoración a la virgen, acompañado de pifilcas, bailes monótonos, mujeres mapuches pintadas de negro (‘las negras’) y hombres vestidos con cueros de animales (‘los encuerados’). Durante esta ceremonia, que ocurre cada tercer domingo de octubre, se adora y acompaña a una virgen de la que se dice que es natural, con pelo real. Es una celebración abierta al público.",
    imageUrl: "/baile2.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 17,
    title: "Baile de los negros de Lora",
    url: "a",
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "El Baile de los Negros de Lora es una festividad religiosa que está reconocida como Tesoro Humano Vivo. Es un ritual con raíces prehispánicas que luego de la llegada de los españoles se mezcló con el cristianismo. El resultado es una ceremonia de adoración a la virgen, acompañado de pifilcas, bailes monótonos, mujeres mapuches pintadas de negro (‘las negras’) y hombres vestidos con cueros de animales (‘los encuerados’). Durante esta ceremonia, que ocurre cada tercer domingo de octubre, se adora y acompaña a una virgen de la que se dice que es natural, con pelo real. Es una celebración abierta al público.",
    imageUrl: "/baile3.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 17,
    title: "Baile de los negros de Lora",
    url: "a",
    venta: {
      "Fotografía 20x30 - Marco Negro": "$15.000",
      "Fotografía 30x40 - Marco Negro": "$30.000"
    },
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "El Baile de los Negros de Lora es una festividad religiosa que está reconocida como Tesoro Humano Vivo. Es un ritual con raíces prehispánicas que luego de la llegada de los españoles se mezcló con el cristianismo. El resultado es una ceremonia de adoración a la virgen, acompañado de pifilcas, bailes monótonos, mujeres mapuches pintadas de negro (‘las negras’) y hombres vestidos con cueros de animales (‘los encuerados’). Durante esta ceremonia, que ocurre cada tercer domingo de octubre, se adora y acompaña a una virgen de la que se dice que es natural, con pelo real. Es una celebración abierta al público.",
    imageUrl: "/baile4.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 19,
    title: "Recolector de uvas",
    url: "a",
    main: true,
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "En la Viña Los Nogales de la Localidad de Linares de Perales, tienen parras de 130 años de edad aproximadamente, las que son destinadas a la producción de vino. La localidad de Linares de Perales es rica en viñedos, y varios de sus vecinos venden sus propios vinos (y también otros productos que se obtiene de la uva) en la fiesta de la vendimia que se hace en el pueblo cada año. En el año en que hice este registro (2019) los recolectores aún usaban un sistema de fichas para llevar el conteo de cuántas cajas de uva entregaba cada uno.",
    imageUrl: "/recolector.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 19,
    title: "Recolector de uvas",
    url: "a",
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Esta fotografía captura...",
    imageUrl: "/uvas2.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 19,
    title: "Recolector de uvas",
    url: "a",
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Esta fotografía captura...",
    imageUrl: "/uvas3.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 19,
    title: "Recolector de uvas",
    url: "a",
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Esta fotografía captura...",
    imageUrl: "/uvas4.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 19,
    title: "Recolector de uvas",
    url: "a",
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Esta fotografía captura...",
    imageUrl: "/uvas5.jpg",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  },
  {
    id: 20,
    title: "Don Pedro y la rastra de clavos",
    url: "a",
    main: true,
    description: "Primera luz sobre la cordillera",
    technique: "Fotografía de paisaje",
    date: "2024",
    story: "Con la ayuda de su yegua, Don Pedro (90 años), pasa la rastra de clavos, que es un trabajo que se hace luego de pasar el arado. Esto a la vez, es parte de un proceso de varios pasaos para obtener tierra 'mullida' o bien molida y así la siembra pueda crecer adecuadamente.",
    imageUrl: "/don-pedro.png",
    thumbnailUrl: "/images/thumbnails/1.jpg"
  }
];