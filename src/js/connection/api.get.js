export async function apiGET(url) {
  if (!url) return false;

  const data = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });

  return data;
}
