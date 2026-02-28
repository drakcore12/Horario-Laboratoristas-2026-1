const laboratoristas = {
  "Lunes": {
    6: "Rosario-Mateo",
    8: "Rosario-Mateo",
    10: "Rosario-Mateo-Anderson",
    12: "Rosario-Camilo",
    14: "Camilo",
    16: "Camilo-Mateo",
    18: "Camilo-Anderson-Mateo",
    20: "Camilo-Anderson"
  },

  "Martes": {
    6: "Rosario-Miguel",
    8: "Rosario-Miguel",
    10: "Rosario-Miguel",
    12: "Rosario-Miguel",
    14: "Camilo",
    16: "Anderson-Mateo-Camilo",
    18: "Camilo-Mateo",
    20: "Camilo-Mateo"
  },

  "Miércoles": {
    6: "Miguel",
    8: "Miguel-Anderson",
    10: "Miguel-Anderson",
    12: "Miguel",
    14: "Camilo-Anderson",
    16: "Camilo",
    18: "Camilo-Anderson",
    20: "Camilo-Anderson"
  },

  "Jueves": {
    6: "Rosario-Miguel",
    8: "Rosario-Miguel-Anderson",
    10: "Rosario-Miguel-Anderson",
    12: "Rosario-Miguel",
    14: "Camilo",
    16: "Anderson-Mateo-Camilo",
    18: "Camilo-Anderson-Mateo",
    20: "Camilo-Anderson-Mateo"
  },

  "Viernes": {
    6: "Rosario-Miguel",
    8: "Rosario-Miguel-Anderson",
    10: "Rosario-Miguel",
    12: "Rosario-Anderson-Camilo",
    14: "Anderson-Camilo-Mateo",
    16: "Anderson-Camilo",
    18: "Mateo-Miguel-Anderson",
    20: "Mateo-Anderson"
  },

  "Sábado": {
    6: "Rosario-Mateo",
    8: "Rosario-Mateo-Miguel",
    10: "Rosario-Mateo-Miguel",
    12: "Rosario-Mateo-Miguel",
    14: "Rosario-Mateo-Miguel",
    16: "Rosario-Mateo",
    18: "---",
    20: "---"
  }
};

