
import { useState } from "react"

export default function Announcements() {
    const [showAnnouncements, setShowAnnouncements] = useState(true);
    function handleClick() {
        setShowAnnouncements(false);
    }
    return (
        <>
            {showAnnouncements && <div className="announcements">
                <span className="message">
                    Super deal! Free Shipping on orders above &#8377;599
                </span>
                <span className="close" onClick={handleClick}>X</span>
            </div>}
        </>
    )
}