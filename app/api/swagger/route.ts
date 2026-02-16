import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const swaggerPath = join(process.cwd(), 'swagger.yaml');
    const swaggerContent = readFileSync(swaggerPath, 'utf-8');
    
    return new Response(swaggerContent, {
      headers: {
        'Content-Type': 'application/x-yaml',
      },
    });
  } catch (error) {
    return new Response('Swagger specification not found', { status: 404 });
  }
}
