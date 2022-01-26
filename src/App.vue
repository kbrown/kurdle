<template>
  <div id="app">
     <Guess
            v-for="(guess, i) in guesses"
            v-model="guesses[`${i}`]"
            :key="`guess-${i}`"
            :label="`guess-${i}`"
            :value="guess"
        />

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
//import Board from './components/Board.vue';
import Guess from './components/Guess.vue';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

import "./App.css";

//import BootstrapVue from 'bootstrap-vue'
//import { LayoutPlugin } from 'bootstrap-vue'

//Vue.use(LayoutPlugin);
//Vue.use(BootstrapVue);

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
export const evaluate = (word, guess) => {
  const result=[]
  for (var i = 0; i < guess.length; i++) {
      const guessChar = guess.charAt(i);
      const wordChar = word.charAt(i);

      if (guessChar === wordChar){
         result.push("correct");
      } else {
        result.push(word.includes(guessChar) ? "present" : "absent" );
      }
  }
  return result;
}

export default {
  name: "App",
  components: {
    Guess,
    //Board,
    Keyboard
  },
  data: () => ({
    word: "sugar",
    candidateWordList: ["horse", "stint", "spurn", "sugar", "sorry", "start", "chimp", "glued"],
    input: "",
    cellIdx: 0,
    guessIndex: 0,
    guesses: [
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    evaluations:[
      null,
      null,
      null,
      null,
      null,
      null,
    ]
  }),
  methods: {
    onChange(input) {
      this.input = input;
      this.cellIdx++;
    },
    onEnter(){

      const guess = this.input? this.input.toLowerCase() : null;

      if (!guess || guess.length === 0){
        return; //do nothing
      }

      //TODO: disable enter if length < 5 instead
      if (guess.length < 5){
          this.$toast.error("Less than 5 letters")
          return;
      }

      if (this.candidateWordList.includes(guess)) {

        this.guesses[this.guessIndex]=guess;
        this.input="";
        this.evaluations[this.guessIndex]=evaluate(this.word, guess)

        this.guessIndex++;


      } else {
        //TODO: animate shake
        this.$toast.error("Not in wordlist")  //TODO: position toast
      }

    },
    onKeyPress(button) {
      console.log("button", button);
      if (button === "{enter}"){
        this.onEnter()
      }
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