import React, { useContext } from 'react';
import { useGlobalContext } from '../context';

//types
import { IDiscussion } from '../types/types';

const FormDiscussion = () => {
  const { state, setState } = useGlobalContext();

  const [valueInput, setValueInput] = React.useState<string>('');
  const addComment = (e: React.FormEvent) => {
    e.preventDefault();

    const newComment: IDiscussion = {
      id: Math.random(),
      date: 1600336812200,
      user: {
        name: 'nahdi babashli',
        avatar:
          'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
      },
      text: valueInput,
      likes: 12,
      iLikedIt: false,
      replies: []
    };

    let newArray = [newComment, ...state.comments];
    setState({ ...state, showReply: false, comments: newArray });
    setValueInput('');
  };
  return (
    <>
      <img
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        alt="profile-img"
        className="avatar form_avatar"
      />

      <form onSubmit={(e) => addComment(e)} className="form_discussion">
        <input
          type="text"
          className="input_discussion"
          placeholder="Start a discussion"
          value={valueInput}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setValueInput(e.currentTarget.value)
          }
        />

        <button type="submit" className="form_btn"></button>
      </form>
    </>
  );
};

export default FormDiscussion;
