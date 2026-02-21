import { useState } from "react";

export default function ProfileImage({ src, alt = "Foto Profil" }) {
    const [loading, setLoading] = useState(true);

    return (
        <div className="profile-image-container">
            <div className={`skeleton-image ${loading ? "" : "is-hidden"}`} />

            <img
                src={src}
                alt={alt}
                className={`profile-image ${loading ? "is-hidden" : ""}`}
                onLoad={() => setLoading(false)}
                onError={() => setLoading(false)}
            />
        </div>
    );
}