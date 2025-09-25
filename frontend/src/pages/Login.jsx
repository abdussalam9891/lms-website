import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from "react"

export const Login=()=> {

  const[signupInput, setSignupInput] = useState({name:"", email:"", password:""});
  const[loginInput, setLoginInput] = useState({email:"", password:""});

  const changeInputHandler = (e, type)=>{
    const{name, value} = e.target;
    if(type==="signup"){
      setSignupInput({...signupInput, [name]:value })
    }else{
      setLoginInput({...loginInput, [name]:value})
    }
  }

  const handleRegistration = (type)=>{
    const inputData = type==="signup" ? signupInput:loginInput;
    console.log(inputData);
  }



  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="signup">
        <TabsList>
          <TabsTrigger value="signup">Sign up</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign up</CardTitle>
              <CardDescription>
              Create a new account and click sign up when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" value={signupInput.name} placeholder="abdus" required="true" onChange={(e)=>changeInputHandler(e,"signup")} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" value={signupInput.email} placeholder="abc@gmail.com" required="true" onChange={(e)=>changeInputHandler(e,"signup")} />
              </div>
               <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input  type="password" name="password" value={signupInput.password} placeholder="123456abc" required="true" onChange={(e)=>changeInputHandler(e,"signup")} />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={()=>handleRegistration("signup")}>Sign up</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
              Login your password here. After signup, you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input  type="email" name="email" value={loginInput.email} placeholder="abc@gmail.com" required="true" onChange={(e)=>changeInputHandler(e,"login")} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                 <Input  type="password" name="password" value={loginInput.password} placeholder="abc123456" required="true" onChange={(e)=>changeInputHandler(e,"login")} />
              </div>
            </CardContent>
            <CardFooter>
              <Button  onClick={()=>handleRegistration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Login;
