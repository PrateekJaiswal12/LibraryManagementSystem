import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/slices/AuthSlice";

const LoginForm = ({ toggleRegister }) => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const auth = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (emailRef && emailRef.current && passwordRef && passwordRef.current) {
      dispatch(loginUser({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }))
    }
  };

  return (
    <Card className="w-full bg-slate-50">
      <CardHeader>
        <CardTitle className='text-center'>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter a valid email"
                name="email"
                required
                ref={emailRef}
              />
              {auth.error ? (
                <p className="text-red-600 text-sm">* invalid email or password</p>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter a valid password"
                name="password"
                required
                ref={passwordRef}
              />
              {auth.error ? (
                <p className="text-red-600 text-sm">* invalid email or password</p>
              ) : (
                <></>
              )}
            </div>
            <p className="text-sm">
              Don't have an account? 
              <span className="text-cyan-600 cursor-pointer ml-0.5 hover:text-cyan-500 hover:underline" onClick={toggleRegister}>
                Register here
              </span>
            </p>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleLogin}>Login</Button>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;