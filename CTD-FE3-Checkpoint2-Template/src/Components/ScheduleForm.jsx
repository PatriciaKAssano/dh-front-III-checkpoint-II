import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
import { DentistContext } from "../Providers/DentistProvider";
import styles from "./ScheduleForm.module.css";
import api from "../Services/api";

const ScheduleForm = () => {
  const [dentists, setDentists] = useState([])
  const [patients, setPatients] = useState([])

  const [dentistId, setDentistId] = useState("")
  const [patientId, setPatientId] = useState("")

  const [appointmentDate, setAppointmentDate] = useState([])
  const [token, setToken] = useState("")

  // const {loginData} = useContext(AuthContext)

  // const { paciente, dentista } = useContext(AuthContext);

  // const { contextIsLight } = useContext(NavBarContext);

  // const { dentists, error, setError, loading, setLoading, getDentists} = useContext(DentistContext)

  // const [patients, setPatients] = useState([]);


  //INPUTS FORM
  // const [dentist, setDentist] = useState([]);
  // const [patient, setPatient] = useState([]);
  // const [appointmentDate, setAppointmentDate] = useState("");


  // async function getPatients() {
  //   setLoading(true);
  //   try {
  //     const response = await api.get("/paciente", {
  //       headers:{
  //         token: `${loginData.tipo} ${loginData.token}`
  //       }

  //     });

  //     setPatients(response.data);
  //   } catch (error) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }


  function getDentists() {
    fetch(`https://dhodonto.ctdprojetos.com.br/dentista`).then(
      response => {
        response.json().then(
          dentists => {
            if (dentists === undefined) {
              console.log("Erro")
            } else {

              setDentists([...dentists])
            }
          }
        )
      }
    )
  }

  function getPatients() {
    return fetch(`https://dhodonto.ctdprojetos.com.br/paciente`).then(
      response => {
        response.json().then(
          patients => {
            if(patients === undefined) {

              console.log("Error!")

            } else {

             setPatients([...patients.body])

            }
          }
        )
      }
    )
  }


  useEffect(() => {
    setToken(localStorage.getItem('token'))
    //Nesse useEffect, você vai fazer um fetch na api buscando TODOS os dentistas
    //e pacientes e carregar os dados em 2 estados diferentes
    getDentists()
    getPatients();

  }, []);

  const handleSubmit = async (event) => {
    //Nesse handlesubmit você deverá usar o preventDefault,
    event.preventDefault();

    //obter os dados do formulário e enviá-los no corpo da requisição 
    //para a rota da api que marca a consulta
    //lembre-se que essa rota precisa de um Bearer Token para funcionar.
    //Lembre-se de usar um alerta para dizer se foi bem sucedido ou ocorreu um erro

    // const body = {
    //   paciente: {
    //     matricula: patient,
    //   },
    //   dentista: {
    //     matricula: dentist,
    //   },
    //   dataHoraAgendamento: appointmentDate,
    // };

    // const headers = {
    //   headers: {
    //     Authorization: `Bearer ${loginData.token}`,
    //   },
    // };

    // try {
    //   await api.post("/consulta", body, headers);
    //   alert("OK! Marcado!");
    // } catch (error) {
    //   alert("Erro " + error.response?.data || error);
    // }

    if (token === "" || token === null) {

      alert("Usuário não autorizado.");
      window.location.href = "/login"

    } else if (patientId === "" || dentistId === "" || appointmentDate === "") {

      alert("Um ou mais campos não preenchidos.");

    } else {

      const requestConfig = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          paciente: {
            matricula: `${patientId}`,
          },
          dentista: {
            matricula: `${dentistId}`,
          },
          dataHoraAgendamento: `${appointmentDate}`,
        }),
      };

      fetch("https://dhodonto.ctdprojetos.com.br/consulta", requestConfig).then(
        response => {
          response
            .json()
            .then((data) => {
              console.log(data);

              alert("Consulta marcada com sucesso! Você será redirecionado para a Home.");

              setTimeout(() => window.location.href = "/home", 2000);
            })
            .catch((e) => {
              alert("Erro ao enviar a requisição.");
            });
        }
      );
    }

  };




  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div
        className={`text-center container}`
        }
      >
        <form onSubmit={handleSubmit}>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="dentist" className="form-label">
                Dentista
              </label>
              <select
                // value={dentist.matricula}
                onChange={(e) => setDentistId(e.target.value)}
                className="form-select"
                name="dentist"
                id="dentist">
                <option>-- select --</option>
                {/*Aqui deve ser feito um map para listar todos os dentistas*/}
                {dentists.map((dentist) => (
                  <option 
                  key={dentist.matricula}
                  value={dentist.matricula}>
                    {dentist.nome} {dentist.sobrenome}
                  </option>
                ))}

              </select>
            </div>
            <div className="col-sm-12 col-lg-6">
              <label htmlFor="patient" className="form-label">
                Paciente
              </label>
              <select
                // value={patient.matricula}
                onChange={(event) => setPatientId(event.target.value)}
                className="form-select" name="patient" id="patient"
              >
                <option>-- select --</option>
                {/*Aqui deve ser feito um map para listar todos os pacientes*/}
                {
                patients.map(patient => (
                <option key={patient.matricula} value={patient.matricula}>
                  {`${patient.nome} ${patient.sobrenome}`}
                </option>
                ))
                }
              </select>
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            <div className="col-12">
              <label htmlFor="appointmentDate" className="form-label">
                Data
              </label>
              <input
                // value={appointmentDate}
                onChange={(event) => setAppointmentDate(event.target.value)}
                className="form-control"
                id="appointmentDate"
                name="appointmentDate"
                type="datetime-local"
              />
            </div>
          </div>
          <div className={`row ${styles.rowSpacing}`}>
            {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
            <button
              className={`btn btn-light ${styles.button
                }`}
              type="submit"
              onClick={handleSubmit}
            >
              Schedule
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleForm;
