import Input from './components/Input'
import Button from './components/Button'
import ButtonWide from './components/ButtonWide'
import { Container, Content, Row } from './styles';
import { useState } from 'react';

function App() {

  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  // método que recebe os números digitados
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  //soma
  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  //subtração
  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  //mulitiplicação
  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  //divisão
  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  // TODO
  function handleSignSwap () {
  
  }

  //igual
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        default:
          break;
        case '-':
          handleSubNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label="ac" onClick={() => handleOnClear('C')} />

          {/* todo */}
          <Button label="+/-" onClick={handleSignSwap} />
          <Button label="%" onClick={() => handleOnClear('+/-')} />

          <Button label="/" onClick={handleDivNumbers} />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="*" onClick={handleMultNumbers} />

        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={handleSubNumbers} />

        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={handleSumNumbers} />

        </Row>

        <Row>
          {/* 0 */}
          <ButtonWide label="0" onClick={() => handleAddNumber('0')} />
          <Button label="," onClick={() => handleAddNumber('.')} />
          <Button label="=" onClick={handleEquals} />
        </Row>

      </Content>
    </Container>
  );
}

export default App;
