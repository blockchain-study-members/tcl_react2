import React, { Component } from 'react';
import ContractListTemplate from '../contractComponents/ContractListTemplate';
import Form from '../contractComponents/Form';
import ContractItemList from '../contractComponents/ContractItemList';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class ContractInfo extends Component {

  id = 1// 초기값 0이므로 1로 설정

  state = {
    input: '',
    contract: [
      {id: 0, text: '초기정보당겨올것'}
    ],
    color: '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, contract, color } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      contract: contract.concat({
        id: this.id++,
        text: input,
        color
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }


  handleSelectColor = (color) => {
    this.setState({
      color
    })
  }

  handleRemove = (id) => {
    const { contract } = this.state;
    this.setState({
      contract: contract.filter(contract => contract.id !== id)
    });
  }

  handleToggle = (id) => {
    const { contract } = this.state;

    // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
    const index = contract.findIndex(contract => contract.id === id);
    const selected = contract[index]; // 선택한 객체

    const nextContract = [...contract]; // 배열을 복사

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextContract[index] = {
      ...selected,
    };

    this.setState({
      contract: nextContract
    });
  }

  render() {
    const { input, contract, color } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;

    return (
      <div>
      블럭체인정보영역
      <ContractListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
          color={color}
        />
      )}>

      <ContractItemList contract={contract} onToggle={handleToggle} onRemove={handleRemove} />
      </ContractListTemplate>
      </div>
    );
  }
}

export default ContractInfo;
