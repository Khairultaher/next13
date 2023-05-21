import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req) {
  const users = [
    { id: 1, name: "john" },
    { id: 2, name: "tony" },
    { id: 2, name: "khabib" }
  ];
  return new Response(JSON.stringify(users));
}
