// TODO 需要集成后端，再打开这行代码
// import request from '../request.ts'

import type {TableDataItem} from "@/types/demo/table-types.ts";

// 获取表格数据
export const getTableData = (data: { param1: string; param2: string }) => {
  // TODO 需要集成后端，再打开这行代码
  // return request.post('/demo/tableData', data)

  // 此处不调用后端，仅返回固定数据
  const tableData = [
    {
      id: '1',
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: '2',
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: '3',
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: '4',
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }
  ]
  return new Promise<{ data: TableDataItem[] }>((resolve) => {
    setTimeout(() => {
      resolve({
        data: tableData
      });
    }, 400);
  })
}
