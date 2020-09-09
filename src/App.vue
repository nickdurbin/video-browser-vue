<template>
<div class="container">
  <SearchBar @termChange="onTermChange"></SearchBar>
  <VideoList :videos="videos"></VideoList>
</div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.VUE_APP_SECRET_KEY;

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
  },
  data() {
    return {
      videos: [],
    };
  },
  methods: {
    onTermChange(searchTerm) {
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: API_KEY,
            type: 'video',
            part: 'snippet',
            q: searchTerm,
          },
        })
        .then((res) => {
          this.videos = res.data.items;
        })
        .catch((err) => console.log(err, 'Error'));
    },
  },
};
</script>

<style>
body {
  background-color: #28262e;
}

.container {
  display: flex;
  align-items: center;
  height: 100vh;
}
</style>
