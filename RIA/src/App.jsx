import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
//functional Components
function App() {
  return(
    <>
    <Header />
    <Body name="Patrick" food ="Cake" isHealthy={false} age={19}/>
    <br />
    <Body name="Ashley" food ="Bread" isHealthy={true} age={19}/>
    <br />
    <Body name="Rudolpho" food ="Inihaw" isHealthy={false} age={19}/>
    <br />
    <Body name="Zhaun" food ="Veggie Salad" isHealthy={true} age={19}/>
    <br />
    
    <Footer />
    </>
  );

}
export default App