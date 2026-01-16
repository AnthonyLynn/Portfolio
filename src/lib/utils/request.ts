function getResult(res: Response) {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
}

export async function request(
  url: string | URL | globalThis.Request,
  options?: RequestInit
) {
  return fetch(url, options)
    .then(getResult)
    .then((data) => {
      return Response.json(data);
    })
    .catch((error) => {
      console.error(error);
      return new Response(error, { status: 500 });
    });
}
