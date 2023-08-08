import {useState} from 'react';

export default function Form(){
  const [answer, setAnswer]=useState('');
  const[error,setError]=useState(null);
  const[status,setStatus]=useState('typing')

  if(status==='success'){
    return <h1> ur righttt</h1>
  }

  async function handleSubmit(e){
    e.preventDefault();
    setStatus('submitting');
    try{
      await submitForm(answer);
      setStatus('success');
    }
    catch(err){
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextAreaChange(e){
    setAnswer(e.target.value);
  }

  return(
    <>
      <h2>CITY QUIZ</h2>
      <p>some random text about a question nobody gives 2 fucks about</p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextAreaChange}
          disabled= {status==='submitting'}>
        </textarea>
        <br/>
        <button  disabled={answer.length===0 || status==='submitting'}>Submit</button>
        {error !==null && 
        <p className="Error">
          {error.message}
          </p>
        }
      </form>
    </>
  )
}


function submitForm(answer){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let shouldError=answer.toLowerCase() !=='question';
      if(shouldError){
        reject(new Error ('Try again!!!!'));
      }
      else{
        resolve();
      }
    },1500);
  });
}