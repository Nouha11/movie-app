import React,{useState} from 'react'

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

        </div>
    )
}
