const laboratoristas = {
  "Lunes": {
    6:  "Rosario-Mateo",
    8:  "Rosario-Mateo",
    10: "Rosario-Mateo-Anderson",
    12: "Rosario-Camilo",
    14: "Camilo",
    16: "Camilo",
    18: "Camilo-Anderson",
    20: "Camilo-Anderson"
  },

  "Martes": {
    6:  "Rosario-Miguel",
    8:  "Rosario-Miguel",
    10: "Rosario-Miguel",
    12: "Rosario-Miguel-Mateo",
    14: "Camilo",
    16: "Anderson-Mateo",
    18: "Camilo-Anderson-Mateo",
    20: "Camilo-Anderson-Mateo"
  },

  "Miércoles": {
    6:  "Miguel",
    8:  "Miguel-Anderson",
    10: "Miguel-Anderson",
    12: "Miguel",
    14: "Camilo-Anderson",
    16: "Camilo",
    18: "Camilo-Anderson-Mateo",
    20: "Camilo-Anderson"
  },

  "Jueves": {
    6:  "Rosario-Miguel",
    8:  "Rosario-Miguel-Anderson",
    10: "Rosario-Miguel-Anderson",
    12: "Rosario-Miguel-Camilo",
    14: "Camilo",
    16: "Anderson-Mateo",
    18: "Camilo-Anderson-Mateo",
    20: "Camilo-Anderson-Mateo"
  },

  "Viernes": {
    6:  "Rosario-Miguel",
    8:  "Rosario-Miguel-Anderson",
    10: "Rosario-Miguel",
    12: "Rosario-Anderson-Camilo",
    14: "Anderson-Camilo-Mateo",
    16: "Anderson-Camilo",
    18: "Mateo-Miguel",
    20: "Mateo-Camilo"
  },

  "Sábado": {
    6:  "Rosario-Mateo",
    8:  "Rosario-Miguel-Mateo",
    10: "Rosario-Miguel-Mateo",
    12: "Rosario-Miguel-Mateo",
    14: "Rosario-Miguel-Mateo",
    16: "Rosario-Mateo",
    18: "Mateo-Miguel",
    20: "Mateo-Camilo"
  }
};

