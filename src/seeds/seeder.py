from datetime import datetime
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


# Credentials
cred = credentials.Certificate('./src/seeds/co-creaciones-firebase-adminsdk-omwgs-ea7fa02679.json')
firebase_admin.initialize_app(cred, options={
        'databaseURL': 'https://co-creaciones.firebaseio.com/'
    })

db = firestore.client()


# Users

data_collection = [{'id': 1,
                    'email': 'uno@uc.cl', 'password': '123456'},
                   {'id': 2,
                    'email': 'dos@uc.cl', 'password': '654321'},
                   {'id': 3,
                    'email': 'manager@uc.cl',
                    'password': 'qwerty'},
                    {'id': 4,
                     'email': 'manager2@uc.cl',
                     'password': 'asdfg'},
                    {'id': 5,
                     'email': 'pedro@uc.cl',
                     'password': 'asdfg'},
                    {'id': 6,
                     'email': 'juana@uc.cl',
                     'password': 'asdfg'},
                    {'id': 7,
                     'email': 'sandro@uc.cl',
                     'password': 'asdfg'},
                    {'id': 8,
                     'email': 'americo@uc.cl',
                     'password': 'asdfg'},
                    {'id': 9,
                     'email': 'mercedes@uc.cl',
                     'password': 'asdfg'},
                    {'id': 10,
                     'email': 'yerko@uc.cl',
                     'password': 'asdfg'},
                    {'id': 11,
                     'email': 'michelle@uc.cl',
                     'password': 'asdfg'}]

for data in data_collection:
    db.collection(u'users').document(f"{data['email']}").set(data)


# People

data_collection = [{'id': 1, 'user_id': 1, 'name': 'Rodrigo González',
                    'degree': 'Estudiante de 4to año de Sociología', 'age': 24,
                    'profile_pic': '',
                    'CV': ['Voluntario un año en Hogar de Cristo',
                           'Ayudante de 4 ramos',
                           'Seleccionado de hándbol UC']},
                   {'id': 2, 'user_id': 2, 'name': 'Ximena Pérez',
                    'degree': 'Estudiante de 2do año de Ingeniería Civil',
                    'age': 19, 'profile_pic': '',
                    'CV': ['Práctica obrera en Sodimac']},
                   {'id': 3, 'user_id': 5, 'name': 'Sandro Bolívar',
                    'degree': 'Estudiante de 1er año de Agronomía',
                    'age': 18, 'profile_pic': '',
                    'CV': []},
                   {'id': 4, 'user_id': 6, 'name': 'Juanita Loyola',
                    'degree': 'Estudiante de 2do año de Enfermería',
                    'age': 19, 'profile_pic': '',
                    'CV': ['Voluntariado Cruz Roja',
                           'Presidenta Centro de Alumnos Escuela 132 de San Andrés']},
                   {'id': 5, 'user_id': 7, 'name': 'Matías Villalobos',
                    'degree': 'Estudiante de 6to año de Medicina',
                    'age': 25, 'profile_pic': '',
                    'CV': ['Voluntariado en Consultorio en Chiloé',
                           'Curso de especialización en anestesia subcutánea en Barcelona']},
                   {'id': 6, 'user_id': 8, 'name': 'Andrea Rubilar',
                    'degree': 'Estudiante de 3er año de Derecho',
                    'age': 24, 'profile_pic': '',
                    'CV': ['Trabajo part time en estudio Martínez y Cía.',
                           'Fundadora y CEO de Interlink Solutions']},
                   {'id': 7, 'user_id': 9, 'name': 'Joao Contreras',
                    'degree': 'Estudiante de 2do año de Antropología',
                    'age': 19, 'profile_pic': '',
                    'CV': ['Ayudante del curso Introducción a la Arqueología']},
                   {'id': 8, 'user_id': 10, 'name': 'Pamela Sanjuan',
                    'degree': 'Estudiante de 2do año de Doctorado en Lenguas Romances',
                    'age': 27, 'profile_pic': '',
                    'CV': ['Profesora instructora del curso Mentalidades clásicas en la literatura',
                           'Ayudante de 7 cursos de Licenciatura',
                           'Becada por Fondart y Fondecyt']},
                   ]

for data in data_collection:
    db.collection(u'people').document(f"{data['name']}").set(data)

# Institutions

