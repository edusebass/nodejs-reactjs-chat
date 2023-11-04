import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('f9ec984e-8c28-4275-be75-34a5c5b2ede5', props.user.username, props.user.secret)
  return (
    <div style={{height: '100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
    
  );
};

export default ChatsPage;
