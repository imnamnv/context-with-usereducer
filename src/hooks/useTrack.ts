import { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Context as TrackContext } from "../context/TrackContext";

const useTrack = () => {
  const { createTrack } = useContext(TrackContext);
  const { state } = useContext(AuthContext);

  const saveTrack = () => {
    createTrack(state);
  };

  return [saveTrack];
};

export default useTrack;
