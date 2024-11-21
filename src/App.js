import './App.css';
import Faq from './componets/Faq/Faq';
import Footerbottom from './componets/Footer-bottom/Footer-bottom';
import Footertop from './componets/Footer-top/Footer-top';
import Header from './componets/Header/Header';
import Main from './componets/Main/Main';
import Nav from './componets/Nav/Nav';
import Pricing from './componets/Pricing/Pricing';
import Terminal from './componets/Terminal/Terminal';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Pricing></Pricing>
      <Terminal></Terminal>
      <Faq></Faq>
      <Footertop></Footertop>
      <Footerbottom></Footerbottom>
    </div>
  );
}

export default App;
