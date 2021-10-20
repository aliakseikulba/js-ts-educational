import React from 'react';

export type manType = {
  name: string,
  age: number,
  lessons: Array<{title: string}>,
  address: {title: string}
}

type PropsType = {
  title: string
  man: manType
  skills: Array<string>
}

const Destructuring: React.FC<PropsType> = ({title, man, ...props}) => {

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {man.name}
      </div>
      <div>{props.skills}</div>
    </div>
  );
};

export default Destructuring;