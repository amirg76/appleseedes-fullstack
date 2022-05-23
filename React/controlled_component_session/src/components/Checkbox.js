import React from 'react';

function Checkbox({ text, checkedC, id, handleChange }) {
  return (
    <>
      <input
        onChange={({ target }) => {
          handleChange(target.id);
        }}
        id={id}
        type='checkbox'
        checked={checkedC}
      />
      <label>{text}</label>
    </>
  );
}

export default Checkbox;
