import React , {useState} from 'react'
import './component.css';

export default function Textform(props) {
    const [text , setText] = useState("Enter Text");
    const [tcolor , setcolor] = useState("red");
    let [index , setindex] = useState(0);
    const [tfont , setfont] = useState("sans-serif");
    const [tsize , setsize] = useState(10);
    const [talign , setalign] = useState("");
    const [tpaste , setpaste] = useState("");
    var newtext;
    const uppercase = () => {
         if(document.getElementById('mytextarea').value === ""){
            props.showAlert("Textarea is blank" , "warning")
         }
        else{
            console.log("clicked on btn");
            newtext = text.toUpperCase();
            setText(newtext);
            props.showAlert("Converted to Uppercase" , "success")
        }
         
    }
    const lowercasee = () => {
        if(document.getElementById('mytextarea').value === ""){
            props.showAlert("Textarea is blank" , "warning")
         }
        else{
            // console.log("clicked on btn");
            newtext = text.toLowerCase();
            setText(newtext);
            props.showAlert("Converted to Lowercase" , "success")
        }
         
    }

    const camelcase = () => {
        if(document.getElementById('mytextarea').value === ""){
            props.showAlert("Textarea is blank" , "warning")
         }
         else{
            let text = document.getElementById('mytextarea').value;
            var newtext = "";
              text.split(" ").forEach((e) => {
                 let cameltext = e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
                  newtext =  newtext + " " + cameltext ;
              })
                setText(newtext);
                props.showAlert("Converted to Camelcase" , "success")
         }
    }
    const handleOnchange = (e) => {
        console.log("clicked");
        setText(e.target.value);
    }
    const clear = () =>{
        if(document.getElementById('mytextarea').value === ""){
            props.showAlert("Textarea is blank" , "warning")
         }
        else{
            setText("");
            props.showAlert("All texts cleared" , "success")
        }
    }
    const copy = () =>{
        if(document.getElementById('mytextarea').value === ""){
            props.showAlert("Textarea is blank" , "warning")
         }
         else{
        var text = document.getElementById('mytextarea');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard" , "success");
         }
    }

    const handlepaste = async () =>{
         
            if("clipboard" in navigator){
                const clipboardtext = await navigator.clipboard.readText();
                setText(clipboardtext);
                props.showAlert("Pasted" , "success")
            }
            else{
                alert("Your browser doesnt support clipboard API");
            }
    }
    const remove = () => {
        if(document.getElementById('mytextarea').value === ""){
            props.showAlert("Textarea is blank" , "warning")
         }
         else{
            newtext = text.split(/[ ]+/);
            setText(newtext.join(" "));
            props.showAlert("removed all extra spaces" , "success");
         }
    }
    const colors = ["white" , 'black' , 'grey' , 'green' , 'yellow' ,'orange' , "pink" , 'blue' , 'purple'];
    const changeIndex = () =>{
        setindex(index+1);
    }
    if(index > colors.length){
        index = 0;
    }
    const colorChange = () => {
        if(document.getElementById('mytextarea').value === ""){
            props.showAlert("Textarea is blank" , "warning")
         }
         else{
        changeIndex();
        console.log(index);
        setcolor(colors[index]);
        props.showAlert(`Color changed to ${colors[index]}` , "success");
         }
    }
    const fonts = ['Courier New',  'Arial Narrow','fantasy' , 'cursive'];
    const fontChange = () => {
        if(document.getElementById('mytextarea').value === ""){
            props.showAlert("Textarea is blank" , "warning")
         }
         else{
        changeIndex();
        console.log(index);
        setfont(fonts[index]);
         }
    }

    const sizeChangeup = () => {
        if(document.getElementById('mytextarea').value === ""){
            props.showAlert("Textarea is blank" , "warning")
         }
         else{
        setsize(tsize+2);
        props.showAlert("Font-size increased" , "success");
         }
    }
    const sizeChangedn = () => {
        if(document.getElementById('mytextarea').value === ""){
            props.showAlert("Textarea is blank" , "warning")
         }
         else{
        setsize(tsize-2);
        props.showAlert("Font size decreased" , "success");
         }
    }
    
    const alignChange = () => {
        if(document.getElementById('mytextarea').value === ""){
            props.showAlert("Textarea is blank" , "warning")
         }
         else{
        let align = document.querySelector('select').value;
        setalign(align);
         }
    }
    
  return (
    <>
        <form>
             <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1"><h3>{props.heading}</h3></label>
                <textarea onChange={handleOnchange} value={text} style={{backgroundColor: props.mode === "light" ? "white" : "#322e2e" , color: tcolor , fontFamily: tfont , fontSize: tsize , textAlign: talign }} className="form-control" id="mytextarea" rows="5"></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={uppercase} type="button">Convert to uppercase</button>
            <button className='btn btn-primary mx-2' onClick={lowercasee} type="button">Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={camelcase} type="button">Convert to CamelCase</button>
            <button className='btn btn-primary mx-2' onClick={clear} type="button">Clear All</button>
            <button className='btn btn-primary mx-2 my-2' onClick={copy} type="button">Copy All</button>
            <button className='btn btn-primary mx-2 my-2' onClick={handlepaste} type="button">Paste All</button>
            <button className='btn btn-primary mx-2 my-2' onClick={remove} type="button">Remove all extra Spaces</button>
            <button className='btn btn-primary mx-2 my-2' onClick={colorChange} type="button">Change Text-Color</button>
            <button className='btn btn-primary mx-2 my-2' onClick={fontChange} type="button">Change Text-Font</button>
            <button className='btn btn-primary mx-2 my-2' onClick={sizeChangeup} type="button">Increase Font-Size</button>
            <button className='btn btn-primary mx-2 my-2' onClick={sizeChangedn} type="button">Decrease Font-Size</button>
            <select name="align" id="text-align" onClick={alignChange} className="button btn ">Change Text-align
                <option   value="justify">Justify</option>
                <option  value="center">Center</option>
                <option value="right">Right Align</option>
                <option  value="left">Left Align</option>
            </select>
        </form>
        <div className="container2 my-3">
            <h1>Your text summery</h1>
            <p> {text.split(" ").length} words {text.length} charecters</p>
            <h3>Text Preview</h3>
            <p>{text === "" ? "Enter something":text}</p>
        </div>
        {/* props.mode === 'light'?"black":"white" */}
    </>
  )
}
