import { Send } from "@mui/icons-material";

export default function Newsletter() {
    return (
        <div className="newsletter">
            <h1 className="title">Newsletter</h1>
            <div className="description">Get timely updates from your favorite products.</div>
            <div className="inputContainer">
                <input type="email" placeholder="Your email" />
                <button>
                    <Send />
                </button>
            </div>
        </div>
    )
}