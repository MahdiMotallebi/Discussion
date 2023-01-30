import React from 'react';
import { useGlobalContext } from '../context';

//types
import { IComment, IDiscussion } from '../types/types';

const ReplyDiscussion = () => {
  const { state, setState } = useGlobalContext();

  const [valueInput, setValueInput] = React.useState<string>('');
  const replyComment = (e: React.FormEvent) => {
    e.preventDefault();
    const newComment: IComment = {
      id: Math.random(),
      date: 1600336812200,
      user: {
        name: 'nahdi babashli',
        avatar:
          'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
      },
      text: valueInput,
      likes: 0,
      iLikedIt: false
    };

    const newComments: IDiscussion[] = state.comments.map((comment) => {
      if (comment.id === state.replyId) {
        comment.replies.unshift(newComment);
      }
      return comment;
    });
    console.log(newComments);
    setState({ ...state, comments: newComments });
    setValueInput('');
  };
  return (
    <>
      <img
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        alt="profile-img"
        className="avatar form_avatar"
      />

      <form onSubmit={replyComment} className="form_discussion">
        <input
          type="text"
          className="input_discussion"
          placeholder="Reply"
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

export default ReplyDiscussion;
