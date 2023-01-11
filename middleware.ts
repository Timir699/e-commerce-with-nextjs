import { NextResponse } from "next/server";

export default function middleware(req: any) {
  let verify = req.cookies.get("loggedIn");
  let url = req.url;

  if (!verify && url.includes("/profile")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (verify && url === "http://localhost:3000/loginPage") {
    return NextResponse.redirect("http://localhost:3000/profile");
  }

  if (!verify && url.includes("/myorder")) {
    return NextResponse.redirect("http://localhost:3000/");
  }
  if (!verify && url.includes("/orderConfirmPage")) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  if (verify && url === "http://localhost:3000/loginPage") {
    return NextResponse.redirect("http://localhost:3000/myorder");
  }

  if (verify && url === "http://localhost:3000/signUpPage") {
    return NextResponse.redirect("http://localhost:3000/");
  }
}
