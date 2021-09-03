import { Sumary } from "../Sumary/Sumary";
import { TrasactionTable } from "../TrasactionTable/TransactionTable";
import { Container } from "./DashboardStyles";

export function Dashboard(){

  return (
    <Container>
      <Sumary />
      <TrasactionTable />
      
    </Container>
  )

}