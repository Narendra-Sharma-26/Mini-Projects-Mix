import { useState } from "react"
import Data from "./Data";
import "./styles.css"

export default function Accordian() {

    const [selected,setselected] = useState(null);
    const [multiSelect,setmultiSelect] = useState(false);
    const [arrayOfId,setarrayOfId] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setselected(getCurrentId === selected ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId){
        let cpymultiple = [...arrayOfId]
        const findindexofcurrentid = cpymultiple.indexOf(getCurrentId)

        if(findindexofcurrentid === -1) cpymultiple.push(getCurrentId)
        else cpymultiple.splice(findindexofcurrentid, 1)

        setarrayOfId(cpymultiple)
    }

    console.log(selected,arrayOfId)

    return (
        <div className="wrapper">
            <button onClick={()=>setmultiSelect(!multiSelect)}>Multi Select Toggle</button>
            <div className="accordian">
                {
                    Data && Data.length > 0 ?
                    Data.map(dataitem => <div className="item">
                        <div onClick={()=> { multiSelect === true ? handleMultiSelection(dataitem.id) : handleSingleSelection(dataitem.id)}} className="title">
                            <h3>{dataitem.name}</h3>
                            <span>+</span>
                        </div>
                        {
                            multiSelect ?
                            arrayOfId.indexOf(dataitem.id) !== -1 && 
                            <div className="content">{dataitem.surname}</div> :
                            selected === dataitem.id && <div className="content">{dataitem.surname}</div>
                        }
                        {/* {
                            selected === dataitem.id || arrayOfId.indexOf(dataitem.id) !== -1 ?
                            (<div className="content">{dataitem.surname}</div>)
                            : null
                        } */}
                    </div>)
                    : <div>No data found !!!</div>
                }
            </div>
        </div>
    )
}