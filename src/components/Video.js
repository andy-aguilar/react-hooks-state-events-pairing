import React from 'react'

export default function Video({title, embedUrl}) {
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
        </div>
    )
}
