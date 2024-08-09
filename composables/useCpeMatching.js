export async function useCpeMatching (url, key) {
    // $fetchはserver(HTMLレンダリング）とclient(HTMLハイドレード)のそれぞれで計二回実行される可能性がある
    // useAsyncData、またはuseFetchを使う。(https://nuxt.com/docs/getting-started/data-fetching)
    // ただし、useFetchをイベントハンドラで呼び出すと以下の警告が発生。
    // useCpeMatching.js:5 [nuxt] [useFetch] Component is already mounted, please use $fetch instead. See https://nuxt.com/docs/getting-started/data-fetching

    // const { data: products, error } = await useFetch(url)
    // if (products.value) {
    //     console.log(`products[${JSON.stringify(products.value)}]`)
    // }
    // if (error.value) {
    //     console.log(`error[${JSON.stringify(error.value)}]`)
    // }
    try {

        if (key) {
            // headerを指定するとCORSエラーが発生。
            const products = await $fetch(url, {
                headers: {                    
                    // "Sec-Fetch-Dest": "empty",
                    // "Sec-Fetch-Mode": "cors",
                    // "Sec-Fetch-Site": "cross-site",                                
                    "apiKey" :  key
                }
            })
            return products
        } else {
            const products = await $fetch(url)
            return products
        }        
    } catch (err) {
        console.log(`err[${err}]`)
        return err
    }
}