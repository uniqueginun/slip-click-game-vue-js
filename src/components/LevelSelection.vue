<template>
  <div class="bg-gray-100 w-1/2 mt-6 rounded shadow">
    <h1 class="mb-6 pt-6 mx-auto font-bold text-center">Make the right level choice</h1>
    <div class="mx-auto max-w-sm text-center flex flex-wrap justify-center">
      <div class="flex items-center mr-4 mb-4">
        <input id="radio1" type="radio" name="radio" class="hidden" v-model="level" value="1500" />
        <label for="radio1" class="flex items-center cursor-pointer">
          <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
          Easy
        </label>
      </div>

      <div class="flex items-center mr-4 mb-4">
        <input id="radio2" type="radio" name="radio" class="hidden" v-model="level" value="1000" />
        <label for="radio2" class="flex items-center cursor-pointer">
          <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
          Medium
        </label>
      </div>

      <div class="flex items-center mr-4 mb-4">
        <input id="radio3" type="radio" name="radio" class="hidden" v-model="level" value="500" />
        <label for="radio3" class="flex items-center cursor-pointer">
          <span class="w-4 h-4 inline-block mr-1 border border-grey"></span>
          Extream
        </label>
      </div>
    </div>
    <div class="mt-6 mb-4 w-full flex items-center justify-center">
      <button
        @click="startGame"
        class="bg-green-400 text-gray-900 rounded px-3 shadow text-center py-3"
      >Start Game</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      level: "1000"
    };
  },
  methods: {
    startGame() {
      this.$emit("startGame", this.level);
    }
  }
};
</script>

<style scoped>
input[type="radio"] + label span {
  transition: background 0.2s, transform 0.2s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span {
  transform: scale(1.2);
}

input[type="radio"]:checked + label span {
  background-color: #1f9d55;
  box-shadow: 0px 0px 0px 2px white inset;
}

input[type="radio"]:checked + label {
  color: #1f9d55;
}
</style>