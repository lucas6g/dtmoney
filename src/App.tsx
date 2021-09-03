
import { Dashboard } from "./components/Dashboard/Dashborad";
import { Header } from "./components/Header/Header";
import { NewTrasactionModal } from "./components/NewTrasactionModal/NewTransactionModal";
import { GlobalStyle } from "./styles/global";


export function App() {


 
  return (
    <>
      <Header />
      <Dashboard />
    <NewTrasactionModal />
    <GlobalStyle />
    </>
  );
}


