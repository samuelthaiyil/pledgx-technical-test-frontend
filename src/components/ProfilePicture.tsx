import {useRef, useState} from "react";

type ProfilePictureProps = {
    image: Blob | null;
    onChange: (image: Blob) => any;
}

export const ProfilePicture = ({image, onChange}: ProfilePictureProps) => {

    const imageInput = useRef<HTMLInputElement>(null);
    const [profilePicture, setProfilePicture] = useState<string>(image ? URL.createObjectURL(image) : "Untitled_Artwork 16 copy 3 1.svg");

    const handleEditClick = () => imageInput.current?.click();

    const handleFileChange = () => {
        const file = imageInput.current?.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfilePicture(imageUrl);
            onChange(file);
        }
    }

    return (
        <div className="relative inline-block">
            <img className="size-52 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full object-cover" src={profilePicture} alt="Profile picture"/>
            <button
                className="absolute right-1 bottom-2 rounded-full bg-orange-500 p-3 hover:bg-orange-400 transition hover:duration-100"
                title="Upload a new profile picture"
                onClick={handleEditClick}

            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                     stroke="white" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
                </svg>
            </button>
            <input
                className="hidden"
                type="file"
                ref={imageInput}
                onChange={handleFileChange}
            />
        </div>
    )
}
