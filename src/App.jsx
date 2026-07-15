import BookList from "./Tasks/Task2 - BookRecommanded/BookList";

function App() {
const Books=[
  {
    id : 101,
    name : "purna purshotam krishna bhagvan",
    author : "prabhu das",
    Gener : "Love",
    Rating : 5.1,
    Description : "Tiny changes create remarkable results.."
  },
  {
    id : 102,
    name : "purna purshotam krishna bhagvan",
    author : "prabhu das",
    Gener : "Love",
    Rating : 5,
    Description : "Tiny changes create remarkable results.."
  },{
    id : 103,
    name : "purna purshotam krishna bhagvan",
    author : "prabhu das",
    Gener : "Love",
    Rating : 5,
    Description : "Tiny changes create remarkable results.."
  },{
    id : 104,
    name : "purna purshotam krishna bhagvan",
    author : "prabhu das",
    Gener : "Love",
    Rating : 5,
    Description : "Tiny changes create remarkable results.."
  },{
    id : 105,
    name : "purna purshotam krishna bhagvan",
    author : "prabhu das",
    Gener : "Love",
    Rating : 5,
    Description : "Tiny changes create remarkable results.."
  },{
    id : 106,
    name : "purna purshotam krishna bhagvan",
    author : "prabhu das",
    Gener : "Love",
    Rating : 5,
    Description : "Tiny changes create remarkable results.."
  },
]
  return(
    <>
        <BookList books= {Books}/>      
    </>
  )
}
export default App;