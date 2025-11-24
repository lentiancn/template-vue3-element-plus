<template>
  <div class="demoTable">
    <h1>数据表格</h1>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="Date" prop="date" width="180"/>
      <el-table-column label="Name" prop="name" width="180"/>
      <el-table-column label="Address" prop="address"/>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue"
import {getTableData, type TableDataItem} from '@/services/demo/table'

let tableData = ref<TableDataItem[]>([])

const loading = ref(false)

const loadTableData = async () => {
  loading.value = true
  try {
    const res = await getTableData({param1: "p1", param2: "p2"})
    tableData.value = res.data
  } finally {
    loading.value = false
  }
};

onMounted(() => {
  loadTableData();
});
</script>

<style lang="scss" scoped>
</style>
