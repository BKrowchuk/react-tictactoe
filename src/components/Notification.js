const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      <p>That square is already taken!</p>
    </div>
  );
};

export default Notification;
