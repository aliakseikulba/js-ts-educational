import React, {ChangeEvent} from 'react';


const User = () => {

  const deleteFunc = () => {
    alert('deleted');
  };

  const addFunc = () => {
    alert('added');
  };

  const onContentChange = () => {
    console.log('changed');
  };

  const onBlurEvent = () => {
    console.log('unfocused');
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('number changed' + e.currentTarget.value);
  }

  return (
    <div>
      <textarea
        onChange={onContentChange}
        onBlur={onBlurEvent}
      >User</textarea>
      <button onClick={deleteFunc}>delete</button>
      <button onClick={addFunc}>add</button>
      <input onChange={onInputChange} type="number"/>
    </div>
  );
};

export default User;