import React, { useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { VideoList } from './components/VideoList';
import { VideoDetail } from './components/VideoDetail';
import { useVideos } from './hooks/useVideos';


const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');


  useEffect(() => {
    // @ts-ignore
    setSelectedVideo(videos[ 0 ])
  }, [videos])

  const onVideoSelect = (video: any) => {
    setSelectedVideo(video);
  }

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo}/>
          </div>
          <div className="six wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
