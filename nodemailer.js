const nodemailer = require("nodemailer");
const fs = require("fs");

// Array para almacenar los correos que no se pudieron enviar
let correosNoEnviados = [];
// Configuración del transporte
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "sac@effectivetime.org",
    pass: "laijwpxhoiusnsgf",
  },
});

// Leer la plantilla de correo
const template = fs.readFileSync("template.html", "utf-8");

// Lista de destinatarios y sus nombres
const destinatarios = [
  {
    nombre_empresa: "DCA INGENIERIAS SAS",
    correo: "dbr1508@gmail.com",
  },
  {
    nombre_empresa: "GUARDIANES HV SAS",
    correo: "guardianeshvsas@outlook.com",
  },
  {
    nombre_empresa: "SCI - INGENIERÍA SAS.",
    correo: "fesciingenieria@gmail.com",
  },
  {
    nombre_empresa: "INTEGRA SOLUCIONES DE CONSULTORIA S.A.S.",
    correo: "mnvargasco@hotmail.com",
  },
  {
    nombre_empresa: "INDUSTRIAL DE CONTACTORES Y RESISTENCIAS SAS",
    correo: "icr.industrialyresistencias@gmail.com",
  },
  {
    nombre_empresa: "LIDERES DESDE EL SER SAS",
    correo: "liderando@tatianagarcia.com.co",
  },
  {
    nombre_empresa: "DISTRIBUIDORA INDUSTRIAL E S SAS",
    correo: "fedistribuidoraindustrialeys@gmail.com",
  },
  {
    nombre_empresa: "CONSTRUCTIONE PYD SAS",
    correo: "admon.constructionepyd@gmail.com",
  },
  {
    nombre_empresa: "AMARILLO SYSTEMS RB SAS",
    correo: "amarillosystemsrbsas@gmail.com",
  },
  {
    nombre_empresa: "INVERSIONES ARALDES SAS",
    correo: "jarango@soloinflables.co",
  },
  {
    nombre_empresa: "F.A.J. SERVICIO TECNICO S.A.S",
    correo: "vacaro122726@hotmail.com",
  },
  {
    nombre_empresa: "ELECTRICOS Y ESTRUCTURADOS JM SAS",
    correo: "jmiguelcabsa@hotmail.com",
  },
  {
    nombre_empresa: "GRUPO GAITAN INGENIERIA Y OBRAS S.A.S",
    correo: "gaitaningenieriayobras@gmail.com",
  },
  {
    nombre_empresa: "EXPO FRUITS P.V S.A.S",
    correo: "expofruitspv@gmail.com",
  },
  {
    nombre_empresa: "CORPORACIÓN DE EDUCACIÓN   MEDIOS SAS",
    correo: "contacto@corpoem.com",
  },
  {
    nombre_empresa: "SALOHA MARKETING Y PUBLICIDAD S.A.S.",
    correo: "salohapublicidad@gmail.com",
  },
  {
    nombre_empresa: "VIA MARIS LAB SAS",
    correo: "hmurcia@viamaris-lab.co",
  },
  {
    nombre_empresa: "GAMEZ INGENIEROS SAS",
    correo: "gamez.gerencia@gmail.com",
  },
  {
    nombre_empresa: "GS STUDIO S A S",
    correo: "info@gsstudiocolombia.com",
  },
  {
    nombre_empresa: "AUTOMATIZACIONES AREVALO S.A.S.",
    correo: "automatizacionesarevalo@gamil.com",
  },
  {
    nombre_empresa: "AMERICAN SERVIX SAS",
    correo: "a.mericanservix@hotmail.com",
  },
  {
    nombre_empresa: "CHUMACERAS Y RODAMIENTOS INDUSTRIALES SAS",
    correo: "fabioboada@hotmail.com",
  },
  {
    nombre_empresa: "85 BITS S.A.S",
    correo: "notificaciones@85bits.com",
  },
  {
    nombre_empresa: "MYGRA 3D SAS",
    correo: "mygra3d@gmail.com",
  },
  {
    nombre_empresa: "TRANSPORTES ECHEVERRY SAS",
    correo: "admon@transecheverry.com",
  },
  {
    nombre_empresa: "C.A.D. - CONSULTORES ASOCIADOS DISRUPTIVOS S.A.S",
    correo: "maria.arango2504@gmail.com",
  },
  {
    nombre_empresa: "SUNYAGRO S.A.S",
    correo: "sunyagrosas@gmail.com",
  },
  {
    nombre_empresa: "ISAV SERVICES SAS",
    correo: "isavservicesinfo@gmail.com",
  },
  {
    nombre_empresa: "VORTEC INGENIERIA SAS",
    correo: "vortecingenieria@gmail.com",
  },
  {
    nombre_empresa: "INSTALACIONES Y ACABADOS HM S.A.S",
    correo: "instalacionesyacabadoshmsas@gmail.com",
  },
  {
    nombre_empresa: "CONSTRUCTORA JDC S.A.S",
    correo: "wespi1980@gmail.com",
  },
  {
    nombre_empresa: "MAFE SERNA S.A.S",
    correo: "mserna@actseguros.com",
  },
  {
    nombre_empresa: "DUARTE CONSTRUCCIONES Y REMODELACIONES SAS",
    correo: "proyectosduarteconstrucciones@gmail.com",
  },
  {
    nombre_empresa: "JOGAM ENERGY AND MOTORS S.A.S",
    correo: "jogamenergy@gmail.com",
  },
  {
    nombre_empresa: "ALJ ASESORIAS SAS",
    correo: "asesoriasaljsas@gmail.com",
  },
  {
    nombre_empresa: "PROTECCION TOTAL SECURITY SAS",
    correo: "oseduos@yahoo.com",
  },
  {
    nombre_empresa: "DAJ BAU INGENIERÍA SAS",
    correo: "dajsas2020@gmail.com",
  },
  {
    nombre_empresa: "BAGH S.A.S",
    correo: "bernagh2k@hotmail.com",
  },
  {
    nombre_empresa: "ACABADOS GP DRYWALL SAS",
    correo: "acabadosgpdrywall@gmail.com",
  },
  {
    nombre_empresa: "STAR ACTIONS SAS",
    correo: "gerencia@sucasaya.com",
  },
];

