import React from 'react';
import './Cadastro.css';
import { useHistory } from 'react-router-dom';

const PageMain = () => {
  const history = useHistory();

  return (
    <div className="main">
      <h1>Gerador de Chave</h1>
      <form>
        <div>
          <button type="submit" value="ConsultarCadastro">
            Consultar Cadastro
          </button>

          <button type="submit" value="Cadastrar" onClick={() => history.push('/cadastro')}>
            Fazer Cadastro
          </button>

        </div>

      </form>
    </div>
  );
};

export default PageMain;
