import React from 'react';

export default function JournalEntry({ obj }) {
    const { imageUrl, title, location, googleMapsUrl, startDate, endDate, description } = obj;

    return (
        <article className="journal-entry">
            <h2 className="journal-entry__title">{title}</h2>
            <img className="journal-entry__photo" src={imageUrl} alt={`photo of ${title}`} />
            <div className="journal-entry__location-wrapper">
                <p className="journal-entry__location">
                    <img className="journal-entry__marker-icon" src="../assets/location-marker.svg" alt="location marker icon" />
                    {location}
                </p>
                <a className="journal-entry__maplink" href={googleMapsUrl} target="_blank">View on Google Maps</a>
            </div>
            <p className="journal-entry__dates">{startDate} - {endDate}</p>
            <p className="journal-entry__description">{description}</p>
        </article>
    );
}