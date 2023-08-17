import {useState} from 'react';

function NewTodoForm({onSubmit}){
    const [newItem, setNewItem] = useState<string>("");

    function handleItemAdd(e: React.ChangeEvent<HTMLInputElement>){
        setNewItem(e.target.value);
    }


    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        
        if(newItem==="") return;

        onSubmit(newItem);
        setNewItem("");
    }
    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" onChange={handleItemAdd} id="item"></input>
        </div>
        <button className="btn">Add</button>
      </form>
    )
}

export default NewTodoForm;