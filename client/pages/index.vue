<template>
  <h1 class="text-2xl font-bold">Home</h1>
  <div>
    <h1>Счет: {{ counter.count }}</h1>
    <button class="bg-gray-400 p-2 mx-1" @click="counter.increment">Увеличить</button>
    <button class="bg-gray-400 p-2 mx-1" @click="counter.decrement">Уменьшить</button>
  </div>
</template>

<script setup>
const counter = useCounterStore()
counter.loadFromLocalStorage()
</script>