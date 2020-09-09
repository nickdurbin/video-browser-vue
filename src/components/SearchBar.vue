<template>
<div>
  <img class="logo" src="../../public/assets/Slice 1.svg" />
  <input @input="onInput" placeholder="Search for content..." />
</div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function (event) {
      this.$emit('termChange', event.target.value);
    },
  },
};
</script>

<style scoped>
img {
  width: 15%;
  margin: 5%;
}

input {
  width: 60%;
  height: 3rem;
  padding-left: 2%;
  border-radius: 10px;
  border: none;
  background: #3e3b46;
  color: #dfdee2;
}

input:focus {
  outline: none;
  border: 2px solid #4affa8;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
</style>
