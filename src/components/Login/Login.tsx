import { useState } from "react"

export default function Login(): JSX.Element {
    
    const [user , setUser] = useState ('');
    const [password , setPassword] = useState ('');

    const log_in = () =>{
        console.log('user-> ', user);        
        console.log('password-> ', password);
    }
  return (

    <div>
      <label>email</label>
      <input onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setUser(ev.target.value)}/>

      <br />

      <label>password</label>
      <input type='password' onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => setPassword(ev.target.value)}/>

      <br />

      <button onClick={log_in}>Log in</button>

    </div>
  );
}
