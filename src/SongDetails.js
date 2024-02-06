// src/components/SongDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './SongDetails.css'; // Import the CSS file

const SongDetails = () => {
  const { id } = useParams();

  // Replace this with your actual data fetching logic
  const songs = [
    {
    id: 1,
    title: 'Din Dhal Jaye Haye',
    cover: 'song1.jpg',
    youtubevideo: 'DPlCYSIXh5s',
    film: 'Guide(1965)',
    lyricist: 'Shailendra',
    musicdirector: 'S.D Burman',
    singers: 'Mohd. Rafi',
    onscreen: 'Dev Anand, Waheeda Rehman, Kishore Sahu, Leela Chitnis, Anwar Husain',
    lyricshindi: 'दिन ढल जाए, हाय रात न जाए\nतू तो न ऐ, तेरी याद सताए\n\nप्यार में जिनको सब जग छोड़ा और हुए बदनाम\nउनके ही हाथो हाल हुआ ये, बैठे हैं दिल को थाम\nअपने कभी थे, अब हैं पराए\n\nऐसी ही रिमझिम, ऐसी फुहारें, ऐसी ही थी बरसात\nखुद से जुदा और जग से परे, हम दोनों साथ हैं\nफिर से वो सावन अब क्यों न ऐ?\n\nदिल के मेरे पास हो इतना, फिर भी हो कितना दूर\nतुम मुझसे, मैं दिल से परेशान, दोनों हैं मजबूर\nऐसे में किस को कौन मनाए?',
    lyricsenglish: 'Din dhal jaae, haay raat na jaae\nTu to n ae, teri yaad sataae\n\nPyaar men jinake sab jag chhoda aur hue badanaam\nUnake hi haatho haal hua ye, baithhe hain dil ko thaam\nApane kabhi the, ab hain paraae\n\nAisi hi rimajhim, aisi fuhaaren, aisi hi thi barasaat.\nKhud se juda aur jag se paraae, ham donon the saath\nFir se wo saawan ab kyon n ae?\n\nDil ke mere paas ho itani, fir bhi ho kitani dur\nTum mujhase, main dil se pareshaan, donon hain majabur\nAise men kis ko kaun manaae?'
  }
];

const song = songs.find(song => song.id === parseInt(id));

if (!song) {
  return <div>Song not found</div>; // Handle case when song is not found
}

  return (
    <div className="song-details">
      <img src={`/${song.cover}`} alt={`${song.title} Cover`} className="song-cover" />
      <a href={`https://www.youtube.com/watch?v=${song.youtubevideo}`} target="_blank" rel="noopener noreferrer" className="watch-on-youtube">
        Watch on YouTube
      </a>
      <h3>{song.title}</h3>
      <p><strong>Film:</strong> {song.film}</p>
      <p><strong>Lyricist:</strong> {song.lyricist}</p>
      <p><strong>Music Director:</strong> {song.musicdirector}</p>
      <p><strong>Singers:</strong> {song.singers}</p>
      <p><strong>On Screen:</strong> {song.onscreen}</p>
      <p><strong>Lyrics(in Hindi):</strong> <pre>{song.lyricshindi}</pre></p>
      <p><strong>Lyrics(in English):</strong> <pre>{song.lyricsenglish}</pre></p>
      <Link to="/" className="back-link">
        Back to Song Chart
      </Link>
    </div>
  );
};

export default SongDetails;

