"use client";

import { SessoionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => {
  return <SessoionProvider>{children}</SessoionProvider>;
};

export default AuthProvider;
