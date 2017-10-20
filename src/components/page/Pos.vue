<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col :span='7' class="pos-order" id="order-list">我是订单栏</el-col>
        <el-col :span='17'>我是产品栏</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pos',
  mounted () {
    var orderHeight = document.querySelector('body').clientHeight
    document.querySelector('#order-list').style.height = orderHeight + 'px'
  }
}
</script>

<style scoped>
  .pos-order{
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
  }
</style>
