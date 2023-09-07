"use client";
import { useState } from "react";

// This button takes in a whoAmIAction(server action created in page.tsx) that returns a promise of the user name
export default function WhoAmIButton({ whoAmIAction, }: { whoAmIAction: () => Promise<string>; }) {
  const [name, setName] = useState<string>();
  return (
    <div>
      <button
        onClick={async () => {
            // Fetch the user name by calling whoAmIAction() and set to the state variable name
          setName(await whoAmIAction());
        }}
      >
        Who Am I?
      </button>
      {name && <div>You are {name}</div>}
    </div>
  );
}