export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {

  // console.log({method: request.method});

  const count = Math.floor(Math.random() * 100) + 1;

  return Response.json({ count, method: request.method })
}


export async function POST(request: Request) {

  // console.log({method: request.method});

  return Response.json({ count: 100, method: request.method })
}
