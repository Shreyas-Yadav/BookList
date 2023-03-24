import "./App.css";
import Book from "./users/Book";
import "./users/custom.css";
import UserForm from "./users/UserForm";

const objList = [
  {
    name: "The Indian Metropolis New Writer",
    auther: "Varun Gandhi New",
    addresslink:
      "https://images-eu.ssl-images-amazon.com/images/I/41cqBP3CKoL._AC_SX184_.jpg",
  },
  {
    name: "Never Never",
    auther: "Colleen Hoover",
    addresslink:
      "https://images-eu.ssl-images-amazon.com/images/I/51cUnd3JwoL._AC_SX184_.jpg",
  },
  {
    name: "The Lord of the Rings",
    auther: "J. R. R. Tolkien",
    addresslink:
      "https://images-eu.ssl-images-amazon.com/images/I/51myt0GXIUL._AC_SX184_.jpg",
  },
  {
    name: "Vahana",
    auther: " Stuti Gupta",
    addresslink:
      "https://images-eu.ssl-images-amazon.com/images/I/512URrvFNBL._AC_SX184_.jpg",
  },
];

const newArray = objList.map((element) => {
  return (
    <>
      <Book b1={element} />
    </>
  );
});

function App() {
  return (
    <>
      <div className="App">
        {newArray}
        <UserForm />
      </div>
    </>
  );
}
export default App;
