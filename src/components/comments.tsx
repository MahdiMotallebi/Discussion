import React from 'react';
import { useGlobalContext } from '../context';

//components
import FormDiscussion from './formDiscussion';
import ParentComment from './parentComment';

const Comments = () => {
  const { state } = useGlobalContext();
  return (
    <>
      <div className="form_wrapper">
        <FormDiscussion />
      </div>
      {state.comments.map((comment) => {
        return <ParentComment comment={comment} />;
      })}
    </>
  );
};

export default Comments;
