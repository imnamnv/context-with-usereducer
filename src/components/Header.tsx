import { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
const Header = () => {
  const { state } = useContext(AuthContext);
  return <>Header-- {`${state.isSignedUp}`}</>;
};
export default Header;
