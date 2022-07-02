import React from "react";
import createDataContext, { ActionType } from "./createDataContext";

const trackRecuder = (state: any, action: ActionType) => {
  switch (action.type) {
    default:
      break;
  }
};

const createTrack = (dispatch: React.Dispatch<ActionType>) => {
  return async (name: string) => {
    console.log("name", name);
    // call api

    // dispatch
  };
};

export const { Context, Provider } = createDataContext(
  trackRecuder,
  { createTrack },
  []
);
