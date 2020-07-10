import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/8002171?s=460&u=5bf3d5734e383a0cd191217e0c759be228715a27&v=4"
            alt="HugoFlaus"
          />
          <div>
            <strong>Rocketseat</strong>
            <p>So mais um teste aqui</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>525</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>25</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>5</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sdffsdfsdfsdf">
          <div>
            <strong>dasdasdasdsad</strong>
            <p>dasdasdasda</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
