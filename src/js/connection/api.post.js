export async function apiPOST(url, body = undefined) {
  if (!body || !url) return false;

  const data = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((e) => {
      return e;
    });
}
