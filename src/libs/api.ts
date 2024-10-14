export const api = async (url: string) => {
  let op = "?";
  if (url.includes("?")) {
    op = "&";
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_JIKAN_BASE_API_URL}${url}${op}sfw=true`
    );
    const data = await res.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.log(error);
  }
};
