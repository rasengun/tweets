import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { TweetCard } from "../TweetCard/TweetCard";
import Filter from "../Filter";

import { fetchTweets } from "./../../shared/services/tweets-api";

import { getFilter } from "../redux/Filter/selector";

import s from "./tweetslist.module.css";

export const TweetsList = () => {
  const [tweets, setTweets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tweetsPerPage] = useState(3);
  const { filterOption } = useSelector(getFilter);

  useEffect(() => {
    fetchTweets(setTweets);

    if (currentPage > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

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

  const filteredTweets = visibleTweets.filter((tweet) => {
    if (filterOption === "show all") {
      return true;
    } else if (filterOption === "followings") {
      return tweet.isFollowing;
    } else if (filterOption === "follow") {
      return !tweet.isFollowing;
    } else {
      return true;
    }
  });

  return (
    <>
      <Filter />
      <ul className={s.container}>
        {filteredTweets.map((tweet) => (
          <TweetCard
            key={tweet.id}
            tweet={tweet}
            handleFollow={() => handleFollow(tweet.id, setTweets)}
          />
        ))}
      </ul>
      {showLoadMoreButton && (
        <button onClick={handleLoadMore} className={s.btnLoad}>
          LOAD MORE
        </button>
      )}
    </>
  );
};
