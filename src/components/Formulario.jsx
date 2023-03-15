import { useState, useEffect } from 'react';

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState('');
  const [dueño, setDueño] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setDueño(paciente.dueño)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente]);

  const generaraId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombre, dueño, email, fecha, sintomas].includes('')){
      setError(true)
      return;
    }
    setError(false)

    //Objeto paciente
    const objetoPaciente = {
      nombre,
      dueño,
      email,
      fecha,
      sintomas,
    }

    if(paciente.id){
      //Editando registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    }else {
      //Nuevo registro
      objetoPaciente.id = generaraId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //reiniciar el form
    setNombre('')
    setDueño('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }
  
  return (
    <div className="md:w-1/2 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-5">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-5 px-5"
        onSubmit={handleSubmit}
      >
        { error && 
          <div className='bg-red-800 text-white text-center p-1 uppercase font-bold rounded-lg'>
          <p>*Todos los campos son obligatorios</p>
        </div>
        }
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="mascota"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="dueño"
          >
            Nombre Dueño
          </label>
          <input
            id="dueño"
            type="text"
            placeholder="Nombre del Dueño"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={dueño}
            onChange={(e) => setDueño(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label 
            className="block text-gray-700 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            type="text"
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  )
}

export default Formulario

