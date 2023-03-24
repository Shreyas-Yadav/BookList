import './App.css';
import Book from './users/Book';
import './users/custom.css';
import UserForm from './users/UserForm';

const objList = [
  {
    name:"Atomic Habits1",
    auther: "shreyas1",
    addresslink:"https://m.media-amazon.com/images/I/51YP7fM361S._SX460_BO1,204,203,200_.jpg"
  },
  {
    name:"Atomic Habits2",
    auther: "shreyas2",
    addresslink:"https://m.media-amazon.com/images/I/51YP7fM361S._SX460_BO1,204,203,200_.jpg"
  },
  {
    name:"Atomic Habits3",
    auther: "shreyas3",
    addresslink:"https://m.media-amazon.com/images/I/51YP7fM361S._SX460_BO1,204,203,200_.jpg"
  },
  {
    name:"Atomic Habits4",
    auther: "shreyas4",
    addresslink:"https://m.media-amazon.com/images/I/51YP7fM361S._SX460_BO1,204,203,200_.jpg"
  }
]

// const obj = {
//   name:"Atomic Habits",
//   auther: "shreyas",
//   addresslink:"https://m.media-amazon.com/images/I/51YP7fM361S._SX460_BO1,204,203,200_.jpg"
// }

const newArray = objList.map((element)=>{
  return (
    <>
      <Book b1={element}/>
    </>
  )
})

function App() {
  return (
    <>
      <div className="App">
        {newArray}
        <UserForm/>
      </div>
    </>
  );
}
export default App;
