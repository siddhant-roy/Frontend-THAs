import { useDispatch, useSelector } from "react-redux";
import { formInput } from "./actions";
import "./styles.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

export default function App() {
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="form-container">
        <h1> Form using React and Redux</h1>
        <div className="input-form">
          <h2>Input</h2>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => dispatch(formInput({ name: e.target.value }))}
          />
          <br />
          <br />
          <input
            type="mail"
            placeholder="Email"
            onChange={(e) => dispatch(formInput({ email: e.target.value }))}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => dispatch(formInput({ password: e.target.value }))}
          />
        </div>
        <br />
        <br />
        <div className="data-form">
          <h2>Output</h2>
          <h3>
            <strong style={styles.underline}>Username</strong>:{" "}
            <span>{formState.name}</span>
          </h3>
          <h3>
            <strong style={styles.underline}>Email</strong>:{" "}
            <span>{formState.email}</span>
          </h3>
          <h3>
            <strong style={styles.underline}>Password</strong>:{" "}
            <span>{formState.password}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
