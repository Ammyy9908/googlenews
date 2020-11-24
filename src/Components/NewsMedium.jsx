import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)
function NewsMedium({ title, img, source, timestamp, url }) {
    return (
        <div className="news__medium">
            <div className="news__left">
                <h1 className="news__title">
                    {title && title.length > 80 ? title.substring(0, 40) + "..." : title}
                </h1>
                <div className="news__basic__info">
                    <span className="sourcename">{source.id}</span>
                    <span className="timestamp"><ReactTimeAgo date={new Date(timestamp).getTime()} /></span>
                </div>
                <a href={url} className="coverage__link">View Full Coverage</a>
            </div>
            <div className="news__right">
                <img src={img} alt="news_thumb" />
            </div>
        </div>
    )
}

export default NewsMedium
