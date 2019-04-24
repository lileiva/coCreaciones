export const UserHeaders = [
  { text: 'nick', value: 'nick', align: 'center' },
  { text: 'email', value: 'email', align: 'center' },
  { text: 'compañía', value: 'company', align: 'center' },
  { text: 'rol', value: 'role', align: 'center' },
  {
    text: 'acciones', value: 'actions', align: 'center', sortable: false,
  },
]

export const OrganizationHeaders = [
  { text: 'nombre', value: 'name', align: 'center' },
  { text: 'descripción', value: 'description', align: 'center' },
  { text: 'logo', value: 'logo', align: 'center' },
  { text: 'miembros', value: 'members', align: 'center' },
  {
    text: 'acciones', value: 'actions', align: 'center', sortable: false,
  },
]

export const Organizations = [
  {
    id: 0, name: 'Organización 1', description: 'Lorem Ipsum', logo: 'http://www.ingenieroboss.com/wp-content/uploads/2017/01/master-ingenieria-industrial.jpg', members: 1,
  },
  {
    id: 1, name: 'org2', description: 'desc2', logo: 'logo2', members: 10,
  },
  {
    id: 2, name: 'org3', description: 'desc3', logo: 'logo3', members: 100,
  },
]

export const OrganizationUserHeaders = [
  { text: 'nombre', value: 'name' },
  { text: 'fecha ingreso', value: 'joined_at', align: 'center' },
]

export const OrganizationUserSamples = [
  {
    id: 0, name: 'Sebastián Vásquez', joined_at: '23/06/2018',
  },
  {
    id: 1, name: 'Nicolas Acosta', joined_at: '17/05/2017',
  },
  {
    id: 2, name: 'Luis Leiva', joined_at: '28/02/2018',
  },
  {
    id: 3, name: 'José Manuel Comber', joined_at: '05/03/2016',
  },
  {
    id: 4, name: 'Reggie Fils-Aimé', joined_at: '31/01/2014',
  },
]

export const OrganizationReviewHeaders = [
  { text: 'nombre', value: 'name' },
  { text: 'descripción', value: 'description', align: 'center' },
  { text: 'puntuación', rate: 'description', align: 'center' },
]

export const OrganizationReviewSamples = [
  {
    id: 0, name: 'Juan Perez', description: '10/10 Trabajaría aquí denuevo.', rate: '5/5',
  },
  {
    id: 1, name: 'Doug Bowser', description: 'Proyectos variados, pero falta organización.', rate: '4/5',
  },
  {
    id: 2, name: 'Don Francisco', description: 'No me gustó el grupo :c', rate: '2/5',
  },
]

export const OrganizationProjectHeaders = [
  { text: 'titulo', value: 'title' },
  { text: 'descripción', value: 'description', align: 'center' },
  { text: 'contacto', rate: 'contact', align: 'center' },
  { text: 'horas semanales', rate: 'hours', align: 'center' },
]

export const OrganizationProjectSamples = [
  {
    id: 0, title: 'Taller en python de juegos', description: 'Desarrollemos un juego en pygame con python 3', contact: 'sgvasquez@uc.cl', hours: '5-7',
  },
  {
    id: 1, title: 'Diseño de plataformas web en Vue con Firebase', description: 'Desarrollo en JS para crear servicios web + móvil', contact: 'lileiva@uc.cl', hours: '10',
  },
  {
    id: 2, title: 'Taller de CSS', description: 'Lo mínimo para sobrevivir en la era del diseño digital', contact: 'asd@uc.cl', hours: '5',
  },
]

export const variable = 2
