import React from 'react';
import { globalContext } from './context';

//db
import { discussions } from './db/discussions';

//components
import Comments from './components/comments';

//styles
import './style/main.scss';

//types
import { InitialState } from './types/types';

const App = () => {
  const [state, setState] = React.useState<InitialState>({
    comments: discussions,
    replyId: -1,
    showReply: false
  });

  return (
    <globalContext.Provider value={{ state, setState }}>
      <Comments />
    </globalContext.Provider>
  );
};

export default App;
