<template>
  <div id="global-layout">
    <header></header>
    <component :is="layout"/>
    <footer>
      <div class="statistics">
        <script type="text/javascript" src="https://v1.cnzz.com/z_stat.php?id=1278629617&web_id=1278629617"></script>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // 你也可以像默认的 globalLayout 一样首先检测 layout 是否存在
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>