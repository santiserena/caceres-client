import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

export default function Login(): JSX.Element {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const log_in = async () => {
    try {
      await signInWithEmailAndPassword(auth, user, password);
      if (auth.currentUser?.email) navigate("/admin");
    } catch (error) {
      alert("Please check the username and password again");
    }
  };

  return (
    <div>
      <label>email</label>
      <input
        onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
          setUser(ev.target.value)
        }
      />

      <br />

      <label>password</label>
      <input
        type="password"
        onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
          setPassword(ev.target.value)
        }
      />

      <br />

      <button onClick={log_in}>Log in</button>
    </div>
  );
}
