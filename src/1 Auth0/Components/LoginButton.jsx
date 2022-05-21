import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button className="bg-blue-500 text-md px-6 py-2  hover:cursor-pointer text-white shadow rounded  my-5" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
