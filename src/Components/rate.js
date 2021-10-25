import React,{useState} from 'react'

<<<<<<< HEAD
export default function Rate({setStars,stars}) {
    const indexArr = ([1,2,3,4,5])

    return (
        <div className="Rstars">
            {indexArr.map((el) => (
                <span 
                id={Math.random()*1000} onClick={() => {setStars(el)} }>
                {el <= stars ?
                    (<i class="fas fa-star" ></i>) :
                    (<i class="far fa-star" ></i>)
                }
                </span>
            ))
            }            
=======
export default function Rate({setStars}) {
    const [color, setColor] = useState("")
   const colorChange = () => {
        if(color === "white" || color === ""){
            setColor("gold");
        }
        else {setColor("white")}
    }

    return (
        <div className="Rstars">
            <i class="fas fa-star" style={{color: color}} id={Math.random()*1000} onClick={() => {setStars(1) , colorChange()} }></i>
            <i class="fas fa-star" style={{color: color}} id={Math.random()*1000} onClick={() => {setStars(2) , colorChange()}}> </i>
            <i class="fas fa-star" style={{color: color}} id={Math.random()*1000} onClick={() => {setStars(3) , colorChange()}}></i>
            <i class="fas fa-star" style={{color: color}} id={Math.random()*1000} onClick={() => {setStars(4) , colorChange()}}></i>
            <i class="fas fa-star" style={{color: color}} id={Math.random()*1000} onClick={() => {setStars(5) , colorChange()}}></i>

>>>>>>> ade985f0439517823613ad4a0303cb194d4b2fc1
        </div>
    );
}
