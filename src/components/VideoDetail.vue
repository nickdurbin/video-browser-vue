<template>
<div class="details-wrapper" v-if="video">
  <div class="iframe embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" :src="videoUrl"/>
  </div>
  <div class="details">
    <h3>{{ video.snippet.title }}</h3>
    <p>{{ video.snippet.description }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: ['video'],
  computed: {
    videoUrl() {
      const { videoId } = this.video.id;
      return `https://www.youtube.com/embed/${videoId}`
    }
  }
};
</script>

<style scope>
  .details-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  .details {
    margin: 10px;
    padding: 10px;
    border: 1px solid #4affa8;
    border-radius: 5px;
    color: #dfdee2;
  }

  .iframe {
    margin : 2%;
    width: 100%;
  }
</style>
