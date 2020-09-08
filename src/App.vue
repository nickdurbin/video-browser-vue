<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
    <VideoList></VideoList>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyAs4WeYLBiD7lWi0D_79jyoFboEJeedZmQ'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList
  },
  methods: {
    onTermChange(searchTerm) {
      axios.get('https://www.googlesapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err, 'Error'))
    }
  }      
  };
</script>