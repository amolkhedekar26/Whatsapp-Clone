import { Avatar } from "@material-ui/core";
import TouchRipple from "@material-ui/core/ButtonBase/TouchRipple";
import React from "react";
import styles from "./SidebarChatItem.module.scss";

const SidebarChatItem = ({
  id,
  profileImage,
  userName,
  lastMessage,
  onClick,
  activeItem,
}) => {
  const rippleRef = React.useRef(null);
  const onRippleStart = (e) => {
    rippleRef.current.start(e);
  };
  const onRippleStop = (e) => {
    rippleRef.current.stop(e);
  };
  return (
    <div
      id={id}
      className={
        activeItem
          ? [styles.chat_item, styles.active].join(" ")
          : styles.chat_item
      }
      onMouseDown={onRippleStart}
      onMouseUp={onRippleStop}
      onClick={onClick}
    >
      <TouchRipple ref={rippleRef} center={false} />
      <div className={styles.chat_info_container}>
        <div className={styles.avatar}>
          <Avatar src={profileImage} className={styles.profile_pic} />
        </div>
        <div className={styles.chat_info}>
          <h6 className={styles.username}>{userName}</h6>
          <p className={styles.last_message}>{lastMessage}</p>
        </div>
      </div>
      <div className={styles.chat_time}>
        <p className={styles.recent_time}>05:15 am</p>
      </div>
    </div>
  );
};

export default SidebarChatItem;
