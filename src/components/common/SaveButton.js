import React from 'react'
import {useSelector} from 'react-redux';
import { FaSave } from "react-icons/fa"
import  {saveAs}  from 'file-saver'
const SaveButton = ({textvalue}) => {
    const language = useSelector((state) => state.compiler.language) 
    const extension = ['java','cs','py'];
    const saveFile = () => {
        var filename = "hello." + extension[language-1];
        var blob = new Blob([textvalue], {
            type: "text/plain;charset=utf-8"
        });
        saveAs(blob, filename);
    }
    return (
        <button className="user-smallButton bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={saveFile}>
            <FaSave/>
        </button>
    )
}

export default SaveButton