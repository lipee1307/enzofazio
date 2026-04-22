import React from 'react';
import './App.css';

const LibraryItem = ({ image, title, subtitle, type, count, isArtist }) => (
  <div className="library-item">
    <div className={`image-container ${isArtist ? 'circle' : ''}`}>
      <img src={image} alt={title} />
    </div>
    <div className="item-details">
      <h3>{title}</h3>
      <p>
        {type === 'playlist' && <span className="pin">📌</span>}
        {type.charAt(0).toUpperCase() + type.slice(1)} • {count}
      </p>
    </div>
  </div>
);

function App() {
  const data = [
    { id: 1, title: 'Liked Songs', subtitle: '185 songs', type: 'playlist', count: '185 songs', image: 'https://placehold.co/60x60/6157ff/white?text=♥' },
    { id: 2, title: 'Your Episodes', subtitle: '3 episodes', type: 'playlist', count: '3 episodes', image: 'https://placehold.co/60x60/006450/white?text=🎙️' },
    { id: 3, title: 'Gene Evaro Jr.', subtitle: 'Artist', type: 'artist', count: 'Artist', image: 'https://placehold.co/60x60/444', isArtist: true },
    { id: 4, title: 'Latina to Latina', subtitle: 'Latina to Latina LLC', type: 'podcast', count: 'Latina to Latina LLC', image: 'https://placehold.co/60x60/fec' },
    { id: 5, title: 'Impossible Falcon', subtitle: 'Wardell', type: 'album', count: 'Wardell', image: 'https://placehold.co/60x60/ddd' },
  ];

  return (
    <div className="spotify-container">
      <header className="header">
        <div className="header-top">
          <div className="profile-pic">A</div>
          <h1>Your Library</h1>
          <div className="header-icons">
            <span>🔍</span>
            <span>+</span>
          </div>
        </div>
        <div className="filters">
          <button className="active">Playlists</button>
          <button>Artists</button>
          <button>Albums</button>
          <button>Podcasts & Shows</button>
        </div>
      </header>

      <div className="sort-bar">
        <span>⇅ Recently played</span>
        <span>⊞</span>
      </div>

      <main className="library-list">
        {data.map(item => (
          <LibraryItem key={item.id} {...item} />
        ))}
      </main>
    </div>
  );
}

export default App;
