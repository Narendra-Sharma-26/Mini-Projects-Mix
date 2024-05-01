import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css'


export default function ImageSlider({ url, limit = 5, page = 1 }) {

    const [images, setimages] = useState([]);
    const [currentSlide, setcurrentSlide] = useState(0);
    const [errorMsg, seterrorMsg] = useState(null);
    const [loading, setloading] = useState(false);

    async function fetchImages(geturl) {
        try {
            setloading(true);

            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setimages(data);
                setloading(false);
            }
        } catch (e) {
            seterrorMsg(e.message);
            setloading(false);
        }
    }

    function handlePrevious() {
        setcurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        setcurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

    useEffect(() => {
        if (url !== " ") fetchImages(url)
    }, [url])

    if (loading) {
        return <div>Loading data ! Please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error Occured !!! {errorMsg}</div>
    }

    return <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
        {
            images && images.length ?
                images.map((imageItem, index) =>
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                    />
                )
                : null

        }

        <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
        <span className="circle-indicators">
            {
                images && images.length ?
                    images.map((_, index) => <button
                        key={index}
                        className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
                        onClick={() => setcurrentSlide(index)}
                    ></button>)
                    : null
            }
        </span>

    </div>
}