import React,{useState} from "react";
import { Grid,Button } from '@material-ui/core';
import './ItemShareForm.css'

function AddInput() {
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  return (
    <div style={{paddingTop:10}}>
      
      {fields.map((field, idx) => {
        return (
          <Grid container xs={12} sm={12} key={`${field}-${idx}`} style={{padding:10}}>
             <Grid container xs={10} sm={10}>
            <textarea
            className="add_input"
              type="text"
              placeholder="Enter text"
              onChange={e => handleChange(idx, e)}
            /></Grid>{idx===0 ?
              (null)
            : <Grid container
            direction="row"
            justify="center"
            alignItems="center" xs={2} sm={2}><Button type="button" onClick={() => handleRemove(idx)} style={{height:30,width:20,backgroundColor:"#dc004e",color:"#FFF"}}>
            X
          </Button></Grid>}
            
          </Grid>
        );
      })}
      <Button type="button" onClick={() => handleAdd()} style={{margin:10,backgroundColor:"#1976d2",color:"#FFF"}} >
        Add another
      </Button>
    </div>
  );
}

export default AddInput;