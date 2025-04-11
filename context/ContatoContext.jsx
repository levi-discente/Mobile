import React, { createContext, useState } from 'react';

export const ContatoContext = createContext();

export const ContatoProvider = ({ children }) => {
  const [contatos, setContatos] = useState([
    { id: '1', nome: 'Levi Renatto', email: 'levi@gmail.com', telefone: '81 99999-9999' },
    { id: '2', nome: 'Maria Silva', email: 'maria@gmail.com', telefone: '81 98888-8888' },
  ]);

  const adicionarContato = (contato) => {
    setContatos([...contatos, { ...contato, id: Date.now().toString() }]);
  };

  const editarContato = (contatoEditado) => {
    setContatos(contatos.map(c => c.id === contatoEditado.id ? contatoEditado : c));
  };

  const excluirContato = (id) => {
    setContatos(contatos.filter(c => c.id !== id));
  };

  return (
    <ContatoContext.Provider value={{ contatos, adicionarContato, editarContato, excluirContato }}>
      {children}
    </ContatoContext.Provider>
  );
};
