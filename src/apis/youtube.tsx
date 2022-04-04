import axios from 'axios';

//const KEY = 'AIzaSyD2PhKwZJSc4LQOrtRHqKN2dSHRuUBVVOU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: 'AIzaSyD2PhKwZJSc4LQOrtRHqKN2dSHRuUBVVOU'
  }
})
