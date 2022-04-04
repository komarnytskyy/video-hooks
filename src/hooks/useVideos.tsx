import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

export const useVideos = (defaultSearchTerm: any) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm])

  const search = async (term: any) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    setVideos(response.data.items);
  };

  return [videos, search];
}
