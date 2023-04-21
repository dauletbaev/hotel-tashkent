export async function GET(request: Request) {
  return new Response('Hello, Next.js!')
}

export async function POST(request: Request) {
  const { name, email, message } = await request.json()
  // Send email
  return new Response('OK')
}
