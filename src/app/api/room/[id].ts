import type { NextApiRequest, NextApiResponse } from "next";
import RoomJson from "@jsondata/room-json.json";

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  //

  const result = await fetch(`https://aaron.spring.server.com/api/room/${id}`);
  // B) 안 : 여러분들 Spring 개발하고 연결할때
  return result;
  // A) 안 : JSON 더미
  // return RoomJson
}