data_collection = [{'id': 1,
                    'name': 'Animalia',
                    'description': 'Fundación apasionada por el cuidado de los animales presentes en la Comunidad UC.',
                    'profile_pic': '', 'size': 50},
                   {'id': 2,
                    'name': 'La Resistencia',
                    'description': 'Refugio maker electropunk de la UC.',
                    'profile_pic': '', 'size': 30},
                   {'id': 3,
                    'name': 'Orientadores Docentes Ingeniería',
                    'description': 'Alumnos que guían alumnos en su carrera.',
                    'profile_pic': '', 'size': 10},
                   {'id': 4,
                    'name': 'Profesor Alejandro Briones',
                    'description': 'Profesor Titular Escuela de Gobierno.',
                    'profile_pic': '', 'size': 1},
                   {'id': 5,
                    'name': 'Escuela Popular Aurora Argomedo',
                    'description': 'Escuela para niños y niñas vulnerables.',
                    'profile_pic': '', 'size': 25},
                   {'id': 6,
                    'name': 'Profesora Rosa Oyarce',
                    'description': 'Profesora Adjunta Escuela de Derecho',
                    'profile_pic': '', 'size': 1},
                   {'id': 7,
                    'name': 'MAPAU',
                    'description': 'Buscamos apoyar a las Madres y los Padres universitarios de la comunidad UC, para que puedan desarrollarse y cumplir con los desafíos de sus estudios.',
                    'profile_pic': '', 'size': 25},
                   {'id': 8,
                    'name': 'Preuniversitario UC',
                    'description': 'Preuniversitario para jóvenes que no pueden pagar uno. Powered by estudiantes de toda la UC.',
                    'profile_pic': '', 'size': 19},
                   {'id': 9,
                    'name': 'La Obra',
                    'description': 'Trabajos de invierno de la Escuela de Economía y Administración.',
                    'profile_pic': '', 'size': 25},
                   {'id': 10,
                    'name': 'SIDING',
                    'description': 'Fundación que busca rneovar el SIDING para que sea menos amarillo.',
                    'profile_pic': '', 'size': 98}]

for data in data_collection:
    db.collection(u'institutions').document(f"{data['name']}").set(data)


# Validations

data_collection = [{'institution_id': 1,
                    'person_id': 1,
                    'description': 'Trabajó con nosotros un año, fue siempre amable y puntual. Experto en Excel.',
                    'rate': 5
                    },
                   {'institution_id': 2,
                    'person_id': 2,
                    'description': 'Bueno para los chistes y para trabajar con gente diversa.',
                    'rate': 3},
                   {'institution_id': 7,
                    'person_id': 8,
                    'description': 'Nunca entendimos su sentido del humor. Ni su impuntualidad.',
                    'rate': 1},
                   {'institution_id': 10,
                    'person_id': 4,
                    'description': 'Llegaba puntual. No tenía mucho tiempo para aportar al proyecto asignado, y eventualmente tuvo que dejar sus obligaciones.',
                    'rate': 2},
                   {'institution_id': 6,
                    'person_id': 6,
                    'description': 'Cumplió con lo que pedimos, pero sufrió bastantes atrasos y la relación con las partes involucradas fue tensa.',
                    'rate': 3},
                   {'institution_id': 3,
                    'person_id': 5,
                    'description': 'Muy buen trabajador y entusiasta. No le pudo dedicar todo el tiempo que habría sido ideal, pero es un individuo muy capaz.',
                    'rate': 4},
                   {'institution_id': 5,
                    'person_id': 7,
                    'description': 'El trabajador perfecto. Recomendado a ojos cerrados para cualquier tarea que involucre tecnología o lenguas muertas.',
                    'rate': 5},
                   {'institution_id': 1,
                    'person_id': 4,
                    'description': 'Traía galletas, pero nada más.',
                    'rate': 1},
                   {'institution_id': 2,
                    'person_id': 8,
                    'description': 'No logró tener mucho impacto en la organización. Parece saber mucho de Pokemon.',
                    'rate': 2}]

_id = 0
for data in data_collection:
    db.collection(u'validations').document(f"{_id}").set(data)
    _id += 1

# Offers

