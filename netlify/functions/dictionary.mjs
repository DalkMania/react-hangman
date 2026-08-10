export default async (request) => {
  const word = new URL(request.url).searchParams.get("word");

  if (!word) {
    return new Response(JSON.stringify({ error: "A word is required" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const upstream = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`,
  );
  const body = await upstream.text();

  return new Response(body, {
    status: upstream.status,
    headers: { "content-type": "application/json" },
  });
};
