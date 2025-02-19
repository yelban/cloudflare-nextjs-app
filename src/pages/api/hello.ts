// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge',
  // regions: ['iad1']  // 指定 Cloudflare region
  // unstable_allowDynamic: [
  //   '**/node_modules/next/dist/compiled/async_hooks/**'
  // ]
};

const handler = async (
  // req: NextRequest
) => {
  // console.log('req', req);
  return new Response(
    JSON.stringify({ message: "Hello from Edge Runtime!" }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}

export default handler;
