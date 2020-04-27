// O React deve sempre ser importado quando 
// deseja-se trabalhoa com HTML, CSS  dentro 
// do JavaScript.
import React, { useState } from 'react';
import Header from './Header';


// Exemplo de componente
function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    // Exemplo do uso de propriedade
    <>
      <Header title="Dashboard" />
      <Header title="Titulo 1" />
      <Header title="Titulo 2" />
      <Header title="Titulo 3" />
      <br></br>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>
        Incrementar
      </button>
    </>
  );
}

export default App;


// Conceitos de React

// Componente: É a função que retorna conteudo HTML, CSS ou JS.
// Obs.: A primeira letra do nome de um componente deve iniciar em caixa alta.
// Outra definição para componente: Bloco idolado de HTMl, CSS e JS, o qual não interfere no restante da aplicação.

// Propriedade: Informações que um componente PAI passa para o componente FILHO.
// É utilizar atributos HTML em componente, exemplo: title, id, class, styler.

// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade).

