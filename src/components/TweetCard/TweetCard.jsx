import logo from "../../images/logo.png";
import card from "../../images/card.png";

import s from "./tweetsCard.module.css";

export const TweetCard = ({ tweet, handleFollow }) => {
  return (
    <li>
      <div className={s.container}>
        <img src={logo} alt="logo" className={s.logo} />
        <div>
          <img src={card} alt="card" className={s.design} />
          <div className={s.line}></div>
          <img src={tweet.avatar} alt="user" className={s.user} />
          <p className={s.tweets}>{tweet.tweets} TWEETS</p>
          <p className={s.followers}>{tweet.followers} FOLLOWERS</p>
          <button
            type="button"
            onClick={handleFollow}
            className={tweet.isFollowing ? `${s.button} ${s.active}` : s.button}
          >
            {tweet.isFollowing ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </li>
  );
};
