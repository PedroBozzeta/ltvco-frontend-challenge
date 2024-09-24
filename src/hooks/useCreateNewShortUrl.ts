import { useRef, useState } from "react";

export interface CreateNewShortUrlResponse {
    short_code: string;
}

interface CreateNewShortUrlRequest {
    full_url: string
}

export function useCreateNewShortUrl() {

    const [loading, setLoading] = useState<boolean>(false)
    const [response, setResponse] = useState<CreateNewShortUrlResponse | null>(null)
    const [error,setError]=useState<string|null>(null)

    const abortControllerRef = useRef<AbortController | null>(null)

    const createNewShortUrl = async (url: string) => {

        setLoading(true)

        const request: CreateNewShortUrlRequest = {
            full_url: url,
        }

        abortControllerRef?.current?.abort();
        abortControllerRef.current = new AbortController();

        try {
            const response = await fetch(`/short_urls`,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(request),
                    signal: abortControllerRef.current.signal,
                }
            )

            const parsedResponse= await response.json()
            if (response.ok) {
                setResponse(parsedResponse);
                setError(null)
            } else {
                setError(parsedResponse.errors)
                throw new Error(`Error: ${response.statusText}`)
                
            }
        }

        catch (error) {
            if (error instanceof Error) {
                if (error.name === "AbortError") {
                    console.info("Aborted Request")
                } else {
                    console.error(error)
                }
            }
        }

        finally {
            setLoading(false)
        }
    }

    return { loading, response,error, createNewShortUrl }

}