const materiasData = [
    { d: "ANDRES FELIPE ISAZA", m: "MICROCONTROLADORES", dia: "Viernes", h: "18-20", a: "5-105", start: 18 },
    { d: "ANDRES FELIPE ISAZA", m: "CIRCUITOS DIGITALES", dia: "Lunes", h: "12-14", a: "5-102", start: 12 },
    { d: "ANDRES FELIPE ISAZA", m: "CIRCUITOS DIGITALES", dia: "Martes", h: "12-14", a: "5-102", start: 12 },
    { d: "BAYARDO EMILIO CADAVID", m: "SISTEMAS AUTO. CONTROL", dia: "Martes", h: "20-22", a: "5-102", start: 20 },
    { d: "BAYARDO EMILIO CADAVID", m: "SISTEMAS AUTO. CONTROL", dia: "Jueves", h: "20-22", a: "5-102", start: 20 },
    { d: "CARLOS ALBERTO VALENCIA", m: "APL MICROCONTROLADORES", dia: "Miércoles", h: "20-22", a: "5-105", start: 20 },
    { d: "CARLOS ALBERTO VALENCIA", m: "APL MICROCONTROLADORES", dia: "Viernes", h: "20-22", a: "5-105", start: 20 },
    { d: "CRISTIAN CORTES CHICA", m: "CIRCUITOS DIGITALES", dia: "Lunes", h: "16-18", a: "5-102", start: 16 },
    { d: "DERFREY ANTONIO DUQUE", m: "INTRO SISTEMAS DIG", dia: "Viernes", h: "18-22", a: "5-102", start: 18 },
    { d: "DERFREY ANTONIO DUQUE", m: "INTRO SISTEMAS DIG", dia: "Viernes", h: "18-22", a: "5-102", start: 20 },
    { d: "DERFREY ANTONIO DUQUE", m: "INSTRUMENTACIÓN", dia: "Jueves", h: "18-20", a: "5-104", start: 18 },
    { d: "DERFREY ANTONIO DUQUE", m: "INSTRUMENTACIÓN", dia: "Jueves", h: "20-22", a: "5-104", start: 20 },
    { d: "DIEGO HERNANDO OROZCO", m: "CIRCUITOS ELECTRÓNICOS", dia: "Lunes", h: "18-20", a: "5-102", start: 18 },
    { d: "DIEGO HERNANDO OROZCO", m: "CIRCUITOS ELECTRÓNICOS", dia: "Miércoles", h: "18-22", a: "5-102", start: 18 },
    { d: "DIEGO HERNANDO OROZCO", m: "CIRCUITOS ELECTRÓNICOS", dia: "Miércoles", h: "18-22", a: "5-102", start: 20 },
    { d: "EDGAR ALBERTO BETANCUR", m: "ELEC INDUSTRIAL II", dia: "Martes", h: "18-20", a: "5-102", start: 18 },
    { d: "EDGAR ALBERTO BETANCUR", m: "ELEC INDUSTRIAL II", dia: "Sábado", h: "14-16", a: "5-102", start: 14 },
    { d: "HECTOR SAHIR TABORDA", m: "INSTRUM. INDUSTRIAL", dia: "Martes", h: "20-22", a: "5-105", start: 20 },
    { d: "HECTOR SAHIR TABORDA", m: "INSTRUM. INDUSTRIAL", dia: "Jueves", h: "20-22", a: "5-105", start: 20 },
    { d: "JESUS IGNACIO CALLE", m: "CIRCUITOS ELÉCTRICOS", dia: "Sábado", h: "08-12", a: "5-202", start: 8 },
    { d: "JESUS IGNACIO CALLE", m: "CIRCUITOS ELÉCTRICOS", dia: "Sábado", h: "08-12", a: "5-202", start: 10 },
    { d: "JHON JAIRO RUEDA", m: "SERVOMECANISMOS", dia: "Lunes", h: "20-22", a: "5-104", start: 20 },
    { d: "JOSE MAURICIO PULGARIN", m: "CIRCUITOS DIGITALES", dia: "Lunes", h: "20-22", a: "5-102", start: 20 },
    { d: "JOSE MAURICIO PULGARIN", m: "CIRCUITOS DIGITALES", dia: "Viernes", h: "06-08", a: "5-102", start: 6 },
    { d: "JOSE MAURICIO PULGARIN", m: "CIRCUITOS DIGITALES", dia: "Sábado", h: "08-12", a: "5-102", start: 8 },
    { d: "JOSE MAURICIO PULGARIN", m: "CIRCUITOS DIGITALES", dia: "Sábado", h: "08-12", a: "5-102", start: 10 },
    { d: "JUAN CARLOS RIVERA", m: "EST Y RES MAT", dia: "Martes", h: "06-08", a: "5-202", start: 6 },
    { d: "JUAN CARLOS RIVERA", m: "EST Y RES MAT", dia: "Miércoles", h: "18-20", a: "5-104", start: 18 },
    { d: "JUAN CARLOS RIVERA", m: "EST Y RES MAT", dia: "Jueves", h: "06-08", a: "5-202", start: 6 },
    { d: "JUAN CARLOS RIVERA", m: "DISEÑO ELEM MAQ", dia: "Lunes", h: "18-20", a: "5-202", start: 18 },
    { d: "JUAN CARLOS RIVERA", m: "DISEÑO ELEM MAQ", dia: "Jueves", h: "18-20", a: "5-102", start: 18 },
    { d: "JUAN GONZALO ZULUAGA", m: "REDES DE DATOS", dia: "Martes", h: "20-22", a: "5-202", start: 20 },
    { d: "JUAN GONZALO ZULUAGA", m: "REDES DE DATOS", dia: "Jueves", h: "20-22", a: "5-202", start: 20 },
    { d: "JUAN GONZALO ZULUAGA", m: "CONMUTACION", dia: "Sábado", h: "08-11", a: "5-105", start: 8 },
    { d: "JULIO PASTOR RESTREPO", m: "FABRICACIÓN DIGITAL I", dia: "Jueves", h: "14-16", a: "5-105", start: 14 },
    { d: "JULIO PASTOR RESTREPO", m: "FABRICACIÓN DIGITAL I", dia: "Sábado", h: "12-16", a: "5-105", start: 12 },
    { d: "JULIO PASTOR RESTREPO", m: "FABRICACIÓN DIGITAL I", dia: "Sábado", h: "12-16", a: "5-105", start: 14 },
    { d: "JULIO PASTOR RESTREPO", m: "ITS MECATRÓNICOS", dia: "Viernes", h: "18-22", a: "5-202", start: 18 },
    { d: "JULIO PASTOR RESTREPO", m: "ITS MECATRÓNICOS", dia: "Viernes", h: "18-22", a: "5-202", start: 20 },
    { d: "LUIS GUILLERMO ZULETA", m: "COMUNICACIONES I", dia: "Miércoles", h: "20-22", a: "5-104", start: 20 },
    { d: "LUIS GUILLERMO ZULETA", m: "COMUNICACIONES I", dia: "Viernes", h: "20-22", a: "5-104", start: 20 },
    { d: "RAMIRO ANTONIO LOPERA", m: "FABRICACIÓN SOSTENIBLE", dia: "Martes", h: "14-16", a: "5-102", start: 14 },
    { d: "RAUL ALBERTO BEDOYA", m: "MECANIZADO CNC", dia: "Sábado", h: "12-16", a: "5-202", start: 12 },
    { d: "RAUL ALBERTO BEDOYA", m: "MECANIZADO CNC", dia: "Sábado", h: "12-16", a: "5-202", start: 14 },
    { d: "RAUL ALBERTO BEDOYA", m: "DIBUJO TÉCNICO 2", dia: "Viernes", h: "18-20", a: "5-104", start: 18 },
    { d: "RUBEN DARIO ECHAVARRIA", m: "ELECTRONICA BASICA", dia: "Sábado", h: "06-08", a: "5-102", start: 6 },
    { d: "SANDRA MILENA ALVAREZ", m: "CONTROL INDUSTRIAL", dia: "Martes", h: "18-20", a: "5-105", start: 18 },
    { d: "SANDRA MILENA ALVAREZ", m: "CONTROL INDUSTRIAL", dia: "Jueves", h: "18-20", a: "5-105", start: 18 },
    { d: "VESNA SRDANOVIC", m: "CIRCUITOS 2", dia: "Lunes", h: "06-08", a: "5-202", start: 6 },
    { d: "VESNA SRDANOVIC", m: "CIRCUITOS 2", dia: "Martes", h: "18-20", a: "5-202", start: 18 },
    { d: "VESNA SRDANOVIC", m: "CIRCUITOS 2", dia: "Miércoles", h: "06-08", a: "5-202", start: 6 },
    { d: "VESNA SRDANOVIC", m: "CIRCUITOS 2", dia: "Jueves", h: "18-20", a: "5-202", start: 18 },
    { d: "VICTOR ALFONSO CIFUENTES", m: "CIRCUITOS DIGITALES", dia: "Lunes", h: "18-20", a: "5-105", start: 18 },
    { d: "VICTOR ALFONSO CIFUENTES", m: "CIRCUITOS DIGITALES", dia: "Jueves", h: "12-14", a: "5-102", start: 12 },
    { d: "SIN DOCENTE", m: "CIR DIGITALES APLICADOS", dia: "Lunes", h: "18-20", a: "5-104", start: 18 },
    { d: "SIN DOCENTE", m: "CIR DIGITALES APLICADOS", dia: "Sábado", h: "12-14", a: "5-104", start: 12 }
];

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
