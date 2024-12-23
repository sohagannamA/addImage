import axios from "axios";
import React from "react";

export default function DisplayImage({ allimge, displayImage }) {
    const handleDelete = async (id) => {
        try {
            console.log(`Deleting image with id: ${id}`);
            const response = await axios.delete(`https://addimage.onrender.com/imageDelete/${id}`);
            await displayImage();
            console.log("Display image check"+displayImage());
        } catch (error) {
            console.error("Error deleting image:", error);
        }
    }

    return (
        <div className="display_image">
            {allimge.map((image, index) => (
                <div className="display_image_box" key={index}>
                    <div className="each_image_box">
                        <img src={`https://addimage.onrender.com/Image/${image.userImage}`} alt="User" />
                    </div>
                    <div className="image_status">
                        <button type="button" onClick={() => handleDelete(image._id)}>Delete</button>
                        <button type="button">Update</button>
                    </div>
                </div>
            ))}
        </div>
    );
}
