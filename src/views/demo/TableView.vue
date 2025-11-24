<template>
  <div class="demoTable">
    <h1>数据表格</h1>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="string值" prop="stringValue"/>
      <el-table-column label="number值" prop="numberValue"/>
      <el-table-column :formatter="dateFormat" label="date值" prop="dateValue"/>
      <el-table-column label="enum值">
        <template #default="{row}">
          <el-tag v-if="row.enumValue === 1" type="success">
            枚举值 1
          </el-tag>
          <el-tag v-else-if="row.enumValue === 2" type="primary">
            枚举值 2
          </el-tag>
          <el-tag v-else-if="row.enumValue === 3" type="danger">
            枚举值 3
          </el-tag>
          <el-tag v-else-if="row.enumValue === 4" type="info">
            枚举值 4
          </el-tag>
          <template v-else>
            -
          </template>
        </template>
      </el-table-column>
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

const dateFormat = (row: TableDataItem, column: any, cellValue: any) => {
  if (!cellValue) return '-'
  return cellValue
}
</script>

<style lang="scss" scoped>
</style>
