import roomsData from "@data/roomsData.json";

/*
 * 제공되는 HTTP 메서드 목록
 * GET, POST, PUT, PATCH, DELETE, HEAD
 */

export async function GET(
  request, // request (Type : Request) : 웹 서버에 의해 수신된 HTTP 요청에 대한 정보를 포함하는 객체
  { params }
) {
  const roomData = roomsData.dataList.find(
    (data) => data.id === parseInt(params.id)
  );
  if (roomData === undefined)
    throw new Error(`not found data. FoundID : ${params.id}`);

  return Response.json({ data: roomData });
}
