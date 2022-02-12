import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App() {

  const [Items,setItems]=React.useState([]);
 
    function handleNote(note){
      console.log("here in handleClick");
   
     console.log(note);

     setItems( (prevValue)=>{
       return [...prevValue,note];
     });

     console.log(Items);
     
      
    
    }

    function handleDelete(id){
      console.log("here on delete");

      setItems( (prevValue)=>{
        return prevValue.filter( (num,index)=>{
          return id!==index;
        })
      })
    }



    
  return (
   
    




    <div>
      <Header />
      <CreateArea
      addNote={handleNote}
      
       />
      { Items.map( (item,index) => {
         return <Note
         id={index}
        title={item.noteTitle}
        content={item.noteContent}
        onDelete={handleDelete}
        


          />;
       })}
      
      <Footer />
    </div>
  );
}

export default App;