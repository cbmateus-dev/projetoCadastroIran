import './Cadastro.css';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

export default function PageCadastro() {
  const history = useHistory();
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpjEmpresa, setCnpjEmpresa] = useState('');
  const [telefoneEmpresa, setTelefoneEmpresa] = useState('');
  const [enderecoEmpresa, setEnderecoEmpresa] = useState('');
  const handleCadastro = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main">
      <h1>Cadastro de Empresas </h1>
      <form onSubmit={handleCadastro} action="#">
        <p><input type="text" name="Nome Empresa" placeholder="Nome da Empresa" value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} /></p>
        <p><input type="text" name="CNPJ da Empresa" placeholder="CNPJ" value={cnpjEmpresa} onChange={(e) => setCnpjEmpresa(e.target.value)} /></p>
        <p><input type="text" name="Telefone" placeholder="Telefone" value={telefoneEmpresa} onChange={(e) => setTelefoneEmpresa(e.target.value)} /></p>
        <p><input type="text" name="Endereço" placeholder="Endereço" value={enderecoEmpresa} onChange={(e) => setEnderecoEmpresa(e.target.value)} /></p>
        <div>
          <button type="submit" value="Cadastrar" onClick={() => history.push('/main')}>
            Voltar

          </button>
          <button type="submit" value="Cadastrar">
            Cadastrar
          </button>

        </div>

      </form>
    </div>

  );
}
