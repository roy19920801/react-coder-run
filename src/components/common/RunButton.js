import React from "react"
import { FaPlay } from "react-icons/fa"

const RunButton = (props) => {

    const textStyle = {
        marginTop: '3px'
    }
    
    return (
        <button className="user-runButton bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-5 rounded">
            <div className="flex justify-center gap-2">
                <div style={textStyle}><FaPlay/></div>
                <div>Run</div>
            </div>
        </button>
    )
}

export default RunButton