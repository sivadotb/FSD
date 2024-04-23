import { useState } from "react"

function Child({sendDataToParent} ){
    
    const [txtVal, setTextVal] = useState('')

    const updateVal = (event) => {
        setTextVal(event.target.value);
    }

    function sendToParent() {
        sendDataToParent(txtVal)
    }

    return(
        <div>
            <label>Child</label>
            <input type="text" value={txtVal} id="ctxt" name="ctxt" onChange={updateVal}/>
            <button onClick={sendToParent}>Send To Parent</button>
        </div>
    )
}

export default Child