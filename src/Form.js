import React from 'react';
import { Formik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import axios from 'axios';

const cumple = 'Cumple';
const no_cumple = 'No cumple';
const no_aplica = 'No aplica';
const radioOptions = [cumple, no_cumple, no_aplica];

export const inputEntries = [
  {id:'ciudad', label: 'Ciudad'},
  {id:'area_proyecto', label: 'Area o Proyecto'},
  {id:'responsable_inspeccion', label: 'Responsable de la Inspección'},
  {id:'modelo', label: 'Modelo'},
  {id:'propiedad_vehiculo', label: 'Propiedad del Vehiculo'},
  {id:'centro_costo', label: 'Centro de costo'},
  {id:'cargo', label: 'Cargo'},
  {id:'placa_vehiculo', label: 'Placa del vehiculo'},
  {id:'cc', label: 'CC'}
]

export const inputRadio = [
  {criterio: 'NIVELES DE FLUIDOS', descripcion: 'Verificar su Estado y de acuerdo a lo indicado en el envase (Max - Min)', items: [
    {id:'fluidos_aceite', label: 'Aceite'},
    {id:'fluidos_frenos', label: 'Frenos'},
    {id:'fluidos_combustible', label: 'Combustible'},
    {id:'fluidos_refrigerante', label: 'Refrigerante'},
  ]},
  {criterio: 'LLANTAS', descripcion: 'Verificar su Estado, Profundidad del Labrado y Presión', items: [
    {id:'llantas_delanteras', label: 'Delanteras'},
    {id:'llantas_traseras', label: 'Traseras'},
    {id:'llantas_repuesto', label: 'Repuesto'},
  ]},
  {criterio: 'LUCES', descripcion: 'Funcionamiento Adecuado, Respuesta Inmediata', items: [
    {id:'luces_delanteras', label: 'Delanteras'},
    {id:'luces_freno', label: 'Freno'},
    {id:'luces_exploradoras', label: 'Exploradoras'},
    {id:'luces_interna', label: 'Interna'},
    {id:'luces_estacionaria', label: 'Estacionaria'},
  ]},
  {criterio: 'LIMPIABRISAS', descripcion: 'Plumilla en Buen Estado', items: [
    {id:'limpiabrisas_delanteras', label: 'Delanteras'},
    {id:'limpiabrisas_traseras', label: 'Traseras'},
  ]},
  {criterio: 'ESPEJOS', descripcion: 'Estado (limpieza, sin rotura ni opacidad)', items: [
    {id:'espejos_laterales', label: 'Laterales'},
    {id:'espejos_retrovisor', label: 'Retrovisor'},
  ]},
  {id:'cinturones_seguridad', label: 'CINTURONES DE SEGURIDAD', descripcion: 'Verificar Estado y Ajuste'},
  {id:'botiquin', label: 'BOTIQUÍN', descripcion: 'Equipo de Prevención y Seguridad'},
  {id:'equipo_carretera', label: 'EQUIPO DE CARRETERA', descripcion: 'Código Nacional de Tránsito Artículo 30:  gato, Una cruceta, Un botiquín,Un extintor, Dos tacos, Caja de herramientas (Un alicate, destornilladores pala y estrella, Llave de expansión, Llaves fijas), Llanta de repuesto Linterna y chaleco'}
]

const Form = () => {

  // const validate = (values) => {
  //   let errors = {};
  //       if (!values.email) {
  //         errors.email = 'Required';
  //       } else if (
  //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  //       ) {
  //         errors.email = 'Invalid email address';
  //       }
  //       return errors;
  // }

const onSubmit = async (values, { setSubmitting }) => {
  console.log('onSubmit');
  console.log(values);
  let response;
  const url= 'https://ristra-sgr-server-enriquesalazar.c9users.io/ipv/';
  try {
    response = await axios.post( url, values);
  } catch (error) {
    console.dir(error);
  }
  console.log(response);
  setSubmitting(false);
}

// const initialValues = {
//   ciudad: '',
//   area_proyecto: ''
// };


const renderTextInput = (id, label,props) => {
  const  {errors, touched, handleChange, handleBlur} = props;
  return (
    <TextField
      key={`${id}_textfield`}
      type="string"
      error={errors[id] && touched[id] && errors[id]}
      name={id}
      id={id}
      label={label}
      onChange={handleChange}
      onBlur={handleBlur}
      // value={values[id]}
      margin="normal"
      variant="outlined"
      color="primary"
      helperText={errors[id] && touched[id] && errors[id]}
    />
  );
}

const renderRadio = (radio, props) => {
  const { id, label, criterio, descripcion, items } = radio;
  const  {errors, touched, handleChange, handleBlur, values} = props;
  const obs = `${id}_obs`
  if (id){
    return (
      <div key={`${id}_radio`}>
      {label && descripcion && <h3>{label}</h3>}
      {label && !descripcion && <div>{label}</div>}
      {descripcion && <h4>{descripcion}</h4>}
        {radioOptions.map(
          (option, i) => (
            <span key={`${id}_${option}_${i}`}>
              <Radio
                checked={values[id] === option}
                onChange={handleChange}
                value={option}
                name={id}
              />{option}
            </span>
          )
        )}
        <TextField
          fullWidth
          key={obs}
          type="string"
          error={errors[obs] && touched[obs] && errors[obs]}
          name={obs}
          id={obs}
          label={'Observaciones'}
          onChange={handleChange}
          onBlur={handleBlur}
          // value={values[obs]}
          margin="normal"
          variant="outlined"
          color="primary"
          helperText={errors[id] && touched[id] && errors[id]}
        />
      </div>
    )
  } else if (items){
    return (
      <div key={`${criterio}_radio_group`} id="radio_group">
      {criterio && <h3>{criterio}</h3>}
      {descripcion && <h4>{descripcion}</h4>}
        {items.map(radio => renderRadio(radio, props))}
      </div>
    )
  }
  return null;
}

return(
  <div>
    <h1>INSPECCIÓN  PREOPERACIONAL DE VEHÍCULOS </h1>
    <Formik
      /*initialValues={initialValues}*/
      /* validate={validate} */
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(props) => {
        const {
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      } = props;
        return(
        <form onSubmit={handleSubmit}>
        {inputEntries.map(entry => renderTextInput(entry.id, entry.label, props))}
        <h2>DESARROLLO DE LA INSPECCIÓN</h2>
        {inputRadio.map(radio => renderRadio(radio, props))}
          <Button type="submit" disabled={isSubmitting} variant="contained" color="primary">
            Enviar
          </Button>
        </form>
      )}}
    </Formik>
  </div>
)};

export default Form;


// {<Switch
//           checked={values.robot}
//     onChange={handleChange}
//             onBlur={handleBlur}          
//     value="checkedA"
// 		  name="robot"
// 		  color="primary"
//         />}
  