import React, { Component } from 'react';
import './ContractItem.css';

class ContractItem extends Component {

  render() {

    const { text, id, color, onRemove ,onToggle} = this.props;

    return (
      <div className="contract-item" onClick={() => onToggle(id)}>
      <div className="remove" onClick={(e) => {
        e.stopPropagation(); // onToggle 이 실행되지 않도록 함
        onRemove(id)}
      }>&times;</div>
        <div style={{ color }} className={`contract-text`}>
          <div>{text}</div>
        </div>
      </div>
    );
  }
}

export default ContractItem;
