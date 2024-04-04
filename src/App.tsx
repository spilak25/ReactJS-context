import { UserContext, UserContextProvider } from "./UserContext.tsx"
import { Cheese } from "./types";
import Header from "./components/Header.tsx"
import ItemScreen from "./components/ItemScreen.tsx"
import Footer from "./components/Footer.tsx"
import "./App.css"

const cheeses:Cheese[] =[
  {
    name : "Bleu",
    photo:"https://agour.com/1253-large_default/portion-bleu-de-chevre-du-pays-basque-urdina.jpg",
    isAdmin: false,
  },
  {
    name : "Gruyère",
    photo:"https://www.voieverte.fr/app/uploads/2022/07/2265_Gruyere.png",
    isAdmin: true,
  },
  {
    name : "Mont d'or",
    photo:"https://www.mont-dor.com/wp-content/uploads/2020/01/montdor-aop.png",
    isAdmin: true,
  },
  {
    name : "Noix",
    photo:"https://www.ilovecheese.be/wp-content/uploads/2023/02/rambol-decore-noix-coupe-1-2Kg-packshot-500x500-1.png",
    isAdmin: false,
  }
]

function App() {
  
  
  return (
    <>
      <UserContextProvider>
        <div style={{display:"flex", flexDirection:"column"}}>
          <Header/>
          <ItemScreen cheeses={cheeses}/>
          <Footer/>
        </div>
      </UserContextProvider>
    </>
  )
}
export default App