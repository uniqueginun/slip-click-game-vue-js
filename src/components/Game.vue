<template>
  <div class="pt-8 bg-gray-900 w-full h-full flex justify-start flex-col items-center">
    <h1 class="font-bold text-gray-300 text-3xl">Slip Click Vue Game</h1>
    <LevelSelection v-if="status===0" @startGame="startGame" />
    <div v-else-if="status===1" class="pt-8 flex flex-wrap w-1/2 mt-6">
      <Apple
        @userSelected="userClick"
        v-for="(apple, index) in fruitsArray"
        :isCurrent="random === index"
        :key="apple"
      />
      <div class="mt-12 flex items-center justify-center w-full">
        <button
          @click="startOver"
          class="bg-green-900 text-white p-4 rounded leading-none text-center"
        >Too hard</button>
      </div>
    </div>
    <game-over v-else @startOver="startOver" :falseAttempts="falseAttempts" :timing="timing" />
  </div>
</template>

<script>
import Apple from "./Apple";
import GameOver from "./GameOver";
import LevelSelection from "./LevelSelection";

export default {
  name: "game",
  data() {
    return {
      fruitsCount: 32,
      random: Math.floor(Math.random() * this.fruitsCount),
      falseAttempts: 0,
      timer: 0,
      interval: null,
      timerInterval: null,
      status: 0,
      level: null
    };
  },
  computed: {
    fruitsArray() {
      return new Array(this.fruitsCount);
    },
    timing() {
      var minutes = Math.floor(this.timer / 60);
      var seconds = this.timer - minutes * 60;
      return minutes + ":" + seconds;
    }
  },
  components: {
    Apple,
    GameOver,
    LevelSelection
  },
  methods: {
    randomize(level) {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.random = Math.floor(Math.random() * this.fruitsCount);
      }, level);
    },
    userClick(selectionStatus) {
      if (selectionStatus) {
        this.fruitsCount--;
        return;
      }
      this.falseAttempts++;
    },
    startOver() {
      clearInterval(this.timerInterval);
      clearInterval(this.interval);
      this.fruitsCount = 32;
      this.random = Math.floor(Math.random() * this.fruitsCount);
      this.falseAttempts = 0;
      this.timer = 0;
      this.interval = null;
      this.timerInterval = null;
      this.status = 0;
      this.level = null;
    },
    startGame(level) {
      this.level = level;
      this.randomize(level);
      this.timerInterval = setInterval(() => this.timer++, 1000);
      this.status = 1;
    }
  },
  beforeUpdate() {
    if (this.fruitsCount === 0) {
      this.status = 2;
      clearInterval(this.timerInterval);
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>
