import { useEffect, useState } from "react"
import './scroll.css'

export default function ScrollIndicator({ url }) {

    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(false);
    const [errorMessage, seterrorMessage] = useState("");
    const [scrollPercentage, setscrollPercentage] = useState(0);


    async function fetchData(geturl) {
        try {
            setloading(true);
            const response = await fetch(geturl);
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setdata(data.products);
                setloading(false);
            }

        } catch (error) {
            console.log(error);
            seterrorMessage(error.message);
        }
    }

    useEffect(() => {
        fetchData(url);
    }, [url])

    function handleScrollPercentage() {
        console.log(
            document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight
        )

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setscrollPercentage((howMuchScrolled / height) * 100)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)

        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])

    if(loading){
       return <h3>Loading Data ! Please Wait.</h3>
    }

    if(errorMessage){
        return <div>Error Occured !!! {errorMessage}</div>
    }

    console.log(data, scrollPercentage)

    return <div>
        <div className="top-container">
            <h1>Custom Scroll Indicator</h1>
            <div className="scroll-progress-tracking-container">
                <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}>

                </div>
            </div>
        </div>

        <div className="data-container">
            {
                data && data.length > 0
                    ? data.map(dataitem => <p>{dataitem.title}</p>)
                    : null
            }
        </div>
    </div>
}