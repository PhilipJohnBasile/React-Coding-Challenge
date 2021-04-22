import { MessageColumn } from "./message-column";

const filterMessages = (priority, messages, cleared) => {
  return messages.filter(message => {
    return !cleared[message.id] && message.priority === priority;
  });
};

const messageTypes = ["Error Type 1", "Warning Type 2", "Info Type 3"];

export const MessageColumns = ({ messages, cleared, handleClearMessage }) => {
  const mapMessageTypes = (messageType, index) => (
    <MessageColumn
      title={messageType}
      messages={filterMessages(index + 1, messages, cleared)}
      handleClearMessage={handleClearMessage}
      key={messageType}
    />
  );

  return <>{messageTypes.map(mapMessageTypes)}</>;
};
