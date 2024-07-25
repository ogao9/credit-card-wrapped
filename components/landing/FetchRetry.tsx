const MAX_NB_RETRY = 5;
const RETRY_DELAY_MS = 1000;

export default async function fetchRetry(input: RequestInfo | URL, init?: RequestInit | undefined) {
    let retryLeft = MAX_NB_RETRY;
    while (retryLeft > 0){
        try {
            return fetch(input, init);
        }
        catch (err) { 
            console.error(`Error fetching data: ${err}`);
            await sleep(RETRY_DELAY_MS)
        }
        finally {
            retryLeft -= 1;
        }
    }
    throw new Error(`Too many retries`);
}

function sleep(delay: number){
    return new Promise((resolve) => setTimeout(resolve, delay));
}