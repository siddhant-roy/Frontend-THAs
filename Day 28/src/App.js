import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import WeatherCard from "./components/WeatherCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App p-4">
      <Form />
      <WeatherCard />
    </div>
  );
}
