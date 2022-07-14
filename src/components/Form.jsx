import Swal from 'sweetalert2'
import { v4 as uuidv4} from 'uuid';
import { useForm } from '../hooks/useForm';

const Form = ({agregarTodo}) => {

    const initialState = {
        tarea: '',
        description: '',
        estado: 'pendiente',
        prioridad: false
    }

   const [inputs, handleChange, reset] = useForm(initialState);

    const {tarea, description, estado, prioridad} = inputs;

    const handleSubmit = e => {
        e.preventDefault()
        if(!tarea.trim()){
            e.target[0].focus();
            Swal.fire({
                title: 'Error!',
                text: 'Ingrese nombre de la tarea para continuar',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }
        if(!description.trim()){
            e.target[1].focus();
            Swal.fire({
                title: 'Error!',
                text: 'Ingrese una descripción para continuar',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }
        Swal.fire({
            title: 'Perfecto!',
            text: 'Tarea agregada correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
        agregarTodo({
            tarea,
            description,
            estado: estado === 'pendiente' ? false : true,
            prioridad  ,
            id: uuidv4() 
        })
        
        reset();
    };

  

  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            className='form-control mb-2' 
            name='tarea'
            placeholder='Ingrese el nombre de la tarea a realizar'
            value={tarea}
            onChange={handleChange}
        />
        <textarea
            className='form-control mb-2'
            name='description'
            placeholder='Descripción de la tarea'
            value={description}
            onChange={handleChange}
        />
        <select name='estado' className='form-control mb-2' value={estado} onChange={handleChange}>
            <option value="pendiente">pendiente</option>
            <option value="completado">completado</option>
        </select>
        <div className="form-check">
            <input 
                name="prioridad" 
                className="form-check-input" 
                type="checkbox" 
                checked={prioridad} 
                id="defaultCheck1"
                onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
                Importante
            </label>
        </div>
        <button type='submit' className='btn btn-primary'>
           Agregar
        </button>
        </form>
    </>
  )
}

export default Form