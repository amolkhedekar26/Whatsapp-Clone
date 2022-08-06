import { Avatar, IconButton } from "@material-ui/core";
import { Add, DonutLarge, MoreHoriz, Search } from "@material-ui/icons";
import React, { useState } from "react";
import SidebarChatItem from "../SidebarChatItem";
import ProfileIcon from "../../assets/images/profile.svg";
import User1Icon from "../../assets/images/user1.svg";
import User2Icon from "../../assets/images/user2.svg";
import User3Icon from "../../assets/images/user3.svg";
import User4Icon from "../../assets/images/user4.svg";
import styles from "./Sidebar.module.scss";

const CHATS_LIST = [
  {
    id: 1001,
    profileImage: User1Icon,
    userName: "Nakula Bagchi",
    lastMessage: "Just idaes for next tme",
  },
  {
    id: 1002,
    profileImage: User2Icon,
    userName: "Wade Warren",
    lastMessage: "README .txt",
  },
  {
    id: 1003,
    profileImage: User3Icon,
    userName: "Reatha Beuyodin",
    lastMessage: "Hold on a second",
  },
  {
    id: 1004,
    profileImage: User4Icon,
    userName: "Dianne Russel",
    lastMessage: "Tom holand does actual stunts",
  },
  {
    id: 1005,
    profileImage: User1Icon,
    userName: "Nakula Bagchi",
    lastMessage: "Just idaes for next tme",
  },
  {
    id: 1006,
    profileImage: User2Icon,
    userName: "Wade Warren",
    lastMessage: "README .txt",
  },
  {
    id: 1007,
    profileImage: User3Icon,
    userName: "Reatha Beuyodin",
    lastMessage: "Hold on a second",
  },
  {
    id: 1008,
    profileImage: User4Icon,
    userName: "Dianne Russel",
    lastMessage: "Tom holand does actual stunts",
  },
  {
    id: 1009,
    profileImage: User1Icon,
    userName: "Nakula Bagchi",
    lastMessage: "Just idaes for next tme",
  },
  {
    id: 1010,
    profileImage: User2Icon,
    userName: "Wade Warren",
    lastMessage: "README .txt",
  },
  {
    id: 1011,
    profileImage: User3Icon,
    userName: "Reatha Beuyodin",
    lastMessage: "Hold on a second",
  },
  {
    id: 1012,
    profileImage: User4Icon,
    userName: "Dianne Russel",
    lastMessage: "Tom holand does actual stunts",
  },
];

const Sidebar = () => {
  const [activeChatItem, setActiveChatItem] = useState(CHATS_LIST[0].id);
  const handleChatItemClick = (e) => {
    const selectedId = e.target.id;
    setActiveChatItem(+selectedId);
  };
  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <Avatar src={ProfileIcon} className={styles.avatar} />
        <div className={styles.header_menu}>
          <IconButton>
            <DonutLarge className={styles.menu_icon} />
          </IconButton>
          <IconButton>
            <Add className={styles.menu_icon} />
          </IconButton>
          <IconButton>
            <MoreHoriz className={styles.menu_icon} />
          </IconButton>
        </div>
      </header>
      <div className={styles.search}>
        <div className={styles.search_container}>
          <Search className={styles.search_icon} />
          <input
            type="text"
            className={styles.search_input}
            placeholder="Search or Start a new chat"
          />
        </div>
      </div>
      <div className={styles.chats_list}>
        {CHATS_LIST.map((chatItem) => (
          <SidebarChatItem
            key={chatItem.id}
            id={chatItem.id}
            profileImage={chatItem.profileImage}
            userName={chatItem.userName}
            lastMessage={chatItem.lastMessage}
            onClick={handleChatItemClick}
            activeItem={chatItem.id === activeChatItem}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
