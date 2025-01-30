import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
import { registerUser, resetRegisterSuccess } from '@/redux/slices/AuthSlice';

const RegisterForm = ({ toggleLogin }) => {
    
    const authState = useSelector((state) => state.authentication);
    const dispatch = useDispatch();

    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleRegisterUser = (e) => {
        e.preventDefault();
        if(
            firstNameRef && firstNameRef.current &&
            lastNameRef && lastNameRef.current &&
            emailRef && emailRef.current &&
            passwordRef && passwordRef.current
        ) {
            dispatch(
                registerUser({
                    type: 'PATRON',
                    firstName: firstNameRef.current.value,
                    lastName: lastNameRef.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                })
            )
        }
    }

    useEffect(() => {
        return (() => {
            dispatch(resetRegisterSuccess());
        })
    }, []);

  return (
     <Card className="w-full bg-slate-50">
          <CardHeader>
            <CardTitle className='text-center'>Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="firstName"
                    placeholder="Enter a valid firstName"
                    name="firstName"
                    required
                    ref={firstNameRef}
                  />
                  {authState.error ? (
                    <p className="text-red-600 text-sm">* invalid cridentials</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="lastName"
                    placeholder="Enter a valid lastName"
                    name="lastName"
                    required
                    ref={lastNameRef}
                  />
                  {authState.error ? (
                    <p className="text-red-600 text-sm">* invalid cridentials</p>
                  ) : (
                    <></>
                  )}
                </div>
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
                  {authState.error ? (
                    <p className="text-red-600 text-sm">* invalid cridentials</p>
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
                  {authState.error ? (
                    <p className="text-red-600 text-sm">* invalid cridentials</p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full" onClick={handleRegisterUser}>Register</Button>
            {
                authState.registerSuccess ? 
                <p className='text-center'>* Registered Successfully!!!
                    <span className='text-cyan-600 ml-0.5 cursor-pointer hover:text-cyan-500' onClick={toggleLogin}>Login here.</span>
                </p>
                : <></>
            }
            </CardFooter>
        </Card>
  )
}

export default RegisterForm
