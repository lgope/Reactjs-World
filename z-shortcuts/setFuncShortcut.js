const [comment, setComment] = useState(task.comment);

const handleTextFieldChange = (mySetFunction, event) => {
  mySetFunction(event.currentTarget.value);
};

<Input
  type='text'
  name='comment'
  id='comment'
  onChange={e => handleTextFieldChange(setComment, e)}
/>;

/**
 * OR
 */

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const setInput = setter => event => {
  setter(event.currentTarget.value);
};

// demo

<Input
  type='text'
  name='username'
  id='username'
  onChange={setInput(setUsername)}
/>;
