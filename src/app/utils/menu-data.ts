/**
 * Objeto que representa los servicios con sus respectivas rutas.
 * @type {Object[]}
 */
export const services = [
  {
    /**
     * Nombre del servicio y ruta para autónomos.
     */
    name: 'menu.servicios.autonomos.title',
    path: 'servicios/autonomos/title',

    /**
     * Servicios secundarios para autónomos con sus respectivas rutas.
     * @type {Object[]}
     */
    subservices: [
      {
        name: 'menu.servicios.autonomos.accidentes',
        path: 'servicios/autonomos/accidentes',
      },
      {
        name: 'menu.servicios.autonomos.comercios',
        path: 'servicios/autonomos/comercios',
      },
      {
        name: 'menu.servicios.autonomos.pensiones',
        path: 'servicios/autonomos/pensiones',
      },
      {
        name: 'menu.servicios.autonomos.salud',
        path: 'servicios/autonomos/salud',
      },
      {
        name: 'menu.servicios.autonomos.vehiculos',
        path: 'servicios/autonomos/vehiculos',
      },
    ],
  },
  // Y así sucesivamente para el resto de los servicios
];

/**
 * Objeto que representa las gestiones con sus respectivas rutas.
 * @type {Object[]}
 */
export const gestiones = [
  {
    name: 'menu.gestiones.presupuestos',
    path: 'gestiones/presupuestos',
  },
  {
    name: 'menu.gestiones.tramites',
    path: 'gestiones/tramites',
  },
];

/**
 * Objeto que representa la información "sobre nosotros" con sus respectivas rutas.
 * @type {Object[]}
 */
export const aboutus = [
  {
    name: 'menu.aboutus.oficinas',
    path: 'about/oficinas',
  },
  {
    name: 'menu.aboutus.talleres',
    path: 'about/talleres',
  },
  {
    name: 'menu.aboutus.about',
    path: 'about/aboutus',
  },
  {
    name: 'menu.aboutus.contacto',
    path: 'about/contacto',
  },
];
