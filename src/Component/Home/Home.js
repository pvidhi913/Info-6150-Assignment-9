import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';
import a1 from '../../images/a1.jpeg';
import a2 from '../../images/a2.jpeg';
import a3 from '../../images/a3.jpg';
import a7 from '../../images/a7.jpg';
import ChildHome from './ChildHome';
import { useState } from "react";

function Home(){
  let [arr,setArr] = useState([
    {
      title:"Jack and Joe",
      text: "Best Friends",
      image: a1
    },
    {
      title:"Simba",
      text: "Gorgeous Girl",
      image: a2
    },
    {
      title:"Bruno",
      text: "Handsome Boy",
      image: a3
    },
    {
      title: "Rex",
      text: "Charming Boy",
      image: a7
    }
  ])

  function handleAwesomeness(event){
    event.preventDefault(); 
    var newArr = arr.map(e=>{
        return{
            ...e,
            text: "Double" +e.text,
              
        } 
    })
    setArr(newArr)
}

return(
     <div>
       <h1 class="title">Happy Customers</h1>
        {arr.map(e=>{
            return(
                <ChildHome title={e.title} text={e.text} image={e.image} />
            )
        })}
    
    </div>
    );
      
      }
    
 
export default Home;