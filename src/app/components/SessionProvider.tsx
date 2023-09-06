// This Session Provider would share the session state across the app as context through out the app
"use client";// As this uses context
import { SessionProvider } from "next-auth/react";
 
export default SessionProvider;