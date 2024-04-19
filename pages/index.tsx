import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from 'next/link'

function index() {

  return <Link href='/api/auth/login'><b>Login</b></Link>;
}

export default index;