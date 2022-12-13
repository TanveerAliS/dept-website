import Home from './components/home/home'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { headerData, footerData } from './mocks/works-data'

function App() {
  return (
    <div className='App'>
      <Header headerData={headerData} />
      <Home />
      <Footer footerData={footerData}/>
    </div>
  );
}

export default App;
