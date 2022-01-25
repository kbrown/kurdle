<template>
  <div id="app">
    <Board />
    <input
      :value="input"
      class="input"
      @input="onInputChange"
      placeholder="Tap on the virtual keyboard to start"
    >
    <Keyboard @onChange="onChange" @onKeyPress="onKeyPress" :input="input"/>
  </div>
</template>

<script>
//import Vue from 'vue'

import Keyboard from "./components/Keyboard.vue";
import Board from './components/Board.vue';

import "./App.css";

//import BootstrapVue from 'bootstrap-vue'
//import { LayoutPlugin } from 'bootstrap-vue'

//Vue.use(LayoutPlugin);
//Vue.use(BootstrapVue);

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'


export default {
  name: "App",
  components: {
    Board,
    Keyboard
  },
  data: () => ({
    input: "",
    cellIdx: 0,
    rowIdx: 0,
    guesses: [
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
      ['','','','',''],
    ]
  }),
  methods: {
    onChange(input) {
      this.input = input;
      this.guesses[this.rowIdx][this.cellIdx] = input;
      this.cellIdx++;
    },
    onKeyPress(button) {
      console.log("button", button);
    },
    onInputChange(input) {
      this.input = input.target.value;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
    display: grid;
    place-items: center;
    gap: 4rem;
    position: relative;
}

</style>