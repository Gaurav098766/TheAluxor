import React,{useState} from 'react'
import HashLoader from "react-spinners/HashLoader";

function Loader() {
    let [loading, setLoading] = useState(true);
//   let [color, setColor] = useState("#ffffff");
//   const override =`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;
  return (
    <div style={{marginTop:'150px'}}>
        <div className="sweet-loading text-center">
            <HashLoader color='#000' loading={loading} css='' size={80} />
        </div>
    </div>
  )
}

export default Loader