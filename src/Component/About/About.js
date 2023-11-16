

import ChildAbout from './ChildAbout';
import a4 from '../../images/a4.jpg';
import a5 from '../../images/a5.jpg';
import a6 from '../../images/a6.jpg';
import a8 from '../../images/a8.jpg';
import { useState } from "react";
// import './Home.css';


function About(){

        let [arr,setArr] = useState([
            {
              title:"Gromming",
             
              text: "We offer a grooming service for all types of pets. From a thorough bath, haircut, nail trim, to ear cleaning.",
              image: a4
            },
            {
                title: "Daycare",
                
                 text: "Dogs who come to us for day care have an exciting day filled with play, rest, and socialization!",
                image: a5
            },

            {
                title: "Training",
               
                 text: "Our experienced dog trainers are committed to delivering exceptional training results for you and your dog.",
                image: a6
            },
            {
                title: "Food",
                text: "If your dog loves meat, they'll love Redbarn's line of dog food. Our first ingredients are animal proteins.",
                image: a8

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
            //  <div style={{ display: 'inline-block', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', minHeight: '100vh'}}>
          <div>
               <h1 class="title">Services</h1>
                {arr.map(e=>{
                    return(
                        <ChildAbout title={e.title} text={e.text} image={e.image} />
                    )
                })}
                {/* <Button variant="primary" onClick={handleAwesomeness}>double awesome</Button>{' '} */}
                {/*<ChildUser title="Elephant-1" text="Awesome Elephant" image={elephant1}/>*/}
            </div>
            );
              
              }
      
           
export default About;