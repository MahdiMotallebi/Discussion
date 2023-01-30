import React from 'react';
import { useGlobalContext } from '../context';

//icons
import HiHandThumbUp from 'react-icons/ai';
import { SplitName, timeSince } from '../helper';

//types
import { IDiscussion } from '../types/types';

//components
import Replies from './replies';
import ReplyDiscussion from './replyDiscussion';

interface Props {
  comment: IDiscussion;
}

const ParentComment: React.FC<Props> = ({ comment }) => {
  const [showReply, setShowReply] = React.useState<boolean>(false);
  const { id, date, user, text, likes, iLikedIt, replies } = comment;
  const { state, setState } = useGlobalContext();

  const handleLike = () => {
    const newComments = state?.comments.map((comment) => {
      if (comment.id === id && !iLikedIt) {
        return {
          ...comment,
          likes: comment.likes + 1,
          iLikedIt: true
        };
      } else if (comment.id === id && iLikedIt) {
        return {
          ...comment,
          likes: comment.likes - 1,
          iLikedIt: false
        };
      }
      return comment;
    });

    setState({ ...state, comments: newComments });
  };

  const handleReply = () => {
    setShowReply(!showReply);
    setState({ ...state, replyId: id });
  };
  return (
    <div className="wrapper">
      {replies.length > 0 && <div className="left_line" />}
      <div className="parentComment">
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
              <span>👍</span>
              {likes}
            </button>
            <button onClick={handleReply} className="btn reply">
              reply
            </button>
          </div>
        </div>
      </div>
      {replies.map((reply) => {
        return <Replies reply={reply} />;
      })}
      {showReply && (
        <div className="reply_form_wrapper">
          <ReplyDiscussion />
        </div>
      )}
    </div>
  );
};

export default ParentComment;
