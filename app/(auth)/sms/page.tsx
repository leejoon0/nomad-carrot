import { useActionState } from "react";
"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import { smsLogIn } from "./actions";

const initialState = {
  token: false,
  error: undefined,
};

export default function SMSLogIn() {
  const [state, dispatch] = useActionState(smsLogIn, initialState);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        { state.token ? (<Input
          name="token"
          type="number"
          placeholder="Verification code"
          required
        />) : (<Input
        name="phone"
        type="text"
        placeholder="Phone number"
        required
        errors={state.error?.formErrors}
      />)}
      <Button text={state.token ? "Verify Token" : "Send Verification SMS"} />
      </form>
    </div>
  );
}
