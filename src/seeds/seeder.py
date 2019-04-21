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
                    'password': 'asdfg'}
                   ]

for data in data_collection:
    db.collection(u'users').document(f"{data['email']}").set(data)


# People

data_collection = [{'userID': 1, 'name': 'Rodrigo González',
                    'degree': 'Estudiante de 4to año de Sociología', 'age': 24,
                    'profilePic': '',
                    'CV': ['Voluntario un año en Hogar de Cristo',
                           'Ayudante de 4 ramos',
                           'Seleccionado de hándbol UC']},
                   {'userID': 2, 'name': 'Ximena Pérez',
                    'degree': 'Estudiante de 2do año de Ingeniería Civil',
                    'age': 19, 'profilePic': '',
                    'CV': ['Práctica obrera en Sodimac']}
                   ]

for data in data_collection:
    db.collection(u'people').document(f"{data['name']}").set(data)

# Institutions

data_collection = [{'id': 1,
                    'name': 'Animalia',
                    'description': 'Fundación apasionada por el cuidado de los animales presentes en la Comunidad UC',
                    'profilePic': '', 'size': 50},
                   {'id': 2,
                    'name': 'La Resistencia',
                    'description': 'Refugio maker electropunk de la UC',
                    'profilePic': '', 'size': 30}]

for data in data_collection:
    db.collection(u'institutions').document(f"{data['name']}").set(data)


# Validations

data_collection = [{'institutionID': 1,
                    'personID': 1,
                    'description': 'Trabajó con nosotros un año, fue siempre amable y puntual. Experto en Excel.',
                    'rate': 5
                    },
                   {'institutionID': 2,
                    'personID': 2,
                    'description': 'Bueno para los chistes y para trabajar con gente diversa.',
                    'rate': 3}]

_id = 0
for data in data_collection:
    db.collection(u'validations').document(f"{_id}").set(data)
    _id += 1

# Offers

data_collection = [{'institutionID': 1,
                    'title': 'Voluntario alimentación perros',
                    'description': 'Encargado de comprar y transportar la comida para tres perros, para luego asegurarse de su alimentación durante la semana.',
                    'contactEmail': 'pepitoDeAnimalia@uc.cl',
                    'hoursPerWeek': 10,
                    'valid': True,
                    'posted': datetime.now()},
                   {'institutionID': 2,
                    'title': 'Experto en Arduino',
                    'description': 'Encargado de enseñarle las últimas técnicas avanzadas en Arduino a miembros de La Resistencia, además de dictar workshops ocasionales y aconsejar en ciertos proyectos.',
                    'contactEmail': 'pepitoDeLaResistencia@uc.cl',
                    'hoursPerWeek': 15,
                    'valid': True,
                    'posted': datetime.now()},
                    {'institutionID': 2,
                    'title': 'Experto en Angular',
                    'description': 'Encargado de enseñarle las últimas técnicas avanzadas en Angular a miembros de La Resistencia, además de dictar workshops ocasionales y aconsejar en ciertos proyectos.',
                    'contactEmail': 'pepitoDeLaResistencia@uc.cl',
                    'hoursPerWeek': 12,
                    'valid': True,
                    'posted': datetime.now()},
                    {'institutionID': 1,
                    'title': 'Contacto con veterinarios',
                    'description': 'Encargado de llevar a los perros al veterinario cuando lo necesiten. Debe tener auto o la manera de contar con transporte privado en cualquier momento.',
                    'contactEmail': 'pepitoDeAnimalia@uc.cl',
                    'hoursPerWeek': 8,
                    'valid': True,
                    'posted': datetime.now()}
                   ]

for data in data_collection:
    db.collection(u'offers').document(f"{data['title']}").set(data)

# Manages


data_collection = [{'institutionID': 1,
                    'userID': 3},
                   {'institutionID': 2,
                    'userID': 4}
                   ]
_id = 1
for data in data_collection:
    db.collection(u'manages').document(f"{_id}").set(data)
    _id += 1

# Tokens

data_collection = [{'institutionID': 1,
                    'password': 'qwerty',
                    'tokenValue': 'fdsga43m5os',
                    'used': 3,
                    'valid': True,
                    'expiresAt': datetime.now()},
                   {'institutionID': 2,
                    'password': 'asdfg',
                    'tokenValue': 'kog87fdj56m',
                    'used': 3,
                    'valid': True,
                    'expiresAt': datetime.now()}
                   ]

for data in data_collection:
    db.collection(u'tokens').document(f"{data['tokenValue']}").set(data)
