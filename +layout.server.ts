import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const data = await request.json();
        const username = data.username;

     
        const userBlocked = blockUserByUsername(username); 

      
        if (await userBlocked) {
            return {
                status: 200,
                body: { user: { username } },
            };
        } else {
            
            return {
                status: 500,
                body: { error: 'Could not block the user.' },
            };
        }
    } catch (error) {
        
        return {
            status: 500,
            body: { error: error.message },
        };
    }
};

async function blockUserByUsername(username: string): Promise<boolean> {
   
    return true;
}
