import { useSelector } from "react-redux";

export function useAuth() {
  const { email, token, id, password } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
    password,
  };
}

export const getUserId = (state) => state.user.id;

export const getUserPass = (state) => state.user.password;
