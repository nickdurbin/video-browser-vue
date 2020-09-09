<template>
<li class="list-group-item media" @click="onVideoSelect">
  <img class="mr-3" :src="thumbnailUrl" />
  <div class="media-body">
    {{ video.snippet.title }}
  </div>
</li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: ['video'],
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.default.url;
    },
  },
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video);
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
  border: 1px solid #4affa8;
  background: #28262e;
  color: #dfdee2;
}

li:hover {
  background-color: #3e3b46;
}
</style>
