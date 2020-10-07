// long way
const [firstName, setFirstName] = useState('');
const [email, setEmail] = useState('');
const [age, setAge] = useState('');

// shortcut
const [person, setPerson] = useState({ firstName: '', email: '', age: '' });

const handleChage = e => {
  // dnamic object properties
  setPerson({ ...person, [e.target.name]: e.target.value });
};

// use
<input
  type='text'
  id='firstName'
  name='firstName'
  value={person.firstName}
  onChange={handleChage}
/>;
