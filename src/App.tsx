import "./App.css";
import MoneyForm from "./MoneyForm";
import Roster from "./Roster";
import { TeamStoreProvider } from "./TeamStore";
import Athlete from "./Athlete";
import TeamNameInfo from "./TeamNameInfo";

const lebronJames = new Athlete("Lebron James", 37, 9);
const stephCurry = new Athlete("Steph Curry", 34, 5);

const getPlayersFromBackend = () => [lebronJames, stephCurry];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TeamStoreProvider players={getPlayersFromBackend()}>
          <TeamNameInfo />
          <Roster />
          <MoneyForm />
        </TeamStoreProvider>
      </header>
    </div>
  );
}

export default App;