// Enviar correos personalizados con retraso entre envíos
destinatarios.forEach((destinatario, index) => {
  // Imprimir el nombre y correo del destinatario
  console.log(
    `Enviando correo a ${destinatario.nombre_empresa} (${destinatario.correo})`
  );

  // Rellenar la plantilla con el nombre del destinatario
  const correoPersonalizado = template.replace(
    "{nombre}",
    destinatario.nombre_empresa
  );

  // Configurar el correo electrónico
  const mailOptions = {
    from: "tu_correo@gmail.com",
    to: destinatario.correo,
    subject: `Optimiza la Gestión de Talento Humano en tu Empresa con Effective Time SAS`,
    html: correoPersonalizado,
  };

  // Enviar el correo electrónico con un retraso entre envíos
  setTimeout(() => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error al enviar el correo:", error);
        console.log("Correo no enviado:", mailOptions.to); // Imprime el correo que no se pudo enviar
        correosNoEnviados.push(mailOptions.to); // Agrega el correo a la lista de correos no enviados
      } else {
        console.log("Correo enviado:", info.response);
      }

      // Cuando se complete el envío de todos los correos, se escribe la lista en un archivo de texto
      if (index === destinatarios.length - 1) {
        fs.writeFile(
          "correos_no_enviados.txt",
          correosNoEnviados.join("\n"),
          (err) => {
            if (err) {
              console.error(
                "Error al escribir el archivo de correos no enviados:",
                err
              );
            } else {
              console.log(
                "Archivo de correos no enviados creado correctamente."
              );
            }
          }
        );
      }
    });
  }, index * 5000); // Se añade un retraso de 5 segundos (5000 milisegundos) entre cada envío
});
