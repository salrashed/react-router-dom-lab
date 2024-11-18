import { useParams } from "react-router-dom";

const MailboxDetails = () => {
  const { mailboxId } = useParams();

  const singleMailbox = props.mailbox.find((mailbox) => mailbox._id === Number(mailboxId));

  return (
    <>
    <h2>Mailbox Details</h2>
    <d1>
        <dt>Email</dt>
        <dd>{singleMailbox.email}</dd>
        <dt>Adress</dt>
        <dd>{singleMailbox.address}</dd>
        <dt>Phone</dt>
        <dd>{singleMailbox.phone}</dd>
    </d1>
    </>
  )
}

export default MailboxDetails;