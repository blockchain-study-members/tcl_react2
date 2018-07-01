import React from 'react';
import './ContractListTemplate.css';

const ContractListTemplate = ({form , children}) => {
  return (
    <main className="contract-list-template">
      <div className="title">
        블록체인 정보
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <section className="todos-wrapper">
        { children }
      </section>
    </main>
  );
};

export default ContractListTemplate;
