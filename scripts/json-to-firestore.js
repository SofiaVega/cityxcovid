const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBiFSva6d7Pgtrs61z6-tMmSFAA52B1Y-4",
    authDomain: "cityxcovid.firebaseapp.com",
    projectId: "cityxcovid"
  });
  
var db = firebase.firestore();

var menu = [
    {
        "id": "Export Summary",
        "nombre": "Export Summary",
        "telefono": "",
        "categoria": [],
        "productos": []
    },
    {
        "id": "Imagen Dental Avanzada",
        "nombre": "Imagen Dental Avanzada",
        "telefono": "55 58 25 03 81",
        "categoria": [
            "prenvención dental",
            "soluciones dentales",
            "estética dental"
        ],
        "productos": [
            {
                "producto": "Ortodoncia y Ortopedia",
                "precio": "",
                "categoria": "prenvención dental",
                "cantidad": ""
            },
            {
                "producto": "Células Madre",
                "precio": "",
                "categoria": "soluciones dentales",
                "cantidad": ""
            },
            {
                "producto": "Endodoncia",
                "precio": "",
                "categoria": "estética dental",
                "cantidad": ""
            },
            {
                "producto": "Implantes",
                "precio": "",
                "categoria": "estética dental",
                "cantidad": ""
            },
            {
                "producto": "Odontología estética",
                "precio": "",
                "categoria": "estética dental",
                "cantidad": ""
            },
            {
                "producto": "Blanqueamiento",
                "precio": "",
                "categoria": "estética dental",
                "cantidad": ""
            },
            {
                "producto": "Cirugía Maxilofacial",
                "precio": "",
                "categoria": "estética dental",
                "cantidad": ""
            },
            {
                "producto": "Mini implantes",
                "precio": "",
                "categoria": "estética dental",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Claudia salón",
        "nombre": "Claudia salón",
        "telefono": "55 27 66 58 77",
        "categoria": [
            "salon de belleza"
        ],
        "productos": [
            {
                "producto": "Cortes de pelo",
                "precio": "",
                "categoria": "salon de belleza",
                "cantidad": ""
            },
            {
                "producto": "Colocación de uñas",
                "precio": "",
                "categoria": "salon de belleza",
                "cantidad": ""
            },
            {
                "producto": "Cuidado personal",
                "precio": "",
                "categoria": "salon de belleza",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Pollo Rebelde",
        "nombre": "Pollo Rebelde",
        "telefono": "56 10 13 09 65",
        "categoria": [
            "pollos rostizados",
            "alitas",
            "botanas",
            ""
        ],
        "productos": [
            {
                "producto": "Pollo Rostizado Chico",
                "precio": "80 MXN",
                "categoria": "pollos rostizados",
                "cantidad": ""
            },
            {
                "producto": "Pollo Rostizado Ranchero",
                "precio": "100 MXN",
                "categoria": "pollos rostizados",
                "cantidad": ""
            },
            {
                "producto": "Pollo Rostizado Sabor",
                "precio": "140 MXN",
                "categoria": "pollos rostizados",
                "cantidad": ""
            },
            {
                "producto": "Alitas de Poollo",
                "precio": "45 MXN",
                "categoria": "alitas",
                "cantidad": ""
            },
            {
                "producto": "Dedos de queso",
                "precio": "45 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Chiles Jalapeños",
                "precio": "45 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Nuggets",
                "precio": "35 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Salchichas",
                "precio": "10 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Pescuezo de Pollo",
                "precio": "10 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Arroz Rojo",
                "precio": "25 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Nopales",
                "precio": "25 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Tacos dorados de pollo",
                "precio": "25 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Papas francesas",
                "precio": "35 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Papas en Gajo",
                "precio": "35 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Rostipapas Chicas",
                "precio": "16 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Rostipapas Medianas",
                "precio": "28 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Rostipapas Grandes",
                "precio": "35 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Bebidas",
                "precio": "18 MXN",
                "categoria": "botanas",
                "cantidad": ""
            },
            {
                "producto": "Agua 600ml",
                "precio": "18 MXN",
                "categoria": "",
                "cantidad": ""
            },
            {
                "producto": "1lt",
                "precio": "22 MXN",
                "categoria": "",
                "cantidad": ""
            },
            {
                "producto": "2 lt",
                "precio": "35 MXN",
                "categoria": "",
                "cantidad": ""
            },
            {
                "producto": "Aguan natural 1lt",
                "precio": "15 MXN",
                "categoria": "",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Tajemania Carmelita",
        "nombre": "Tajemania Carmelita",
        "telefono": "55 29 31 14 58",
        "categoria": [
            "modelos elaborados tejidos"
        ],
        "productos": [
            {
                "producto": "Bufandas",
                "precio": "",
                "categoria": "modelos elaborados tejidos",
                "cantidad": ""
            },
            {
                "producto": "Ponchos",
                "precio": "",
                "categoria": "modelos elaborados tejidos",
                "cantidad": ""
            },
            {
                "producto": "Gorros",
                "precio": "",
                "categoria": "modelos elaborados tejidos",
                "cantidad": ""
            },
            {
                "producto": "Chalinas",
                "precio": "",
                "categoria": "modelos elaborados tejidos",
                "cantidad": ""
            },
            {
                "producto": "Abrigos",
                "precio": "",
                "categoria": "modelos elaborados tejidos",
                "cantidad": ""
            },
            {
                "producto": "Blusas",
                "precio": "",
                "categoria": "modelos elaborados tejidos",
                "cantidad": ""
            },
            {
                "producto": "Sudaderas",
                "precio": "",
                "categoria": "modelos elaborados tejidos",
                "cantidad": ""
            },
            {
                "producto": "Mochilas",
                "precio": "",
                "categoria": "modelos elaborados tejidos",
                "cantidad": ""
            },
            {
                "producto": "Bolsas",
                "precio": "",
                "categoria": "modelos elaborados tejidos",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Foro TI",
        "nombre": "Foro TI",
        "telefono": "55 53 20 44 09",
        "categoria": [
            "servicios de staffing",
            "servicios de hunting",
            "tecnologías de la información"
        ],
        "productos": [
            {
                "producto": "Nómina",
                "precio": "",
                "categoria": "servicios de staffing",
                "cantidad": ""
            },
            {
                "producto": "Service Desk",
                "precio": "",
                "categoria": "servicios de hunting",
                "cantidad": ""
            },
            {
                "producto": "Educación y capacitación tecnológica",
                "precio": "",
                "categoria": "tecnologías de la información",
                "cantidad": ""
            },
            {
                "producto": "Oracle",
                "precio": "",
                "categoria": "tecnologías de la información",
                "cantidad": ""
            },
            {
                "producto": "Nube",
                "precio": "",
                "categoria": "tecnologías de la información",
                "cantidad": ""
            },
            {
                "producto": "Realidad Aumentada",
                "precio": "",
                "categoria": "tecnologías de la información",
                "cantidad": ""
            },
            {
                "producto": "Analytics",
                "precio": "",
                "categoria": "tecnologías de la información",
                "cantidad": ""
            },
            {
                "producto": "Proyectos a la medida",
                "precio": "",
                "categoria": "tecnologías de la información",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Optica Clarity",
        "nombre": "Optica Clarity",
        "telefono": "56 20 22 00 87",
        "categoria": [
            "productos de óptica"
        ],
        "productos": [
            {
                "producto": "Lentes de contacto",
                "precio": "",
                "categoria": "productos de óptica",
                "cantidad": ""
            },
            {
                "producto": "Armazones para lentes",
                "precio": "",
                "categoria": "productos de óptica",
                "cantidad": ""
            },
            {
                "producto": "Lentes solares",
                "precio": "",
                "categoria": "productos de óptica",
                "cantidad": ""
            },
            {
                "producto": "Liquido para lentes de contacto",
                "precio": "",
                "categoria": "productos de óptica",
                "cantidad": ""
            },
            {
                "producto": "Micas de lentes",
                "precio": "",
                "categoria": "productos de óptica",
                "cantidad": ""
            },
            {
                "producto": "Estuches para lentes",
                "precio": "",
                "categoria": "productos de óptica",
                "cantidad": ""
            },
            {
                "producto": "Accesorios varios",
                "precio": "",
                "categoria": "productos de óptica",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Tacos de Guisado Moto",
        "nombre": "Tacos de Guisado Moto",
        "telefono": "55 20 36 66 21",
        "categoria": [
            "tacos"
        ],
        "productos": [
            {
                "producto": "Milanesa",
                "precio": "20 MXN",
                "categoria": "tacos",
                "cantidad": ""
            },
            {
                "producto": "Costilla",
                "precio": "20 MXN",
                "categoria": "tacos",
                "cantidad": ""
            },
            {
                "producto": "Machaca",
                "precio": "20 MXN",
                "categoria": "tacos",
                "cantidad": ""
            },
            {
                "producto": "Costilla de Puerco",
                "precio": "20 MXN",
                "categoria": "tacos",
                "cantidad": ""
            },
            {
                "producto": "Rajas",
                "precio": "20 MXN",
                "categoria": "tacos",
                "cantidad": ""
            },
            {
                "producto": "Frijoles",
                "precio": "20 MXN",
                "categoria": "tacos",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "NIKKEN",
        "nombre": "NIKKEN",
        "telefono": "55 46 18 81 38",
        "categoria": [
            "filtros de agua para tratamientos de agua",
            "servicios de tratamientos de aguas",
            "tratamientos de agua",
            "filtros tratamientos"
        ],
        "productos": [
            {
                "producto": "Filtros de agua para tratamientos de agua",
                "precio": "",
                "categoria": "filtros de agua para tratamientos de agua",
                "cantidad": ""
            },
            {
                "producto": "Servicios de tratamientos de aguas",
                "precio": "",
                "categoria": "servicios de tratamientos de aguas",
                "cantidad": ""
            },
            {
                "producto": "Tratamientos de agua",
                "precio": "",
                "categoria": "tratamientos de agua",
                "cantidad": ""
            },
            {
                "producto": "Filtros tratamientos",
                "precio": "",
                "categoria": "filtros tratamientos",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "UK Company",
        "nombre": "UK Company",
        "telefono": "55 27 51 63 05",
        "categoria": [
            "idiomas ",
            "capacitación empresarial"
        ],
        "productos": [
            {
                "producto": "Inglés",
                "precio": "",
                "categoria": "idiomas ",
                "cantidad": ""
            },
            {
                "producto": "Inglés (Negocios)",
                "precio": "",
                "categoria": "idiomas ",
                "cantidad": ""
            },
            {
                "producto": "Francés",
                "precio": "",
                "categoria": "idiomas ",
                "cantidad": ""
            },
            {
                "producto": "Alemán",
                "precio": "",
                "categoria": "idiomas ",
                "cantidad": ""
            },
            {
                "producto": "Mandarín",
                "precio": "",
                "categoria": "idiomas ",
                "cantidad": ""
            },
            {
                "producto": "Japonés",
                "precio": "",
                "categoria": "idiomas ",
                "cantidad": ""
            },
            {
                "producto": "Italiano",
                "precio": "",
                "categoria": "idiomas ",
                "cantidad": ""
            },
            {
                "producto": "Potugués",
                "precio": "",
                "categoria": "idiomas ",
                "cantidad": ""
            },
            {
                "producto": "Ruso",
                "precio": "",
                "categoria": "idiomas ",
                "cantidad": ""
            },
            {
                "producto": "Español (Extranjero)",
                "precio": "",
                "categoria": "idiomas ",
                "cantidad": ""
            },
            {
                "producto": "Word ",
                "precio": "",
                "categoria": "capacitación empresarial",
                "cantidad": ""
            },
            {
                "producto": "Excel",
                "precio": "",
                "categoria": "capacitación empresarial",
                "cantidad": ""
            },
            {
                "producto": "Trabajo en equipo",
                "precio": "",
                "categoria": "capacitación empresarial",
                "cantidad": ""
            },
            {
                "producto": "Modelos de Negocios",
                "precio": "",
                "categoria": "capacitación empresarial",
                "cantidad": ""
            },
            {
                "producto": "Servicio al cliente",
                "precio": "",
                "categoria": "capacitación empresarial",
                "cantidad": ""
            },
            {
                "producto": "Project Management",
                "precio": "",
                "categoria": "capacitación empresarial",
                "cantidad": ""
            },
            {
                "producto": "Liderazgo",
                "precio": "",
                "categoria": "capacitación empresarial",
                "cantidad": ""
            },
            {
                "producto": "Misión y Visión",
                "precio": "",
                "categoria": "capacitación empresarial",
                "cantidad": ""
            },
            {
                "producto": "Motivación",
                "precio": "",
                "categoria": "capacitación empresarial",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Banquetes y Alquiler Osmar",
        "nombre": "Banquetes y Alquiler Osmar",
        "telefono": "55 43 23 91 09",
        "categoria": [
            "eventos sociales",
            "eventos",
            "banquetes",
            "salones de fiestas"
        ],
        "productos": [
            {
                "producto": "Preparación de Banquetes",
                "precio": "",
                "categoria": "eventos sociales",
                "cantidad": ""
            },
            {
                "producto": "Candy Bars",
                "precio": "",
                "categoria": "eventos",
                "cantidad": ""
            },
            {
                "producto": "Coffee Breaks",
                "precio": "",
                "categoria": "banquetes",
                "cantidad": ""
            },
            {
                "producto": "Renta de Mobiliario",
                "precio": "",
                "categoria": "salones de fiestas",
                "cantidad": ""
            },
            {
                "producto": "Renta de Inflables",
                "precio": "",
                "categoria": "salones de fiestas",
                "cantidad": ""
            },
            {
                "producto": "Renta de Juegos",
                "precio": "",
                "categoria": "salones de fiestas",
                "cantidad": ""
            },
            {
                "producto": "Decoraciones",
                "precio": "",
                "categoria": "salones de fiestas",
                "cantidad": ""
            },
            {
                "producto": "Renta de salones de eventos",
                "precio": "",
                "categoria": "salones de fiestas",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Sastrería Maggie",
        "nombre": "Sastrería Maggie",
        "telefono": "55 39 59 33 16",
        "categoria": [
            "trabajos de sastrería "
        ],
        "productos": [
            {
                "producto": "Trabajos de sastrería ",
                "precio": "",
                "categoria": "trabajos de sastrería ",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "La glorieta del buen tamal",
        "nombre": "La glorieta del buen tamal",
        "telefono": "55 11 82 96 46",
        "categoria": [
            "tamales gourmet",
            "tamales salados",
            "tamales dulces",
            "atoles "
        ],
        "productos": [
            {
                "producto": "Verde con pollo",
                "precio": "",
                "categoria": "tamales gourmet",
                "cantidad": ""
            },
            {
                "producto": "Verde con queso",
                "precio": "",
                "categoria": "tamales salados",
                "cantidad": ""
            },
            {
                "producto": "Verde con verdolagas y pollo",
                "precio": "",
                "categoria": "tamales salados",
                "cantidad": ""
            },
            {
                "producto": "Verde con cerdo",
                "precio": "",
                "categoria": "tamales salados",
                "cantidad": ""
            },
            {
                "producto": "Rajas con queso",
                "precio": "",
                "categoria": "tamales salados",
                "cantidad": ""
            },
            {
                "producto": "Mole con pollo",
                "precio": "",
                "categoria": "tamales salados",
                "cantidad": ""
            },
            {
                "producto": "Choriqueso",
                "precio": "",
                "categoria": "tamales salados",
                "cantidad": ""
            },
            {
                "producto": "Piña ",
                "precio": "",
                "categoria": "tamales dulces",
                "cantidad": ""
            },
            {
                "producto": "Fresa con pasas",
                "precio": "",
                "categoria": "tamales dulces",
                "cantidad": ""
            },
            {
                "producto": "Arándano",
                "precio": "",
                "categoria": "tamales dulces",
                "cantidad": ""
            },
            {
                "producto": "Chocolate",
                "precio": "",
                "categoria": "tamales dulces",
                "cantidad": ""
            },
            {
                "producto": "Cajeta",
                "precio": "",
                "categoria": "tamales dulces",
                "cantidad": ""
            },
            {
                "producto": "Zarzamora con queso filadelfía",
                "precio": "",
                "categoria": "tamales dulces",
                "cantidad": ""
            },
            {
                "producto": "Atole de arroz",
                "precio": "",
                "categoria": "atoles ",
                "cantidad": ""
            },
            {
                "producto": "Atole de chocolate",
                "precio": "",
                "categoria": "atoles ",
                "cantidad": ""
            },
            {
                "producto": "Atole de cajeta",
                "precio": "",
                "categoria": "atoles ",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Sol_ Flores &. Algo más",
        "nombre": "Sol_ Flores &. Algo más",
        "telefono": "55 64 93 15 44",
        "categoria": [
            "arreglos de flores",
            ""
        ],
        "productos": [
            {
                "producto": "Girasoles",
                "precio": "",
                "categoria": "arreglos de flores",
                "cantidad": ""
            },
            {
                "producto": "Envio de flores a domicilio",
                "precio": "",
                "categoria": "",
                "cantidad": ""
            },
            {
                "producto": "Osos de peluches",
                "precio": "",
                "categoria": "",
                "cantidad": ""
            },
            {
                "producto": "Chocolates",
                "precio": "",
                "categoria": "",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "FollowprintMx",
        "nombre": "FollowprintMx",
        "telefono": "55 51 07 90 80",
        "categoria": [
            "servicios de impresión"
        ],
        "productos": [
            {
                "producto": "Bond",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Couché",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Fotográfico",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Laminados",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Kromacote",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Sulfatada",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Trisolvente",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Vinil",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Lona Font",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Lona Backlite",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Telas",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Floor Graphic",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Electrostático",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Acrílico",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Cartón",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Coroplast",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Estireno",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Foambord",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "MDF",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "PVC",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            },
            {
                "producto": "Sintra",
                "precio": "",
                "categoria": "servicios de impresión",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Quality Aministración",
        "nombre": "Quality Aministración",
        "telefono": "55 54 15 44 70",
        "categoria": [
            "consultoría en administración"
        ],
        "productos": [
            {
                "producto": "Consultoría en Administración",
                "precio": "",
                "categoria": "consultoría en administración",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Alianza Médica",
        "nombre": "Alianza Médica",
        "telefono": "55 31 49 91 08",
        "categoria": [
            "colegio de medicos cirujanos",
            "certifiaciones"
        ],
        "productos": [
            {
                "producto": "Psiquiatría",
                "precio": "",
                "categoria": "colegio de medicos cirujanos",
                "cantidad": ""
            },
            {
                "producto": "Ginecología",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Fundamentos ORL",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Urología",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Dermatología",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Enfermedades Exantematicas",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Diagnostico y manejo de arritmias en adultos ",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Nefrología Clínica",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Cardiología pediátrica",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Urgencias Médicas 1 y 2",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Oftalmología",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Medicina Interna",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Endocrinología",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Electroterapia",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Neumoradiología",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            },
            {
                "producto": "Electrocardiografía clinica",
                "precio": "",
                "categoria": "certifiaciones",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Lancería Caricia",
        "nombre": "Lancería Caricia",
        "telefono": "55 40 66 14 95",
        "categoria": [
            "venta de lencería ",
            "lenceria"
        ],
        "productos": [
            {
                "producto": "String ",
                "precio": "",
                "categoria": "venta de lencería ",
                "cantidad": ""
            },
            {
                "producto": "Brazilian",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "T string",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Slip",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Bikini",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Sport",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Bodyshort",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Tanga",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Retro",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Pants",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Brallete",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Demi",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Balconette",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Bandeau",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "T shirt",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Convertible",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Push up",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Plunge",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Full Cup",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Strapless",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Minimizer",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            },
            {
                "producto": "Sport bra",
                "precio": "",
                "categoria": "lenceria",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Maquillajes, Cosméticos, Bisute",
        "nombre": "Maquillajes, Cosméticos, Bisute",
        "telefono": "55 54 92 27 51",
        "categoria": [
            "productos de belleza",
            "cosméticos"
        ],
        "productos": [
            {
                "producto": "Brocha mary Kay",
                "precio": "",
                "categoria": "productos de belleza",
                "cantidad": ""
            },
            {
                "producto": "Brocha para maquillaje suelto",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Polvo suelto regular",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Brocha compacta para polvo",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Brocha compacta para rubor",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Aplicadores de ojos",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Brocha para maquillaje liquido",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Mini estuche cosméticos",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Maquillaje en polvo traslucido mineral",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Maquillaje liquido ",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Maquillaje polvo cremoso",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Maquillaje liquido covertura",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Collection de cuidado cuerpo ",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Loción Hidratante",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Loción reafirmante corporal",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Loción humectante pies y piernas",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Colonias Mary Kay",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Crema reafirmante contorno",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Crema revitalizadora",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Crema intensiva",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Crema refrescante",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Crema reductores",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            },
            {
                "producto": "Crema facial regeneradora",
                "precio": "",
                "categoria": "cosméticos",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Refacciones Diesel Guerrero",
        "nombre": "Refacciones Diesel Guerrero",
        "telefono": "55 49 67 20 17",
        "categoria": [
            "refacciones automotrices",
            "aceites para motor"
        ],
        "productos": [
            {
                "producto": "Generales",
                "precio": "",
                "categoria": "refacciones automotrices",
                "cantidad": ""
            },
            {
                "producto": "Quaker State, Bardahal",
                "precio": "",
                "categoria": "aceites para motor",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Muebles Sustentables de palets ",
        "nombre": "Muebles Sustentables de palets ",
        "telefono": "56 14 16 46 42",
        "categoria": [
            "diseño en palets loera",
            ""
        ],
        "productos": [
            {
                "producto": "Muebles de palets",
                "precio": "",
                "categoria": "diseño en palets loera",
                "cantidad": ""
            },
            {
                "producto": "Carpinteria de cocina",
                "precio": "",
                "categoria": "",
                "cantidad": ""
            },
            {
                "producto": "Puertas de recámaras",
                "precio": "",
                "categoria": "",
                "cantidad": ""
            },
            {
                "producto": "Muebles sobre diseño",
                "precio": "",
                "categoria": "",
                "cantidad": ""
            },
            {
                "producto": "Carpintería general",
                "precio": "",
                "categoria": "",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Sastrería Bochasa",
        "nombre": "Sastrería Bochasa",
        "telefono": "55 23 13 75 64",
        "categoria": [
            "servicios de sastrería general"
        ],
        "productos": [
            {
                "producto": "Servicios de Sastrería General",
                "precio": "",
                "categoria": "servicios de sastrería general",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "La esquina del buen sazón",
        "nombre": "La esquina del buen sazón",
        "telefono": "70 90 32 42",
        "categoria": [
            "cocina mexicana"
        ],
        "productos": [
            {
                "producto": "Huevos al gusto",
                "precio": "87 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Cuernito. ",
                "precio": "87 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Sincronizada",
                "precio": "56 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Hamburguesa",
                "precio": "56 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Molletes",
                "precio": "56 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Bistec ",
                "precio": "100 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Panela ",
                "precio": "93 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Club sandwich",
                "precio": "100 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Chilaquiles",
                "precio": "106 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Enfrijoladas",
                "precio": "93 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Enchiladas verdes",
                "precio": "106 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Quesadillas al gusto",
                "precio": "25 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Huraches",
                "precio": "50 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Pozole ",
                "precio": "87 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Panuchos",
                "precio": "45 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            },
            {
                "producto": "Enmoladas",
                "precio": "75 MXN",
                "categoria": "cocina mexicana",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Cocina las cazuelas",
        "nombre": "Cocina las cazuelas",
        "telefono": "58 22 44 40",
        "categoria": [
            "platillos y guisados"
        ],
        "productos": [
            {
                "producto": "Cazuela de Rajas",
                "precio": "",
                "categoria": "platillos y guisados",
                "cantidad": ""
            },
            {
                "producto": "Cazuela de tinga",
                "precio": "",
                "categoria": "platillos y guisados",
                "cantidad": ""
            },
            {
                "producto": "Cazuela de Arroz",
                "precio": "",
                "categoria": "platillos y guisados",
                "cantidad": ""
            },
            {
                "producto": "Cazuela de Mole con pollo",
                "precio": "",
                "categoria": "platillos y guisados",
                "cantidad": ""
            },
            {
                "producto": "Cazuela de frijoles refritos",
                "precio": "",
                "categoria": "platillos y guisados",
                "cantidad": ""
            },
            {
                "producto": "Cazuela de asado de boda",
                "precio": "",
                "categoria": "platillos y guisados",
                "cantidad": ""
            },
            {
                "producto": "Cazuela de Chicharron ",
                "precio": "",
                "categoria": "platillos y guisados",
                "cantidad": ""
            },
            {
                "producto": "Cazuela de Huevo Rojo/Verde",
                "precio": "",
                "categoria": "platillos y guisados",
                "cantidad": ""
            },
            {
                "producto": "Cazuela de adobada",
                "precio": "",
                "categoria": "platillos y guisados",
                "cantidad": ""
            },
            {
                "producto": "Cazuela de desherbada",
                "precio": "",
                "categoria": "platillos y guisados",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Deliciosos tamales huastecos ",
        "nombre": "Deliciosos tamales huastecos ",
        "telefono": "77 21 25 24 65",
        "categoria": [
            "tamales"
        ],
        "productos": [
            {
                "producto": "Pollo verde",
                "precio": "",
                "categoria": "tamales",
                "cantidad": ""
            },
            {
                "producto": "Rajas con queso tradicional",
                "precio": "",
                "categoria": "tamales",
                "cantidad": ""
            },
            {
                "producto": "Picadillo",
                "precio": "",
                "categoria": "tamales",
                "cantidad": ""
            },
            {
                "producto": "Queso",
                "precio": "",
                "categoria": "tamales",
                "cantidad": ""
            },
            {
                "producto": "Frijoles con queso",
                "precio": "",
                "categoria": "tamales",
                "cantidad": ""
            },
            {
                "producto": "Deshebrada",
                "precio": "",
                "categoria": "tamales",
                "cantidad": ""
            },
            {
                "producto": "Cerdo ",
                "precio": "",
                "categoria": "tamales",
                "cantidad": ""
            },
            {
                "producto": "Mole con pollo",
                "precio": "",
                "categoria": "tamales",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "Cochinita pibil Sol",
        "nombre": "Cochinita pibil Sol",
        "telefono": "55 68 89 25 90",
        "categoria": [
            "comida mexicana"
        ],
        "productos": [
            {
                "producto": "Kg de Cochinita Pibil",
                "precio": "250 MXN",
                "categoria": "comida mexicana",
                "cantidad": ""
            },
            {
                "producto": "Cebollas con habanero",
                "precio": "",
                "categoria": "comida mexicana",
                "cantidad": ""
            },
            {
                "producto": "Salsa de habanero",
                "precio": "",
                "categoria": "comida mexicana",
                "cantidad": ""
            }
        ]
    },
    {
        "id": "La more",
        "nombre": "La more",
        "telefono": "55 85 13 11 04",
        "categoria": [
            "comida mexicana"
        ],
        "productos": [
            {
                "producto": "Quesadillas",
                "precio": "",
                "categoria": "comida mexicana",
                "cantidad": ""
            },
            {
                "producto": "Gorditas",
                "precio": "",
                "categoria": "comida mexicana",
                "cantidad": ""
            },
            {
                "producto": "Pambas",
                "precio": "",
                "categoria": "comida mexicana",
                "cantidad": ""
            }
        ]
    }
]
/*var menu = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': '/jsons/auxjsonGabriel.json',
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); */
/*var my_json;
$.getJSON('/jsons/auxjsonGabriel.json', function(json) {
  my_json = json;
});*/
menu.forEach(function(obj) {
    db.collection("tiendas").add({
        id: obj.id,
        nombre: obj.nombre,
        categoria: obj.categoria,
        telefono: obj.telefono,
        productos: obj.productos
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});