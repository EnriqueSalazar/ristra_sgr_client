const cumple = 'Cumple';
const no_cumple = 'No cumple';
const no_aplica = 'No aplica';
export const radioOptions = [cumple, no_cumple, no_aplica];

export const inputEntries = [
  { id: 'ciudad', label: 'Ciudad' },
  { id: 'area_proyecto', label: 'Area o Proyecto' },
  { id: 'responsable_inspeccion', label: 'Responsable de la Inspección' },
  { id: 'modelo', label: 'Modelo' },
  {
    id: 'propiedad_vehiculo',
    label: 'Propiedad del Vehiculo',
    select: ['Alquilado', 'Propio']
  },
  { id: 'centro_costo', label: 'Centro de costo' },
  { id: 'cargo', label: 'Cargo' },
  { id: 'placa_vehiculo', label: 'Placa del vehiculo' },
  { id: 'cc', label: 'CC' }
];

export const inputRadio = [
  {
    criterio: 'NIVELES DE FLUIDOS',
    descripcion:
      'Verificar su Estado y de acuerdo a lo indicado en el envase (Max - Min)',
    items: [
      { id: 'fluidos_aceite', label: 'Aceite' },
      { id: 'fluidos_frenos', label: 'Frenos' },
      { id: 'fluidos_combustible', label: 'Combustible' },
      { id: 'fluidos_refrigerante', label: 'Refrigerante' }
    ]
  },
  {
    criterio: 'LLANTAS',
    descripcion: 'Verificar su Estado, Profundidad del Labrado y Presión',
    items: [
      { id: 'llantas_delanteras', label: 'Delanteras' },
      { id: 'llantas_traseras', label: 'Traseras' },
      { id: 'llantas_repuesto', label: 'Repuesto' }
    ]
  },
  {
    criterio: 'LUCES',
    descripcion: 'Funcionamiento Adecuado, Respuesta Inmediata',
    items: [
      { id: 'luces_delanteras', label: 'Delanteras' },
      { id: 'luces_freno', label: 'Freno' },
      { id: 'luces_exploradoras', label: 'Exploradoras' },
      { id: 'luces_interna', label: 'Interna' },
      { id: 'luces_estacionaria', label: 'Estacionaria' }
    ]
  },
  {
    criterio: 'LIMPIABRISAS',
    descripcion: 'Plumilla en Buen Estado',
    items: [
      { id: 'limpiabrisas_delanteras', label: 'Delanteras' },
      { id: 'limpiabrisas_traseras', label: 'Traseras' }
    ]
  },
  {
    criterio: 'ESPEJOS',
    descripcion: 'Estado (limpieza, sin rotura ni opacidad)',
    items: [
      { id: 'espejos_laterales', label: 'Laterales' },
      { id: 'espejos_retrovisor', label: 'Retrovisor' }
    ]
  },
  {
    id: 'cinturones_seguridad',
    label: 'CINTURONES DE SEGURIDAD',
    descripcion: 'Verificar Estado y Ajuste'
  },
  {
    id: 'botiquin',
    label: 'BOTIQUÍN',
    descripcion: 'Equipo de Prevención y Seguridad'
  },
  {
    id: 'equipo_carretera',
    label: 'EQUIPO DE CARRETERA',
    descripcion:
      'Código Nacional de Tránsito Artículo 30:  gato, Una cruceta, Un botiquín,Un extintor, Dos tacos, Caja de herramientas (Un alicate, destornilladores pala y estrella, Llave de expansión, Llaves fijas), Llanta de repuesto Linterna y chaleco'
  }
];
