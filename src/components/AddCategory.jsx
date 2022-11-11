import { useState } from "react"

//componente funcional
export const AddCategory = ({ onNewCategory }) => {

//hook de estado de los elementos que se actualizaran constantemente
     const [inputValue, setInputValue] = useState('')


     const onInputChange = ({target}) =>{
        
        setInputValue(target.value) 

     }
//evento que va al inicio del formulario
     const onSubmit = (event)=>{

            event.preventDefault();
            if( inputValue.trim().length <= 1)
            return;


            onNewCategory(inputValue.trim());
            //setCategories( categories => [ inputValue, ...categories] )
            setInputValue('');
     }

  //formulario que aparecera en la aplicasao
  return (
   <form onSubmit={ onSubmit }>
       <input 
           type="text"
           placeholder="escribe..."
           value={ inputValue }
           onChange={ onInputChange }
       />
   </form>
)
}
