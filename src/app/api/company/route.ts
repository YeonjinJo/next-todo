export async function GET(request: Request) {
  const response = await fetch("http://localhost:5000/companyInfo");
  const companyInfo = await response.json();

  if (!companyInfo) {
    return new Response("Information is not found", {
      status: 404,
    });
  }

  return Response.json({
    companyInfo,
  });
}
