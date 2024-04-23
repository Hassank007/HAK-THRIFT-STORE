import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return   <div className="flex items-center justify-center pb-36 pt-16">
  <SignIn />
</div>;
}