const materiasData = [
  { c: "SD1061", m: "TÉCNICAS DE FABRICACIÓN DIGITAL I", d: "JULIO PASTOR RESTREPO ZAPATA", dia: "Jueves", h: "14-16", a: "5-105", start: 14 },
  { c: "SD1061", m: "TÉCNICAS DE FABRICACIÓN DIGITAL I", d: "JULIO PASTOR RESTREPO ZAPATA", dia: "Sábado", h: "12-14", a: "5-105", start: 12 },
  { c: "SD1061", m: "TÉCNICAS DE FABRICACIÓN DIGITAL I", d: "JULIO PASTOR RESTREPO ZAPATA", dia: "Sábado", h: "14-16", a: "5-105", start: 14 },
  { c: "ET0017", m: "SISTEMAS AUTOMATICOS DE CONTROL", d: "BAYARDO EMILIO CADAVID GOMEZ", dia: "Martes", h: "20-22", a: "5-102", start: 20 },
  { c: "ET0017", m: "SISTEMAS AUTOMATICOS DE CONTROL", d: "BAYARDO EMILIO CADAVID GOMEZ", dia: "Jueves", h: "20-22", a: "5-102", start: 20 },
  { c: "ET0086", m: "SERVOMECANISMOS", d: "JHON JAIRO RUEDA ECHAVARRIA", dia: "Lunes", h: "20-22", a: "5-104", start: 20 },
  { c: "ET0023", m: "REDES DE DATOS", d: "JUAN GONZALO ZULUAGA BOTERO", dia: "Martes", h: "20-22", a: "5-202", start: 20 },
  { c: "ET0023", m: "REDES DE DATOS", d: "JUAN GONZALO ZULUAGA BOTERO", dia: "Jueves", h: "20-22", a: "5-202", start: 20 },
  { c: "ET0108", m: "MICROCONTROLADORES", d: "ANDRES FELIPE ISAZA PIEDRAHITA", dia: "Viernes", h: "18-20", a: "5-105", start: 18 },
  { c: "ET0218", m: "MECANIZADO CNC - ELECTIVA", d: "RAUL ALBERTO BEDOYA CASTRILLON", dia: "Sábado", h: "12-14", a: "5-202", start: 12 },
  { c: "ET0218", m: "MECANIZADO CNC - ELECTIVA", d: "RAUL ALBERTO BEDOYA CASTRILLON", dia: "Sábado", h: "14-16", a: "5-202", start: 14 },
  { c: "SD1053", m: "INTRODUCCIÓN A LOS SISTEMAS MECATRÓNICOS", d: "JULIO PASTOR RESTREPO ZAPATA", dia: "Viernes", h: "18-20", a: "5-202", start: 18 },
  { c: "SD1053", m: "INTRODUCCIÓN A LOS SISTEMAS MECATRÓNICOS", d: "JULIO PASTOR RESTREPO ZAPATA", dia: "Viernes", h: "20-22", a: "5-202", start: 20 },
  { c: "ET2400", m: "INTRODUCCIÓN A LOS SISTEMAS DIGITALES", d: "DERFREY ANTONIO DUQUE QUINTERO", dia: "Viernes", h: "18-20", a: "5-102", start: 18 },
  { c: "ET2400", m: "INTRODUCCIÓN A LOS SISTEMAS DIGITALES", d: "DERFREY ANTONIO DUQUE QUINTERO", dia: "Viernes", h: "20-22", a: "5-102", start: 20 },
  { c: "SD1062", m: "INTRODUCCIÓN A LA FABRICACIÓN DIGITAL SOSTENIBLE", d: "RAMIRO ANTONIO LOPERA SÁNCHEZ", dia: "Martes", h: "14-16", a: "5-102", start: 14 },
  { c: "ET2402", m: "INSTRUMENTACIÓN INDUSTRIAL", d: "HECTOR SAHIR TABORDA VARGAS", dia: "Martes", h: "20-22", a: "5-105", start: 20 },
  { c: "ET2402", m: "INSTRUMENTACIÓN INDUSTRIAL", d: "HECTOR SAHIR TABORDA VARGAS", dia: "Jueves", h: "20-22", a: "5-105", start: 20 },
  { c: "ET0107", m: "INSTRUMENTACIÓN", d: "DERFREY ANTONIO DUQUE QUINTERO", dia: "Jueves", h: "18-20", a: "5-104", start: 18 },
  { c: "ET0107", m: "INSTRUMENTACIÓN", d: "DERFREY ANTONIO DUQUE QUINTERO", dia: "Jueves", h: "20-22", a: "5-104", start: 20 },
  { c: "ET0080", m: "ESTATICA Y RESISTENCIA DE MATERIALES", d: "JUAN CARLOS RIVERA SANTOS", dia: "Martes", h: "06-08", a: "5-104", start: 6 },
  { c: "ET0080", m: "ESTATICA Y RESISTENCIA DE MATERIALES", d: "JUAN CARLOS RIVERA SANTOS", dia: "Miércoles", h: "18-20", a: "5-104", start: 18 },
  { c: "ET0080", m: "ESTATICA Y RESISTENCIA DE MATERIALES", d: "JUAN CARLOS RIVERA SANTOS", dia: "Jueves", h: "06-08", a: "5-104", start: 6 },
  { c: "ET0016", m: "ELECTRONICA INDUSTRIAL II Y LABORATORIO", d: "EDGAR ALBERTO BETANCUR CATAÑO", dia: "Martes", h: "18-20", a: "5-102", start: 18 },
  { c: "ET0016", m: "ELECTRONICA INDUSTRIAL II Y LABORATORIO", d: "EDGAR ALBERTO BETANCUR CATAÑO", dia: "Sábado", h: "14-16", a: "5-102", start: 14 },
  { c: "ET0117", m: "ELECTRONICA BASICA", d: "RUBEN DARIO ECHAVARRIA CIFUENTES", dia: "Sábado", h: "06-08", a: "5-102", start: 6 },
  { c: "ET0082", m: "DISEÑO DE ELEMENTOS DE MAQUINAS", d: "JUAN CARLOS RIVERA SANTOS", dia: "Lunes", h: "18-20", a: "5-202", start: 18 },
  { c: "ET0082", m: "DISEÑO DE ELEMENTOS DE MAQUINAS", d: "JUAN CARLOS RIVERA SANTOS", dia: "Jueves", h: "18-20", a: "5-102", start: 18 },
  { c: "ET0104", m: "DIBUJO TÉCNICO 2", d: "RAUL ALBERTO BEDOYA CASTRILLON", dia: "Viernes", h: "18-20", a: "5-104", start: 18 },
  { c: "ET0020", m: "CONTROL INDUSTRIAL Y LABORATORIO", d: "SANDRA MILENA ALVAREZ ARBOLEDA", dia: "Martes", h: "18-20", a: "5-105", start: 18 },
  { c: "ET0020", m: "CONTROL INDUSTRIAL Y LABORATORIO", d: "SANDRA MILENA ALVAREZ ARBOLEDA", dia: "Jueves", h: "18-20", a: "5-105", start: 18 },
  { c: "ET0022", m: "CONMUTACION", d: "JUAN GONZALO ZULUAGA BOTERO", dia: "Sábado", h: "08-11", a: "5-105", start: 8 },
  { c: "ET0015", m: "COMUNICACIONES I Y LABORATORIO", d: "LUIS GUILLERMO ZULETA GONZALEZ", dia: "Miércoles", h: "20-22", a: "5-104", start: 20 },
  { c: "ET0015", m: "COMUNICACIONES I Y LABORATORIO", d: "LUIS GUILLERMO ZULETA GONZALEZ", dia: "Viernes", h: "20-22", a: "5-104", start: 20 },
  { c: "ET0046", m: "CIRCUITOS ELECTRÓNICOS", d: "DIEGO HERNANDO OROZCO GOMEZ", dia: "Lunes", h: "18-20", a: "5-102", start: 18 },
  { c: "ET0046", m: "CIRCUITOS ELECTRÓNICOS", d: "DIEGO HERNANDO OROZCO GOMEZ", dia: "Miércoles", h: "18-20", a: "5-102", start: 18 },
  { c: "ET0046", m: "CIRCUITOS ELECTRÓNICOS", d: "DIEGO HERNANDO OROZCO GOMEZ", dia: "Miércoles", h: "20-22", a: "5-102", start: 20 },
  { c: "ET2401", m: "CIRCUITOS ELÉCTRICOS", d: "JESUS IGNACIO CALLE PEREZ", dia: "Sábado", h: "08-10", a: "5-202", start: 8 },
  { c: "ET2401", m: "CIRCUITOS ELÉCTRICOS", d: "JESUS IGNACIO CALLE PEREZ", dia: "Sábado", h: "10-12", a: "5-202", start: 10 },
  { c: "ET0014", m: "CIRCUITOS DIGITALES APLICADOS Y LAB.", d: "SIN DOCENTE", dia: "Lunes", h: "18-20", a: "5-104", start: 18 },
  { c: "ET0014", m: "CIRCUITOS DIGITALES APLICADOS Y LAB.", d: "SIN DOCENTE", dia: "Sábado", h: "12-14", a: "5-104", start: 12 },
  { c: "ET0042", m: "CIRCUITOS DIGITALES", d: "ANDRES FELIPE ISAZA PIEDRAHITA", dia: "Lunes", h: "12-14", a: "5-102", start: 12 },
  { c: "ET0042", m: "CIRCUITOS DIGITALES", d: "CRISTIAN CORTES CHICA", dia: "Lunes", h: "16-18", a: "5-102", start: 16 },
  { c: "ET0042", m: "CIRCUITOS DIGITALES", d: "VICTOR ALFONSO CIFUENTES DURANGO", dia: "Lunes", h: "18-20", a: "5-105", start: 18 },
  { c: "ET2406", m: "CIRCUITOS DIGITALES", d: "JOSE MAURICIO PULGARIN LOTERO", dia: "Lunes", h: "20-22", a: "5-102", start: 20 },
  { c: "ET0042", m: "CIRCUITOS DIGITALES", d: "ANDRES FELIPE ISAZA PIEDRAHITA", dia: "Martes", h: "12-14", a: "5-102", start: 12 },
  { c: "ET0042", m: "CIRCUITOS DIGITALES", d: "VICTOR ALFONSO CIFUENTES DURANGO", dia: "Jueves", h: "12-14", a: "5-102", start: 12 },
  { c: "ET0042", m: "CIRCUITOS DIGITALES", d: "JOSE MAURICIO PULGARIN LOTERO", dia: "Viernes", h: "06-08", a: "5-102", start: 6 },
  { c: "ET2406", m: "CIRCUITOS DIGITALES", d: "JOSE MAURICIO PULGARIN LOTERO", dia: "Sábado", h: "08-10", a: "5-102", start: 8 },
  { c: "ET2406", m: "CIRCUITOS DIGITALES", d: "JOSE MAURICIO PULGARIN LOTERO", dia: "Sábado", h: "10-12", a: "5-102", start: 10 },
  { c: "ET0076", m: "CIRCUITOS 2", d: "VESNA SRDANOVIC", dia: "Lunes", h: "06-08", a: "5-202", start: 6 },
  { c: "ET0076", m: "CIRCUITOS 2", d: "VESNA SRDANOVIC", dia: "Martes", h: "18-20", a: "5-202", start: 18 },
  { c: "ET0076", m: "CIRCUITOS 2", d: "VESNA SRDANOVIC", dia: "Miércoles", h: "06-08", a: "5-202", start: 6 },
  { c: "ET0076", m: "CIRCUITOS 2", d: "VESNA SRDANOVIC", dia: "Jueves", h: "18-20", a: "5-202", start: 18 },
  { c: "ET0019", m: "APLICACION A LOS MICROCONTROLADORES", d: "CARLOS ALBERTO VALENCIA HERNANDEZ", dia: "Miércoles", h: "20-22", a: "5-105", start: 20 },
  { c: "ET0019", m: "APLICACION A LOS MICROCONTROLADORES", d: "CARLOS ALBERTO VALENCIA HERNANDEZ", dia: "Viernes", h: "20-22", a: "5-105", start: 20 }
];

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const personalData = {
  "CAMILO": {
    "nombre": "Camilo Andrés Fuentes Morales",
    "email": "camilo.fuentes217@pascualbravo.edu.co",
    "cel": "3043912078",
    "horas": 40
  },
  "ROSARIO": {
    "nombre": "Maria Rosario Valderrama Orjuela",
    "email": "m.valderrama@pascualbravo.edu.co",
    "cel": "3207480104",
    "horas": 40
  },
  "MATEO": {
    "nombre": "Mateo Herrera Hernandez",
    "email": "mateo.herrera930@pascualbravo.edu.co",
    "cel": "3007397931",
    "horas": 40
  },
  "ANDERSON": {
    "nombre": "Anderson León Giraldo",
    "email": "anderson.leon066@pascualbravo.edu.co",
    "cel": "3145570885",
    "horas": 40
  },
  "MIGUEL": {
    "nombre": "Miguel Angel Noreña Cano",
    "email": "miguel.norena755@pascualbravo.edu.co",
    "cel": "3105922035",
    "horas": 40
  }
};
