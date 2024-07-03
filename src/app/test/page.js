"use client";

import React, { useEffect, useState } from "react";
import TestAPI from "@/components/test/test";
import CreateLikesAPI1 from "@/components/test/createLikes";
import { useRouter } from "next/navigation";

export default function Like() {
  const [data2, setData2] = useState([]);
  const [totals, setTotals] = useState({
    dislike: 0,
    like: 0,
    love: 0,
    happy: 0,
  });
  const router = useRouter();

  const fetchData = async () => {
    try {
      const resp = await TestAPI();
    //   console.log(resp?.data);

      if (resp?.data.success === true) {
        setData2(resp.data.data);
      }
    } catch (error) {
      console.log("Errpr fecthing data :", error);
    }
  };

  const calculateTotal = (datas) => {
    let totals = { dislike: 0, like: 0, love: 0, happy: 0 };
    datas.forEach((item) => {
      totals.dislike += item.dislike;
      totals.like += item.like;
      totals.love += item.love;
      totals.happy += item.happy;
    });

    return totals;
  };

  const sendLikes = async (data) => {
    // console.log(data);
    try {
      const resp = await CreateLikesAPI1(data);

    //   console.log(resp);

      if (resp?.created === 1) {
        fetchData();
        // setTotals(calculateTotal(data2))
        // router.refresh()
      }
    } catch (error) {
      console.log("Error sending data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data2.length > 0) {
      setTotals(calculateTotal(data2));
    }
  }, [data2]);

  return (
    <>
    <h1 className="text-center text-2xl text-black font-bold mb-4">Rate Me</h1>
      {data2.length > 0 ? (
        <div className="flex w-full justify-center gap-6">
          <div className="text-center">
            <p>{totals.dislike}</p>
            <button
              onClick={() =>
                sendLikes({
                  dislike: 1,
                  like: 0,
                  love: 0,
                  happy: 0,
                })
              }
            >
              <p className="text-2xl">👎</p>
              <h1>Dislike</h1>
            </button>
          </div>
          <div className="text-center">
            <p>{totals.like}</p>
            <button
              onClick={() =>
                sendLikes({
                  dislike: 0,
                  like: 1,
                  love: 0,
                  happy: 0,
                })
              }
            >
              <p className="text-2xl">👍</p>
              <h1>Like</h1>
            </button>
          </div>
          <div className="text-center">
            <p>{totals.love}</p>
            <button
              onClick={() =>
                sendLikes({
                  dislike: 0,
                  like: 0,
                  love: 1,
                  happy: 0,
                })
              }
            >
              <p className="text-2xl">❤️</p>
              <h1>Love</h1>
            </button>
          </div>
          <div className="text-center">
            <p>{totals.happy}</p>
            <button
              onClick={() =>
                sendLikes({
                  dislike: 0,
                  like: 0,
                  love: 0,
                  happy: 1,
                })
              }
            >
              <p className="text-2xl">😊</p>
              <h1>Happy</h1>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full">
          <p className="text-center">Loading...</p>
        </div>
      )}
    </>
  );
}
