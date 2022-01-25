<template>
  <button class="square" :name="label" :disabled="winner || value">
    {{ value }}
  </button>
</template>

<style scoped>
  .square {
    width: 2rem;
    height: 2rem;
    background: none;
    color: inherit;
    font-size: 1rem;
    font-weight: 700;
  }

  .square:hover {
    cursor: pointer;
  }

  .square:focus {
    outline: none;
    background: #41b88330;
  }

</style>

