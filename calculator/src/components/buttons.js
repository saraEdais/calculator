import React from 'react'

const Buttons= (props) => {
    const symbol=["c","+-","%","/","7",'8','9','x','4','5','6','-','1','2','3','+','0','.','='];
    return (
        <div className="buttons-style">
            {
                symbol.map((sym,index)=>{
                    return(
                        <button key={index} className={(symbol.length-1===index)?"equalSymbol":"button"}
                        onClick={props.handelClick}>{sym}</button>
                    )
                })
            }
        </div>
    )
}

export default Buttons
