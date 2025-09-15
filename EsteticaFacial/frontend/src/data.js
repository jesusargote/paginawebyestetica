// src/data.js
export const servicesData = {
  services: [
    {
      id: 1,
      title: "Masaje Sueco",
      description: "Favorece la circulación sanguínea y linfática, elimina toxinas, relaja cuerpo y mente y alivia dolores musculares.",
      ritual: "Consiste en una serie de técnicas que se realizan sobre los músculos y las articulaciones del cuerpo con el objetivo de relajar los músculos, mejorar la circulación sanguínea y linfática, aliviar el dolor y el estrés.",
      time: "2 h",
      price: 50000,
      image: "services/masajesueco.jpg",
      category: "masajes"
    },
    {
      id: 2,
      title: "Masaje Holístico",
      description: "Actúa sobre todo el cuerpo para restablecer el equilibrio natural, conectando cuerpo, mente, alma y espíritu.",
      ritual: "Conecta todos los aspectos que componen al ser humano buscando alcanzar un equilibrio natural en zonas estratégicas donde se concentra la tensión.",
      time: "2 h",
      price: 60000,
      image: "services/masajeholistico.jpg",
      category: "masajes"
    },
    {
      id: 3,
      title: "Terapia Geotermal",
      description: "Mediante presiones y estimulaciones térmicas beneficia a tus chakras, mejora circulación, elimina toxinas.",
      ritual: "Combina masaje terapéutico con piedras calientes ubicadas en puntos energéticos para que la energía fluya adecuadamente.",
      time: "2 h",
      price: 60000,
      image: "services/terapiageotermal.jpg",
      category: "terapias"
    },
    {
      id: 4,
      title: "Bambúterapia",
      description: "Masaje con cañas de bambú que favorece el drenaje linfático, la circulación y el equilibrio energético.",
      ritual: "Tratamiento estético alternativo que utiliza cañas de bambú de diferentes tamaños para proporcionar beneficios estéticos y terapéuticos.",
      time: "2 h",
      price: 60000,
      image: "services/bambuterapia.jpg",
      category: "terapias"
    },
    {
      id: 5,
      title: "Terapia con Pindas Calientes",
      description: "Aporta relajación corporal, flexibilidad muscular, elimina toxinas y mantiene la piel elástica y tonificada.",
      ritual: "Utiliza pindas calientes para acomodar, presionar y masajear suavemente el cuerpo con calor en movimientos circulares.",
      time: "2 h",
      price: 60000,
      image: "services/pindascalientes.jpg",
      category: "terapias"
    },
    {
      id: 6,
      title: "Malaxación Colónica",
      description: "Activación del colon que estimula movimientos peristálticos, ayudando a descongestionar el sistema digestivo.",
      ritual: "Masajes en sentido a las manecillas del reloj para mejorar el tránsito intestinal y activar el sistema circulatorio.",
      time: "30 min",
      price: 30000,
      image: "services/malaxacióncolónica.jpg",
      category: "terapias"
    },
    {
      id: 7,
      title: "Reflexología Podal, Facial y Manos",
      description: "Reduce el estrés, mejora circulación, alivia dolor, equilibra sistema nervioso y promueve la autocuración.",
      ritual: "Técnica terapéutica de estimulación de puntos estratégicos conocidos como zonas reflejas correlacionadas con órganos.",
      time: "20 min",
      price: 30000,
      image: "services/reflexologiapodal.jpg",
      category: "terapias"
    },
    {
      id: 8,
      title: "Baño de Luna",
      description: "Hidratación corporal profunda y exfoliante que devuelve a la piel un estado saludable con suavidad.",
      ritual: "Masaje relajante y tonificante que activa la circulación y prepara la piel para hidratación profunda.",
      time: "2 h",
      price: 120000,
      image: "services/bañoluna.jpg",
      category: "tratamientos-especiales"
    },
    {
      id: 10,
      title: "Embellecimiento Corporal y Envolturas",
      description: "Libera exceso de líquidos, mejora circulación, reduce celulitis y estimula sistema linfático.",
      ritual: "Aplicación de productos específicos como bases minerales, chocolaterapia, fruta o lodo con envolvimiento.",
      time: "2 h",
      price: 60000,
      image: "services/embellecimientocorporalenvolturas.jpg",
      category: "tratamientos-especiales"
    }
  ],
  
  packages: [
    {
      id: 1,
      title: "Spa para Parejas",
      description: "Disfruta de una experiencia romántica y relajante con tu pareja con nuestros tratamientos especiales.",
      features: [
        "Masaje en pareja de 90 minutos",
        "Baño de aromaterapia compartido",
        "Botella de vino espumoso",
        "Chocolates artesanales",
        "Ambiente privado con música relajante"
      ],
      price: 180000,
      image: "https://images.unsplash.com/photo-1544164352-4c8a570d5eb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Baño de Luna",
      description: "Ritual de conexión femenina que honra los ciclos naturales y potencia tu energía vital.",
      features: [
        "Baño terapéutico con flores y esencias",
        "Exfoliación corporal con sales minerales",
        "Masaje energético con cuarzos",
        "Hidratación con manteca de cocoa",
        "Té de hierbas medicinales"
      ],
      price: 120000,
      image: "https://images.unsplash.com/photo-1544164352-4c8a570d5eb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Ritual Anti-estrés",
      description: "Combate el estrés y la tensión acumulada con nuestra experiencia de relajación profunda.",
      features: [
        "Sauna o baño de vapor",
        "Exfoliación corporal",
        "Masaje descontracturante de 60 min",
        "Mascarilla facial relajante",
        "Té de hierbas antiestrés"
      ],
      price: 140000,
      image: "https://images.unsplash.com/photo-1544164352-4c8a570d5eb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ],

  facialTreatments: [
    {
      id: 1,
      title: "Limpieza Facial Profunda",
      description: "Limpieza profunda para eliminar impurezas y células muertas.",
      category: "Limpieza",
      image: "services/fotoportada1.jpg",
      details: [
        "Incluye exfoliación suave",
        "Extracción de comedones",
        "Mascarilla según tipo de piel",
        "Hidratación y protección solar"
      ],
      price: "$100.000"
    },
    {
      id: 2,
      title: "Acné",
      description: "Soluciones efectivas para controlar el acné, reducir inflamación y prevenir cicatrices.",
      category: "Tratamiento Facial",
      image: "services/acne.jpg",
      details: [
        "Limpieza facial profunda con vapor y ozono",
        "Extracción cuidadosa de comedones y pústulas",
        "Aplicación de alta frecuencia",
        "Mascarilla de arcilla o azufre"
      ],
      price: "$110.000"
    },
    {
      id: 3,
      title: "Rosácea",
      description: "Tratamientos suaves que calman el enrojecimiento y sensibilidad característicos de la rosácea.",
      category: "Tratamiento Facial",
      image: "services/rosacea1.jpg",
      details: [
        "Limpieza facial con productos hipoalergénicos",
        "Aplicación de suero calmante",
        "Mascarilla anti-inflamatoria",
        "Fototerapia con luz LED"
      ],
      price: "$120.000"
    },
    {
      id: 4,
      title: "Melasma",
      description: "Técnicas especializadas para aclarar manchas y uniformizar el tono de la piel.",
      category: "Tratamiento Facial",
      image: "services/melasma.jpg",
      details: [
        "Peeling químico suave",
        "Aplicación de sueros despigmentantes",
        "Mascarilla con vitamina C",
        "Sesión de microdermoabrasión"
      ],
      price: "$150.000"
    },
    // {
    //   id: 5,
    //   title: "Limpiezas faciales profundas",
    //   description: "Eliminación profunda de impurezas y células muertas para una piel radiante.",
    //   category: "Limpieza",
    //   image: "services/limpiesafacialpro.jpg",
    //   details: [
    //     "Exfoliación con punta de diamante",
    //     "Aplicación de vapor para abrir poros",
    //     "Extracción de impurezas (puntos negros y espinillas)",
    //     "Mascarilla purificante y protector solar"
    //   ],
    //   price: "$100.000"
    // },
    {
      id: 6,
      title: "Plasma rico en plaquetas",
      description: "Tratamiento regenerativo que estimula la producción de colágeno y elastina.",
      category: "Tratamiento Avanzado",
      image: "services/plasmaricoenplaquetas.jpg",
      details: [
        "Extracción de una pequeña muestra de sangre",
        "Centrifugado para obtener el plasma concentrado",
        "Aplicación del plasma mediante micro-inyecciones o dermapen",
        "Mascarilla post-tratamiento para calmar la piel"
      ],
      price: "$350.000"
    },
    {
      id: 7,
      title: "Hidratación profunda con dermapen",
      description: "Hidratación intensiva que penetra profundamente en la piel con tecnología dermapen.",
      category: "Tratamiento Avanzado",
      image: "services/hidratacionprofunda.jpg",
      details: [
        "Limpieza y preparación del rostro",
        "Aplicación de ácido hialurónico o sueros nutritivos",
        "Pasos controlados de Dermapen para micro-canales",
        "Mascarilla final y crema selladora"
      ],
      price: "$200.000"
    },
    {
      id: 8,
      title: "Mesoterapia facial",
      description: "Aplicación de vitaminas, minerales y aminoácidos para rejuvenecimiento facial.",
      category: "Tratamiento Avanzado",
      image: "services/mesoterapiafacial.jpg",
      details: [
        "Limpieza de la piel",
        "Cóctel de vitaminas personalizado",
        "Micro-inyecciones superficiales en áreas clave del rostro",
        "Masaje facial para distribuir los activos"
      ],
      price: "$180.000"
    }
  ],

  aparatologia: [
  {
    name: "Hidrolipoclasia",
    video: "/videos/hidrolipoclasia.mp4",
    // poster: "services/fotoportada1.jpg",
    description: "Técnica no invasiva que disuelve y elimina la grasa localizada mediante ultrasonido."
  },
  {
    name: "Yesoterapia",
    video: "/videos/Yesoterapia.mp4",
    // poster: "/services/yesoterapia.jpg",
    description: "Tratamiento con vendas de yeso lipolítico para moldear el cuerpo y reducir medidas."
  },
  {
    name: "Corrientes rusas",
    video: "/videos/Corrientesrusas.mp4",
    // poster: "/videos/corrientes-rusas-poster.jpg",
    description: "Estimulación eléctrica que fortalece y tonifica la musculatura, mejorando la flacidez."
  },
  {
    name: "Cavitación",
    video: "/videos/Cavitacion.mp4",
    // poster: "/videos/cavitacion-poster.jpg",
    description: "Tecnología de ultrasonido de baja frecuencia que rompe las células de grasa."
  },
  {
    name: "Ultrasonido",
    video: "/videos/Ultrasonido.mp4",
    // poster: "/videos/ultrasonido-poster.jpg",
    description: "Ondas sonoras que penetran en la piel para reducir celulitis y grasa localizada."
  },
  {
    name: "Radiofrecuencia",
    video: "/videos/RadioFrecuencia.mp4",
    // poster: "/videos/radiofrecuencia-poster.jpg",
    description: "Energía que calienta las capas profundas de la piel para estimular el colágeno y la elastina."
  },
  {
    name: "Lipolisis láser",
    video: "/videos/lipolisis-laser.mp4",
    poster: "/services/LipolisisLaser.jpg",
    description: "Procedimiento que utiliza energía láser para licuar la grasa antes de ser eliminada."
  },
  {
    name: "Maderoterapia",
    video: "/videos/Maderoterapia.mp4",
    // poster: "/videos/maderoterapia-poster.jpg",
    description: "Técnica de masaje con instrumentos de madera para moldear, tonificar y drenar."
  },
  {
    name: "Vacumterapia",
    // video: "/videos/vacumterapia.mp4",
    poster: "/services/Vacumterapia.jpg",
    description: "Terapia de succión que mejora la circulación, drena líquidos y reduce la celulitis."
  },
  {
    name: "Alta frecuencia",
    video: "/videos/RadioFrecuencia.mp4",
    // poster: "/videos/alta-frecuencia-poster.jpg",
    description: "Corriente eléctrica que tiene efectos antisépticos y antiinflamatorios en la piel."
  },
  {
    name: "Pala ultrasónica",
    video: "/videos/PalaUltrasonica.mp4",
    // poster: "/videos/pala-ultrasonica-poster.jpg",
    description: "Dispositivo que utiliza vibración ultrasónica para una limpieza facial profunda y no abrasiva."
  },
  {
    name: "Electroporador",
    video: "/videos/electroporador.mp4",
    poster: "/services/Electropurador.jpg",
    description: "Técnica que abre los poros temporalmente para permitir la penetración de activos cosméticos."
  },
  {
    name: "Vapor ozono",
    video: "/videos/Vaporozono.mp4",
    // poster: "/videos/vapor-ozono-poster.jpg",
    description: "Vapor que abre los poros de la piel para facilitar la limpieza y desintoxicación."
  },
  {
    name: "Neatcell, terapia con láser",
    video: "/videos/TerapiaLaser.mp4",
    // poster: "/videos/neatcell-poster.jpg",
    description: "Láser de picosegundos para eliminar manchas, tatuajes y rejuvenecer la piel."
  },
  {
    name: "Dermapen",
    video: "/videos/Dermapen.mp4",
    // poster: "/videos/dermapen-poster.jpg",
    description: "Microagujas que crean microcanales para estimular la producción de colágeno y la absorción de productos."
  },
  {
    name: "Hifu",
    video: "/videos/Hifu.mp4",
    // poster: "/videos/hifu-poster.jpg",
    description: "Ultrasonido focalizado de alta intensidad para un lifting facial sin cirugía."
  },
  {
    name: "Microdermoabrasión puntas de diamante",
    video: "/videos/Microdermoabrasión.mp4",
    // poster: "/videos/microdermoabrasion-poster.jpg",
    description: "Exfoliación mecánica que elimina las células muertas y mejora la textura de la piel."
  },
  {
    name: "Esferas con hielo",
    video: "/videos/EsferasConHielo.mp4",
    // poster: "/videos/esferas-hielo-poster.jpg",
    description: "Terapia de frío para reducir la inflamación, cerrar poros y calmar la piel."
  },
  {
    name: "Máscara led",
    video: "/videos/mascara-led.mp4",
    poster: "/services/MascaraLed.jpg",
    description: "Terapia de luz que trata diferentes problemas de la piel como el acné y el envejecimiento."
  }
],

  products: [
    {
      id: 1,
      title: "Sérum Vitamina C",
      price: 85000,
      description: "Potente antioxidante que ilumina y protege la piel del daño ambiental.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Crema Hidratante",
      price: 75000,
      description: "Hidratación profunda con ácido hialurónico para una piel suave y flexible.",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Limpiador Facial",
      price: 65000,
      description: "Limpiador suave que elimina impurezas sin dañar la barrera natural de la piel.",
      image: "https://images.unsplash.com/photo-1571781926291-9d9f321a40f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "Protector Solar",
      price: 70000,
      description: "Protección de amplio espectro con textura ligera que no obstruye los poros.",
      image: "https://images.unsplash.com/photo-1591378603223-e15c84635e7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Peeling cosmiátrico",
      price: 90000,
      description: "Fórmula magistral para exfoliación profunda y renovación celular.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Mascarilla Hidroplástica",
      price: 80000,
      description: "Mascarilla rejuvenecedora con efecto lifting inmediato.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ],

  includedServices: [
    "Masaje completo",
    "Musicoterapia",
    "Aromaterapia",
    "Reflexología o malaxación colónica",
    "Copa de vino, fruta o té",
    "Hidroterapia y Jacuzzi"
  ]
};

export default servicesData;