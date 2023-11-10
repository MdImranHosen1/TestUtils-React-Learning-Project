import React, { useState } from 'react'

function FunButton({ handleClick, buttonText, color = 'white', props }) {

    // this.props.showAlart("success", `Text ${buttonText} successfully`);
    // console.log(this.props);

    return (
        <>

            <button style={{ margin: 2, fontSize: 12, color: { color } }} type="button" className={`btn btn-outline-${props.mode === "light" ? "dark" : "light"}`} onClick={handleClick}>{buttonText}</button>
        </>
    )
}



export default function TextFrom(props) {
    const [text, setText] = useState('');
    const [result, setResult] = useState('');
    function handleUppercaseClick() {

        props.showAlart("success", `Text convert uppercase successfully`);

        let fromText = text.toUpperCase();
        setResult(fromText);
    }
    function handleLowercaseClick() {
        props.showAlart("success", `Text convert lowercase successfully`);
        let fromText = text.toLowerCase();
        setResult(fromText);
    }
    function handleTitlecaseClick() {
        if (text.length === 0) return;
        props.showAlart("success", `Text convert titlecase successfully`);
        let s = text.split(" ");
        s = s.map(word => {
            return word[0].toUpperCase() + word.substring(1);
        }).join(" ");
        setResult(s);
    }

    function handleClearClick() {
        setText("");
        setResult("")
        props.showAlart("danger", `Text clear successfully`);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlart("success", `Text clear successfully`);
    }

    function handleOnChange(event) {
        setText(event.target.value);
    }

    return (
        <>
            <div className={`container ${props.mode === "light" ? "text-dark" : 'text-white'} `}>

                <>
                    <div className="mb-3 mt-2">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your text below</label>
                        <textarea className={`form-control bg-${props.mode === "dark" ? "dark" : "light"}  text-${props.mode === "light" ? "dark" : "light"}`} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="3" value={text}>
                        </textarea>
                    </div>
                    {/* Button start */}
                    <FunButton handleClick={handleUppercaseClick} buttonText="Convert Uppercase" props={props} />
                    <FunButton handleClick={handleLowercaseClick} buttonText="Convert Lowercase" props={props} />
                    <FunButton handleClick={handleTitlecaseClick} buttonText="Convert Titlecase" props={props} />
                    <FunButton handleClick={handleClearClick} buttonText="Clear" color='red' props={props} />
                    <FunButton handleClick={handleCopy} buttonText="Copy" props={props} />

                    {/* Button closed */}
                </>
                <div style={{
                    fontSize: 14,
                    color: props.mode === "light" ? "#4a54f1" : "#fafafa",
                    textAlign: "center",
                    marginTop: 15,
                }}><b>Text length: {text.length} || Number of word: {text.split(' ').length}</b></div>
                {/* output */}
                <>
                    <div className="mb-3 mt-2">
                        <label htmlFor="exampleFormControlTextarea2" className="form-label">Result:</label>
                        <textarea className={`form-control bg-${props.mode === "dark" ? "dark" : "light"} text-${props.mode === "light" ? "dark" : "light"}`} id="exampleFormControlTextarea2" value={result} readOnly>
                        </textarea>
                    </div>
                </>
            </div>
        </>
    )
}
