<template>
<div>
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
  outline: #4affa8;
}

div {
  width: 100%;
  text-align: center;
  margin: 0 auto;
}
</style>
