"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <main>
      {/* TO DO: ADD Auth Layout, so that we do not call Header again. */}
      <Header />
      <div className="flex flex-col w-6/12 mx-auto p-8 border-2 border-neutral-200 rounded-xl">
        <Label>Email*</Label>
        <Input
          onChange={(value) => {
            setEmail(value.target.value);
          }}
          className="mb-8"
        />
        <Label>Password*</Label>
        <Input className="mb-8" />
        <Button
          onClick={() => {
            //TO DO: Add logic for register
          }}
        >
          Sign Up
        </Button>
      </div>
    </main>
  );
}
