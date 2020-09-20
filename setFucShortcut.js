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
