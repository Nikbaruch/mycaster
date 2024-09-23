import { FrameRequest, getFrameMessage } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';

// Fonction pour gérer la réponse
async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body: FrameRequest = await req.json();
  const { isValid, message } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

  if (!isValid) {
    return new NextResponse('Message not valid', { status: 500 });
  }

  return NextResponse.json({ message: 'Hello from the frame route' }, { status: 200 });
}

// Gestion des requêtes POST
export async function POST(req: NextRequest): Promise<Response> {
  console.log('POST');
  return getResponse(req);
}

// Gestion des requêtes GET
export async function GET(req: NextRequest): Promise<Response> {
  console.log('GET');
  return getResponse(req);
}

export const dynamic = 'force-dynamic';

