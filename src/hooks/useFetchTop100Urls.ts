import { useEffect, useRef, useState } from "react";


export interface ShortUlrResponse {
    full_url: string;
    title: string;
    code: string;
    click_count: number;
}
export function useFetchTop100Urls() {
    const [data, setData] = useState<ShortUlrResponse[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {

        
        abortControllerRef.current?.abort();
        abortControllerRef.current = new AbortController()

        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}`,
                    { signal: abortControllerRef?.current?.signal },
                );
                if (response.ok) {
                    const parsedData = await response.json()
                    setData(parsedData.urls);
                } else {
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

        fetchData();
    }, [])


    return { data, loading }

}