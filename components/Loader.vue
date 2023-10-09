<template>
    <span class="loader"></span>
</template>

<style lang="sass" scoped>
.loader
  width: 24px
  height: 24px
  border: 5px solid $primary-color
  border-radius: 50%
  display: inline-block
  box-sizing: border-box
  position: relative
  animation: pulse 1s linear infinite
.loader:after
  content: ''
  position: absolute
  width: 24px
  height: 24px
  border: 5px solid $primary-color
  border-radius: 50%
  display: inline-block
  box-sizing: border-box
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  animation: scaleUp 1s linear infinite

@keyframes scaleUp
  0% 
    transform: translate(-50%, -50%) scale(0) 
  60% , 100% 
    transform: translate(-50%, -50%)  scale(0.8)
@keyframes pulse 
  0% , 60% , 100% 
    transform:  scale(0.8)
  80% 
    transform:  scale(1)
</style>