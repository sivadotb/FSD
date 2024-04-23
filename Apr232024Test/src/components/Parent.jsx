import { useState } from "react"
import Child from './Child'

function Parent(){
    const [txtVal, setTextVal] = useState('')

    const handleDataFromChild = (val) => {
        setTextVal(val)
    }

    return(
        <div>
            
            
            <label>Parent</label>
            <input type="text" name="ptxt" value={txtVal} />
            <br></br>
            <Child sendDataToParent={handleDataFromChild} />
        </div>
    )
}



export default Parent