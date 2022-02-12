
import React from "react";

function CreateArea(props) {

  const [Text,setText]=React.useState({
    noteTitle:"",
    noteContent:""
   });

   const [Items,setItems]=React.useState([]);


    function handleChange(event){
      var textName=event.target.name;
    
      var textValue=event.target.value;
    

      setText( (prevValue)=>{
       
        
        if(textName==="title"){
          return{
          noteTitle:textValue,
          noteContent:prevValue.noteContent
          }

        }else{


          return {
          noteTitle:prevValue.noteTitle,
          noteContent:textValue
          }

        }
        
      });

      console.log(Text);

    }

    function handleClick(event){
      props.addNote(Text);
      setText({
        noteTitle:"",
        noteContent:""
      });
      event.preventDefault();

    }


   



  return (
   

    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={Text.noteTitle}  / >
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={Text.noteContent} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
