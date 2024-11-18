import { Link } from "react-router-dom";

const MailboxList = (props) => {
  return (
    <>
     <h2>Mailbox</h2>
      <ul>
        {props.mailbox.map((currentMailbox) => (
          <li key={currentMailbox.name}>
            <Link to={`/mailbox/${currentMailbox._id}`}>
              {currentMailbox.name}
            </Link>
          </li>
      ))}
      </ul>
        </>
  )
}

export default MailboxList;