data_collection = [{'institution_id': 1,
                    'title': 'Voluntario alimentación perros',
                    'description': 'Encargado de comprar y transportar la comida para tres perros, para luego asegurarse de su alimentación durante la semana.',
                    'contact_email': 'pepitoDeAnimalia@uc.cl',
                    'hoursPerWeek': 10,
                    'valid': True,
                    'posted': datetime.now()},
                   {'institutionID': 2,
                    'title': 'Experto en Arduino',
                    'description': 'Encargado de enseñarle las últimas técnicas avanzadas en Arduino a miembros de La Resistencia, además de dictar workshops ocasionales y aconsejar en ciertos proyectos.',
                    'contact_email': 'pepitoDeLaResistencia@uc.cl',
                    'hoursPerWeek': 15,
                    'valid': True,
                    'posted': datetime.now()},
                   {'institutionID': 2,
                    'title': 'Experto en Angular',
                    'description': 'Encargado de enseñarle las últimas técnicas avanzadas en Angular a miembros de La Resistencia, además de dictar workshops ocasionales y aconsejar en ciertos proyectos.',
                    'contactEmail': 'pepitoDeLaResistencia@uc.cl',
                    'hoursPerWeek': 12,
                    'valid': True,
                    'posted': datetime.now()
                    },
                   {'institutionID': 1,
                    'title': 'Contacto con veterinarios',
                    'description': 'Encargado de llevar a los perros al veterinario cuando lo necesiten. Debe tener auto o la manera de contar con transporte privado en cualquier momento.',
                    'contactEmail': 'pepitoDeAnimalia@uc.cl',
                    'hoursPerWeek': 22,
                    'valid': True,
                    'posted': datetime.now()
                    },
                   {'institutionID': 3,
                    'title': 'Analista de Alternativas',
                    'description': 'Analizar, documentar y gestionar las alternativas  que surgen en el pipeline de procesos y procedimientos dentro de la organización. Se busca un perfil proactivo, con manejo intermedio de inglés y avanzado de Excel.',
                    'contactEmail': 'pepito@uc.cl',
                    'hoursPerWeek': 15,
                    'valid': True,
                    'posted': datetime.now()
                    },
                   {'institutionID': 4,
                    'title': 'Desarrollador Front End',
                    'description': 'Diseñar y programar interfaz de página web. Debe contar con conocimientos de Angular y CSS3. Trabajo codo a codo con programador back end.',
                    'contactEmail': 'juanita@uc.cl',
                    'hoursPerWeek': 10,
                    'valid': True,
                    'posted': datetime.now()
                    },
                   {'institutionID': 5,
                    'title': 'Traductor cartas medievales',
                    'description': 'Encargado de traducir cartas del Medioevo desde el inglés antiguo al español. Trabajo en conjunto con filólogo UC.',
                    'contactEmail': 'nostradamus@uc.cl',
                    'hoursPerWeek': 5,
                    'valid': True,
                    'posted': datetime.now()
                    },
                   {'institutionID': 6,
                    'title': 'Vendedor de aspiradoras',
                    'description': 'Encargado de vender, en modalidad puerta a puerta, la nueva aspiradora desarrollada por la organización.',
                    'contactEmail': 'pepitoDeAspiradoras@uc.cl',
                    'hoursPerWeek': 25,
                    'valid': True,
                    'posted': datetime.now()
                    },
                   {'institutionID': 7,
                    'title': 'Contacto con mecánicos aeronáuticos',
                    'description': 'Encargado de gestionar la comunicación entre el equipo de la organización y los mecánicos aeronáuticos que proveen de valor consultivo a la organización. Requiere nivel avanzado de inglés y conocimiento mínimo de motores de propulsión.',
                    'contactEmail': 'pepitoDeAviones@uc.cl',
                    'hoursPerWeek': 18,
                    'valid': True,
                    'posted': datetime.now()
                    },
                   {'institutionID': 8,
                    'title': 'Escritor textos culturales',
                    'description': 'Encargado de llevar la cuenta de Facebook e Instagram de la organización, y complementarla con la escritura de textos culturales que sean de interés para los cercanos a la organización.',
                    'contactEmail': 'pepitoDeOrganizacionCultural@uc.cl',
                    'hoursPerWeek': 20,
                    'valid': True,
                    'posted': datetime.now()
                    },
                   ]

for data in data_collection:
    db.collection(u'offers').document(f"{data['title']}").set(data)

# Manages


data_collection = [{'institution_id': 1,
                    'user_id': 3},
                   {'institution_id': 2,
                    'user_id': 4},
                   {'institution_id': 3,
                    'user_id': 5},
                   {'institution_id': 4,
                    'user_id': 6},
                   {'institution_id': 5,
                    'user_id': 7},
                   {'institution_id': 6,
                    'user_id': 8},
                   {'institution_id': 7,
                    'user_id': 9},
                   ]
_id = 1
for data in data_collection:
    db.collection(u'manages').document(f"{_id}").set(data)
    _id += 1

# Tokens

data_collection = [{'institution_id': 1,
                    'password': 'qwerty',
                    'tokenValue': 'fdsga43m5os',
                    'used': 3,
                    'valid': True,
                    'expires_at': datetime.now()},
                   {'institution_id': 2,
                    'password': 'asdfg',
                    'tokenValue': 'kog87fdj56m',
                    'used': 3,
                    'valid': True,
                    'expires_at': datetime.now()}
                   ]

for data in data_collection:
    db.collection(u'tokens').document(f"{data['tokenValue']}").set(data)
