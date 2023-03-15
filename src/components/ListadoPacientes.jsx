import Paciente from './Paciente'

function ListadoPacientes({pacientes, setPaciente, eliminarPaciente}) {

  return (
    <div className='md:w-1/2 mx-5 my-10 md:my-0 md:h-screen md:overflow-y-scroll'>
      {pacientes && pacientes.length ? 
        ( 
          <>
            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
            <p className='text-xl mb-10 text-center'>
              Administra tus {''} 
              <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
            </p>
            {pacientes.map((paciente) => (
              <Paciente 
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </>
        ) : 
        (
          <>
            <h2 className='font-black text-3xl text-center'>No Hay Pacientes</h2>
            <p className='text-xl mb-10 text-center'>
              Comienza Agregando tus {''} 
              <span className='text-indigo-600 font-bold'>Pacientes</span>
            </p>
          </>
        )
      }
    </div>
  )
}

export default ListadoPacientes
