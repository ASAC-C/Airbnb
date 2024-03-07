const KAKAO_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getToken = async () => {
  const search = new URLSearchParams(window.location.search);
  const code = search.get("code");
  console.log("code");

  if (!code) {
    return {};
  }

  const param = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: KAKAO_API_KEY || " ",
    redirect_uri: "http://localhost:3000/users",
    code,
  });

  const response = await fetch("https://kauth.kakao.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    },
    body: param,
  });

  const result = await response.json();
  console.log("result: ", result);
  return result;
};
