import React from 'react'
import { FaSave } from "react-icons/fa"
import  {saveAs}  from 'file-saver'
import {useSelector} from 'react-redux'
const SaveButton = () => {
    const {language,content} = useSelector((state) => state.compiler); 
    const extension = ['java','cs','py'];
    const saveFile = () => {
        var filename = "hello." + extension[language-1];
        var blob = new Blob([content], {
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