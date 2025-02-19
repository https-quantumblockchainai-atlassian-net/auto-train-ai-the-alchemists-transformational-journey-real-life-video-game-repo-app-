import { HomeIcon, RocketIcon, UserPlusIcon } from "lucide-react";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "Get Started",
    to: "/get-started",
    icon: <RocketIcon className="h-4 w-4" />,
  },
  {
    title: "Sign Up",
    to: "/sign-up",
    icon: <UserPlusIcon className="h-4 w-4" />,
  },
];