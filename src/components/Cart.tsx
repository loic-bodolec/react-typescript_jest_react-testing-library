import { useState } from "react";

function Cart() {
    const [purchased, setPurchased] = useState(false);
             
    return <div>
              <button onClick={() => setPurchased(true)}>Purchase</button>
              { purchased && <p>Thank you!</p>}
            </div>
}

export default Cart