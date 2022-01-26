<template>
  <div :class="keyboardClass"></div>
</template>

<script>
import Keyboard from "simple-keyboard";
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
    }
  },
  data: () => ({
    keyboard: null
  }),
  mounted() {
    this.keyboard = new Keyboard(this.keyboardClass, {
        onChange: this.onChange,
        onKeyPress: this.onKeyPress,
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
      /**
       * If you want to handle the shift and caps lock buttons
       */
      if (button === "{shift}" || button === "{lock}") this.handleShift();
    },
    handleShift() {
      let currentLayout = this.keyboard.options.layoutName;
      let shiftToggle = currentLayout === "default" ? "shift" : "default";
      this.keyboard.setOptions({
        layoutName: shiftToggle
      });
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

</style>