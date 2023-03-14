
function Paciente({paciente}) {

  const {nombre, dueño, email, fecha, sintomas} = paciente

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
    </div>
  )
}

export default Paciente
