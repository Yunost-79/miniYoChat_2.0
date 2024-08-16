import { useEffect, useRef } from 'react';

import Message from '../../../components/message/Message';

import '../MessageContainer.scss';

const CenterMessageContainer = () => {
  const MessageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (MessageListRef.current) {
      MessageListRef.current.scrollTop = MessageListRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="center" ref={MessageListRef}>
      <Message />
      <Message isOwnMassage={true} />
    </div>
  );
};

export default CenterMessageContainer;
