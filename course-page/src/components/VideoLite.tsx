"use client";
import { useState } from "react";

/** Click-to-play YouTube embed: loads only a thumbnail until the visitor presses play. */
export default function VideoLite({ id, title, label }: { id: string; title: string; label?: string }) {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);

  if (playing) {
    return (
      <div className="video">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <button type="button" className="video video--poster" onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumb}
        alt=""
        loading="lazy"
        onLoad={(e) => {
          // YouTube returns a 120px grey placeholder when maxres doesn't exist.
          if ((e.currentTarget as HTMLImageElement).naturalWidth <= 120) setThumb(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`);
        }}
        onError={(e) => {
          const hq = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
          if (thumb !== hq) setThumb(hq);
          else e.currentTarget.style.visibility = "hidden";
        }}
      />
      <span className="video__play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
      </span>
      {label ? <span className="video__label">{label}</span> : null}
    </button>
  );
}
