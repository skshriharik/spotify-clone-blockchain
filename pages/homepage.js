import Nav from "../components/nav";
import { useState, useEffect } from "react";
import Activity from "../components/activity";
import Header from "../components/Header";
import useSpotify from "../hooks/useSpotify";

const HomePage = () => {
  const [showUploadMusic, setShowUploadMusic] = useState(false);
  const [title, setTitle] = useState("");
  const [musicUrl, setMusicUrl] = useState("");
  const [songs, setSongs] = useState([]);

  const { newMusic, getSongs } = useSpotify(
    musicUrl,
    title,
    setTitle,
    setMusicUrl,
    setShowUploadMusic
  );
  return (
    <div className="flex">
      <Nav />
      <div className="w-full">
        {/* Start coding here */}
        <Header setShowUploadMusic={setShowUploadMusic} />
      </div>
      <Activity />
    </div>
  );
};

export default HomePage;
