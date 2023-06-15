import React, { useEffect, useState } from "react";

import { TweetCard } from "../TweetCard/TweetCard";

import { fetchTweets } from "./../../shared/services/tweets-api";

import s from "./tweetslist.module.css";

export const TweetsList = () => {
  const [tweets, setTweets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tweetsPerPage] = useState(3);

  useEffect(() => {
    fetchTweets(setTweets);
  }, []);

  const totalTweets = tweets.length;
  const lastPage = Math.ceil(totalTweets / tweetsPerPage);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
  };

  const showLoadMoreButton = currentPage < lastPage;

  const visibleTweets = tweets.slice(0, currentPage * tweetsPerPage);

  const handleFollow = (tweetId, setTweets) => {
    setTweets((prevTweets) => {
      const updatedTweets = prevTweets.map((tweet) =>
        tweet.id === tweetId
          ? {
              ...tweet,
              isFollowing: !tweet.isFollowing,
              followers: tweet.isFollowing
                ? tweet.followers - 1
                : tweet.followers + 1,
            }
          : tweet
      );
      localStorage.setItem("tweets", JSON.stringify(updatedTweets));
      return updatedTweets;
    });
  };

  return (
    <>
      <ul className={s.container}>
        {visibleTweets.map((tweet) => (
          <TweetCard
            key={tweet.id}
            tweet={tweet}
            handleFollow={() => handleFollow(tweet.id, setTweets)}
          />
        ))}
      </ul>
      {showLoadMoreButton && (
        <button onClick={handleLoadMore}>LOAD MORE</button>
      )}
    </>
  );
};
