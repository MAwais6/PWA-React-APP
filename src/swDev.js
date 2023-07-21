export default function SwDev() {
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swUrl).then((response) => {
        console.warn("response", response);
    }
    )
}
