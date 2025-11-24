<template>
  <div class="demoTable">
    <h1>数据表格</h1>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="string值" prop="stringValue" width="180"/>
      <el-table-column label="number值" prop="numberValue"/>
      <el-table-column label="date值" prop="dateValue" width="180"/>
      <el-table-column label="enum值" prop="enumValue"/>
      <el-table-column label="boolean值" prop="booleanValue"/>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue"
import {getTableData} from '@/services/demo/table.ts'
import type {TableDataItem} from "@/types/demo/table-types.ts";

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
