import { useEffect, useState } from 'react';
import './App.css';
import { firestore, storage } from '../src/config/firebase.js';
import { getDocs, collection } from 'firebase/firestore';
import { getDownloadURL, ref } from 'firebase/storage';
import ImageTile from './components/imageTile.js';
import VideoTile from './components/videoTile.js';
import logo from './asserts/image/logo.png';

function App() {
  const [imgVidList, setImgVidList] = useState();
  const firebaseCollectionRef = collection(firestore, 'tiles-info');

  useEffect(() => {

    const loadingImageList = async () => {
      try {
        const data = await getDocs(firebaseCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));

        setImgVidList(filteredData);

      } catch (err) {
        console.log(err);
      }
    }

    loadingImageList();

  }, [firebaseCollectionRef]);

  return (
    <div className="App">
      <div className='Navbar'>
        <img className='logoImg' src={logo} alt='logo'></img>
        <span className='logoName'>
          Media<span style={{ color: 'orange' }}>Grid</span>
        </span>
      </div>
      {imgVidList !== undefined ? (imgVidList.map((imgVid) => (
        imgVid.imageUrl !== '' ? (
          // <div key={imgVid.id}>
          //   <ImageTile imageUrl={imgVid.imageUrl} imageTitle={imgVid.imageTitle} imageDesc={imgVid.imageDesc} />
          // </div>

          <div key={imgVid.id}>
            <ImageTileWrapper imgVid={imgVid}/>
          </div>
        ) : (
          <div key={imgVid.id}>
            <VideoTile videoId={imgVid.videoId} videoTitle={imgVid.videoTitle} videoDesc={imgVid.videoDesc} />
          </div>
        )
      ))) : (
        <div>
          No entries found
        </div>
      )}
    </div>
  );
}

const ImageTileWrapper = ({ imgVid }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const url = await getDownloadURL(ref(storage, `${imgVid.imageTitle}.png`));
        setImageUrl(url);
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    };

    fetchImageUrl();
  }, [imgVid.imageTitle]);

  return imageUrl ? (
    <ImageTile imageUrl={imageUrl} imageTitle={imgVid.imageTitle} imageDesc={imgVid.imageDesc} />
  ) : null;
};

export default App;
