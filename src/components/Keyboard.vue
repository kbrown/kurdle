<template>
  <div :class="keyboardClass"></div>
</template>

<script>
import Keyboard from "simple-keyboard";
import inputMask from "simple-keyboard-input-mask";
import "simple-keyboard/build/css/index.css";
export default {
  name: "Keyboard",
  props: {
    keyboardClass: {
      default: "simple-keyboard",
      type: String
    },
    input: {
      type: String
    },
    present: {
      type: String
    },
    absent: {
      type: String  
    },
    correct: {
      type: String
    }
  },
  data: () => ({
    keyboard: null,
    theme: "hg-theme-default kurdle" //TODO: doesn't seem to be applied :-(
  }),
  mounted() {
    this.keyboard = new Keyboard(this.keyboardClass, {
        onChange: this.onChange,
        onKeyPress: this.onKeyPress,
        modules: [inputMask],
        onModulesLoaded: () => {
            console.log("Module loaded!");
        },
        inputMask: {
            "default": {
            mask: 'XXXXX',
            regex: /^[A-Z]{0,5}$/
            }
        },

        display: {
            '{enter}': 'ENTER',
            '{bksp}': '\u232B',
        },
        layout: {
            'default': [
                'Q W E R T Y U I O P',
                'A S D F G H J K L',
                '{enter} Z X C V B N M {bksp}',
            ]
        },
        buttonTheme: [
            {
                class: 'button-present',
                buttons: 'U G',
            },   
             {
                class: 'button-absent',
                buttons: 'Z X C I O P',
            },  
            {
                class: 'button-correct',
                buttons: 'S',
            },         
        ],
    });
  },
  methods: {
    onChange(input) {
      this.$emit("onChange", input);
    },
    onKeyPress(button) {
      this.$emit("onKeyPress", button);
    },
    handleShift() {
    }
  },
  watch: {
    input(input) {
      this.keyboard.setInput(input);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.button-present {
    background-color: goldenrod !important;
    color: black !important;
}

.button-correct {
    background-color: green !important;
    color: white !important;
}

.button-absent {
    background-color: grey !important;
    color: white !important;
}



/*
  Theme: kurdle
*/
.simple-keyboard.kurdle {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.simple-keyboard.kurdle .hg-button {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.simple-keyboard.kurdle .hg-button:active {
  background: #1c4995;
  color: white;
}

#root .simple-keyboard.kurdle{
  background: #1c4995;
}



</style>