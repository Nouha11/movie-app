import React from 'react'

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
        </div>
    );
}
