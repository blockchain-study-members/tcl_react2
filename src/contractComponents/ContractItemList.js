import React, { Component } from 'react';
import ContractItem from './ContractItem';

class ContractItemList extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.contract !== nextProps.contract;
  }

  render() {
    const { contract , onRemove , onToggle} = this.props;
    const contractList = contract.map(
      ({id, text, color}) => (
        <ContractItem
          id={id}
          text={text}
          color={color}
          key={id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      )
    );

    return (
      <div>
        {contractList}
      </div>
    );
  }
}

export default ContractItemList;
