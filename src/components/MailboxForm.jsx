import { useStat } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: '',
  email: '',
  Aderss:0,
  phone: 0,
};

const MailboxForm = ({addMailbox}) => {
  const navigate = useNavigate();
  const [mailbox, setMailbox] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMailbox(mailbox);
    setMailbox(initialState);
    navigate("/mailbox");
  };

  const handleChange = ({target}) => {
    setFormData ({
      ...formData,
      [target.name]: target.value,
    });
};

return (
  <main>
    <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="adress">Adress:</label>
        <input
          type="number"
          id="adress"
          name="adress"
          value={formData.adress}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
  </main>
)
}

export default MailboxForm;