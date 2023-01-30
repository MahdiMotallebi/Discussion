import React from 'react';
import { useGlobalContext } from '../context';

//icons
import { BsHandThumbsUpFill } from 'react-icons/bs';

//helper
import { SplitName, timeSince } from '../helper';

//types
import { IComment } from '../types/types';

interface Props {
  reply: IComment;
}
const Replies: React.FC<Props> = ({ reply }) => {
  const { state, setState } = useGlobalContext();
  const { id, date, user, text, likes, iLikedIt } = reply;
  const handleLike = () => {
    const newComments = state.comments.map((comment) => {
      const replies = comment.replies.map((rComment) => {
        if (rComment.id === id && !iLikedIt) {
          return {
            ...rComment,
            likes: rComment.likes + 1,
            iLikedIt: true
          };
        } else if (rComment.id === id && iLikedIt) {
          return {
            ...rComment,
            likes: rComment.likes - 1,
            iLikedIt: false
          };
        }
        return rComment;
      });
      comment.replies = [...replies];
      return comment;
    });

    setState({ ...state, comments: newComments });
  };

  return (
    <div className="wrapper-reply">
      {user.avatar ? (
        <img src={user?.avatar} alt="profile-img" className="avatar" />
      ) : (
        <div className="no_avatar">{SplitName(user.name)}</div>
      )}

      <div className="content">
        <span className="name">{user.name}</span>
        <span className="time">{timeSince(date)}</span>
        <p className="text">{text}</p>
        <div className="reply_section">
          <button
            onClick={handleLike}
            className={`like ${iLikedIt && 'iLikedIt'}`}
          >
            <BsHandThumbsUpFill
              color="#aaa"
              className={`${iLikedIt && 'thumb_like'}`}
            />

            {likes}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Replies;
