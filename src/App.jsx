import {useStat} from "react";
import { Route, Routes } from 'react-router-dom';

import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import NavBar from "./components/NavBar";
import MailboxDetail from "./components/MailboxDetail";

const initialState = [
  { _id: 1, name: 'Sara', email: 'sara123@gmail.com' , adress: 295, phone: 789654321},
  { _id: 2, name: 'Abdulaziz', email: 'az892@gmail.com' , adress: 186, phone: 98374773},
  { _id: 3, name: 'Mubarak', email: 'mbk47@gmail.com' , adress: 9975, phone: 837759075 },
  { _id: 4, name: 'Saud', email: 'busaud8@gmail.com' , adress: 399, phone: 983783464 },
  { _id: 5, name: 'Hamad', email: '7madqt@gmail.com' , adress: 203, phone: 986464833 },
]
const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

  const addMailbox = (NewMailboxData) => {
    newMailboxData._id = Math.random();
    setMailboxes([newMailboxData, ...mailboxes]); 
};

return (
<>
<NavBar />
<h1>Mailbox</h1>
<Routes>
  <Route path="/" element={<h2>Home Page</h2>} />
   <Route path="/mailbox" element={<MailboxList mailboxes={mailboxes} />} />
   <Route path="/mailbox/new" element={<MailboxForm addMailbox={addMailbox} />} />
   <Route
          path="/mailbox/:mailboxId"
          element={<MailboxDetail mailbox={mailbox}/>}
        />
        <Route path="*" element={<h2>Page Not Found</h2>} />
  </Routes>
</>
)
};

export default App;