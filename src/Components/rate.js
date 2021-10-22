import React from 'react'

export default function Rate({setStars}) {
    const [color, setColor] = useState("")
    colorChange = () => {
        setColor("gold")
    }

    return (
        <div className="Rstars">
            <i class="fas fa-star" style={{color: color}} id={Math.random()*1000} onClick={() => {setStars(1) , colorChange} }></i>
            <i class="fas fa-star" id={Math.random()*1000} onClick={() => setStars(2)}> </i>
            <i class="fas fa-star" id={Math.random()*1000} onClick={() => setStars(3)}></i>
            <i class="fas fa-star" id={Math.random()*1000} onClick={() => setStars(4)}></i>
            <i class="fas fa-star" id={Math.random()*1000} onClick={() => setStars(5)}></i>

        </div>
    )
}
