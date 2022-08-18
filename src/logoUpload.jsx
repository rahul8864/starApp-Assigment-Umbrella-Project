import React,{useState} from 'react';
import './LogoUpload.css'

const LogoUpload = props => {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
    const hiddenFileInput = React.useRef(null);
  
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        if(event.target.files){
            const fileUploaded = event.target.files[0];
            props.handleLogoUpload(fileUploaded);
            setIsFilePicked(true)
            setSelectedFile(fileUploaded.name)
        }
    };
    return (        
        <div>
            <input type="file" ref={hiddenFileInput} onChange ={handleChange} style={{display:'none'}} accept="image/jpg, image/jpeg, image/png" />
            <button className="uploadBtn" id="btnAttachment" onClick={handleClick}>
               <span className="uploadIcon" ></span><span>{isFilePicked ? selectedFile : "UPLOAD LOGO"}</span>
            </button>
        </div>
    );
}

export default LogoUpload;