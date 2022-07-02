import createDataContext, { ActionType } from "./createDataContext";

export interface Auth {
  email: string;
  password: string;
}

export interface InitState {
  state: {
    isSignedIn: boolean;
    isSignedUp: boolean;
  };

  signup?: ({ email, password }: Auth) => void;
  signin?: ({ email, password }: Auth) => void;
  signout?: () => void;
}

const authReducer = (state: InitState, action: ActionType) => {
  switch (action.type) {
    case "signup":
      return { ...state, isSignedUp: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch: React.Dispatch<ActionType>) => {
  return ({ email, password }: Auth) => {
    dispatch({ type: "signup", payload: true });
    //make api request to signin with email and password
    //if we sign up, modify out state, and say that we are authenticated
    //if signing up failds, we probably need to reflect an error message somewhere
  };
};

const signin = (dispatch: React.Dispatch<ActionType>) => {
  return ({ email, password }: Auth) => {
    // try to signin
    // handle success by updating state
    // handle failure by showing error message
  };
};

const signout = (dispatch: React.Dispatch<ActionType>) => {
  return () => {
    //signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false, isSignedUp: false }
);
