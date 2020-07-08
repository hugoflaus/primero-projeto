import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore respositórios no Github</Title>
      <Form action="">
        <input placeholder="Digite o nome do respositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/8002171?s=460&u=5bf3d5734e383a0cd191217e0c759be228715a27&v=4"
            alt="Hugo Flausino"
          />
          <div>
            <strong>desafio-fundamentos-nodejs</strong>
            <p>
              Node.js, TypeScript utilizando o conceito de models, repositories
              e services!
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/8002171?s=460&u=5bf3d5734e383a0cd191217e0c759be228715a27&v=4"
            alt="Hugo Flausino"
          />
          <div>
            <strong>desafio-fundamentos-nodejs</strong>
            <p>
              Node.js, TypeScript utilizando o conceito de models, repositories
              e services!
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/8002171?s=460&u=5bf3d5734e383a0cd191217e0c759be228715a27&v=4"
            alt="Hugo Flausino"
          />
          <div>
            <strong>desafio-fundamentos-nodejs</strong>
            <p>
              Node.js, TypeScript utilizando o conceito de models, repositories
              e services!
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
