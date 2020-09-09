<template>
<div class="container">
  <div class="search-display">
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
  <div class="video-wrapper">
    <div class="video-display col-md-8">
      <VideoDetail :video="selectedVideo" />
    </div>
    <div class="list-display col-md-4">
      <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.VUE_APP_SECRET_KEY;

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      videos: [],
      selectedVideo: null,
    };
  },
  methods: {
    onVideoSelect(video) {
      this.selectedVideo = video;
    },
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
  font-family: 'Poppins', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.video-wrapper {
  display: flex;
  width: 100%;
}

.search-display {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.list-display {
  margin: 2%;
  width: 100%;
}
</style>
