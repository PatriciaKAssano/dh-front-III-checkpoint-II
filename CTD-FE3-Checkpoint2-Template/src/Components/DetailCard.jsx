import { useEffect } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { DentistContext } from "../Providers/DentistProvider";
import { useContext, useState } from "react";
import api from "../Services/api";
import { AuthContext } from "../Providers/AuthContext";
import { useParams } from "react-router-dom";


const DetailCard = () => {

  const {loginData} = useContext(AuthContext)

  const { dentists, error, setError, loading, setLoading, getDentists} = useContext(DentistContext)

  const [dentistDetail, setDentistDetail] = useState([]);

  const { id } = useParams();

  async function getDentistsDetails() {
    setLoading(true);
    try {
      const response = await api.get(`/dentista?matricula=${id}`,{
        headers:{
          token: `${loginData.tipo} ${loginData.token}`
        }

      })

      setDentistDetail(response.data)
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    //Nesse useEffect, você vai fazer um fetch na api passando o 
    //id do dentista que está vindo do react-router e carregar os dados em algum estado
    getDentistsDetails()
    getDentists();
  
  }, []);




  if (loading) {
    return <h1>...carregando página</h1>;
  }

  if (error) {
    return <h2>Erro ao buscar dados</h2>;
  }


  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>

      <h1>Detalhes sobre Dentista {dentistDetail.nome} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nome: {dentistDetail.nome}</li>
              <li className="list-group-item">
                Sobrenome: {dentistDetail.sobrenome}
              </li>
              <li className="list-group-item">
                Usuário: {dentistDetail.usuario?.username}
              </li>
            </ul>
            <div className="text-center">
              {/* //Na linha seguinte deverá ser feito um teste se a aplicação
              // está em dark mode e deverá utilizado o css correto */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`btn btn-light ${styles.button
                  }`}
              >
                Marcar consulta
              </button>
            </div>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
