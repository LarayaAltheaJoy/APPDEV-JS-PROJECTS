import Header from "./Header";
import Footer from "./Footer";
import ListOfFood from "./ListOfFood";
//functional Components
export default function App() {
  const fruits = [{id: 1, name: "apples", color: "red"},
    {id: 2, name: "banana", color: "yellow"},
    {id: 3, name: "kiwi", color: "green"},
    {id: 4, name: "grape", color: "violet"},
    {id: 5, name: "orange", color: "orange"}
  ]
  const desserts = [
    {id: 1, name: "cake", color: "pink"},
    {id: 2, name: "sundae", color: "white"},
    {id: 3, name: "ice cream", color: "brown"},
    {id: 4, name: "pie", color: "red"}
  ]
  return(
    <>
    <Header />
    {fruits.length > 0 && <ListOfFood items = {fruits} category = "My Favorite Fruits"></ListOfFood>}

    {desserts.length > 0 && <ListOfFood items = {desserts} category = "My Favorite Desserts"></ListOfFood>}
    <Footer />
    </>
  );

}