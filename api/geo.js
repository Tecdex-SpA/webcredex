export default function handler(request, response) {
  const country = String(
    request.headers["x-vercel-ip-country"] ||
      request.headers["cf-ipcountry"] ||
      "",
  )
    .trim()
    .toUpperCase();

  response.setHeader("Cache-Control", "no-store, max-age=0");
  response.status(200).json({ country: country || null });
}
