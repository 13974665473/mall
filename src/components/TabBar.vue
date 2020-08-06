<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
 #tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #F4F3F5;
    color: #515151;
    font-size: 13px;
    box-shadow: 0 -1px 6px rgba(0, 0, 0, .1);
  }
</style>