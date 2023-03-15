
function Paciente({paciente, setPaciente, eliminarPaciente}) {

  const {id, nombre, dueño, email, fecha, sintomas} = paciente

  return (
    <div className='m-3 bg-white shadow-md px-5 py-5 rounded-lg'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre: {''}
        <span className='font-normal normal-case'>{nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Dueño: {''}
        <span className='font-normal normal-case'>{dueño}</span>
      </p><p className='font-bold mb-3 text-gray-700 uppercase'>
        Email: {''}
        <span className='font-normal normal-case'>{email}</span>
      </p><p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha Alta: {''}
        <span className='font-normal normal-case'>{fecha}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Sintomas: {''}
        <span className='font-normal normal-case'>{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => eliminarPaciente(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
