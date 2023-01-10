<<<<<<< HEAD
import React, { useContext,useEffect,useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";


=======
import React, { useContext, useState } from "react";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { HiOutlineLogout, HiFire } from "react-icons/hi";
import {
  BsFillPeopleFill,
  BsPencilSquare,
  BsFillStarFill,
} from "react-icons/bs";
import { Navigate } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext/UserContext";
import { HabitsContext } from "../../contexts/HabitsContext/HabitsContext";

import Button from "../../components/Button";
import Logo from "../../components/Logo";

import { HabitsCard } from "../../components/HabitCard";
>>>>>>> 8d7e8cdd2e50ff990cde60b583547fd40b92aefa
import {
  StyledDashboardPage,
  StyledHeader,
  StyledUserInfo,
  StyledHabitsSection,
  StyledHabitsList,
} from "./styles";
import { DefaultContainer } from "../../styles/container";

import ModalCreateHabit from "../../components/ModalCreate";
import ModalProfileEdit from "../../components/ModalEditUser";




const Dashboard = () => {
<<<<<<< HEAD
  const { userLogout, user } = useContext(UserContext);  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  
  const [modalOn, setModalOn ] = useState(false)
  const [profilePic, setProfilePic ] = useState(user?.img)
=======
  const { userLogout, user } = useContext(UserContext);
  const { habit } = useContext(HabitsContext)
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
>>>>>>> 8d7e8cdd2e50ff990cde60b583547fd40b92aefa

  const todayDate = new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "numeric",
  }).format(new Date());

  const handleModalCreate = () => setIsOpenModalCreate(!isOpenModalCreate);

  const fixedDate = todayDate.charAt(0).toUpperCase() + todayDate.slice(1);

  return user ? (
    <StyledDashboardPage>
      <DefaultContainer>
      {modalOn && <ModalProfileEdit setModal={setModalOn} profilePic={profilePic} setProfile={setProfilePic}/>}
        <StyledHeader>
          <Logo variant={"primary"} />
          <nav>
            <h3 className="username">{user.name}</h3>
            <button type="button" className="user-img">

              <img src={user.img} alt="avatar" />

              <i className="edit-user">
                <BsPencilSquare className="nav-icon" onClick={()=> setModalOn(true)}/>
              </i>
            </button>
            <button className="logout-btn" onClick={() => userLogout()}>
              <i>
                <HiOutlineLogout className="nav-icon" />
              </i>
            </button>
          </nav>
        </StyledHeader>

        <section className="user-welcome">
          <h1>Bem vindo de volta, {user.userName}</h1>
          <p className="date">{fixedDate}</p>
        </section>

        <main>
          <StyledUserInfo>
            <div className="dropdown-menu">
              <input type="radio" id="status" name="status" />
              <i>
                <FiChevronDown />
              </i>
              <label htmlFor="status">Ver status</label>
              <div className="dropdown-menu close-tab">
                <input type="radio" id="close-tab" name="status" />
                <i>
                  <FiChevronUp />
                </i>
                <label htmlFor="close-tab">Fechar status</label>
              </div>
              <div className="status-info">
                <h4>status geral</h4>

                <ul>
                  <li>
                    <h5>Estrelas</h5>
                    <div>
                      <span>
                        {user.stars}
                        <i>
                          <BsFillStarFill />
                        </i>
                      </span>
                    </div>
                  </li>
                  <li>
                    <h5>Bits</h5>
                    <div>
                      <span>
                        {user.bits}
                        <img src="./icons/favicon-32x32.png" alt="bit icon" />
                      </span>
                    </div>
                  </li>
                  <li>
                    <h5>Constância</h5>
                    <div>
                      <span>
                        11 dias{" "}
                        <i>
                          <HiFire />
                        </i>
                      </span>
                    </div>
                  </li>
                  <li>
                    <h5>Ranking Geral</h5>
                    <div>
                      <span>
                        8ª posição{" "}
                        <i>
                          <BsFillPeopleFill />
                        </i>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <p className="quote">
              <q>
                Suba o primeiro degrau com fé. Não é necessário que você veja
                toda a escada. Apenas dê o primeiro passo.
              </q>
              Martin L. King
            </p>
          </StyledUserInfo>

          <StyledHabitsSection>
            <div className="habits-list-title">
              <h4>hábitos</h4>
              <Button variant="primary" name={"+ CRIAR"} />
            </div>
            <StyledHabitsList>
              {habit && habit.length > 0 ? (
                habit.map((goal) => (
                  <HabitsCard key={goal.id} {...goal}/>
                ))
              ) : (
                <>
                  <h4>Você ainda não possui nenhum hábito</h4>
                </>
              )}
            </StyledHabitsList>
          </StyledHabitsSection>
        </main>
      </DefaultContainer>

      {isOpenModalCreate && <ModalCreateHabit handleModal={handleModalCreate} />}
    </StyledDashboardPage>
  ) : (
    <Navigate to="/" />
  );
};

export default Dashboard;
