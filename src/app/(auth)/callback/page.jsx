import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

const AuthCallbackpage = () => {
  const auth = onAuthenticateUser();

  if (auth.status === 200 || auth.status === 201) {
    redirect("/Dashboard");
  } else if (
    auth.status === 400 ||
    auth.status === 403 ||
    auth.status === 500
  ) {
    redirect("/sign-in");
  }
};

export default AuthCallbackpage;
