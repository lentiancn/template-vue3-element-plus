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
      stringValue: 'John Brown',
      numberValue: 1,
      dateValue: '2016-05-03',
      enumValue: 1,
      booleanValue: true
    },
    {
      id: '2',
      stringValue: 'Jim Green',
      numberValue: 2,
      dateValue: '2016-05-02',
      enumValue: 2,
      booleanValue: true
    },
    {
      id: '3',
      stringValue: 'Joe Black',
      numberValue: 3,
      dateValue: '2016-05-04',
      enumValue: 3,
      booleanValue: false
    },
    {
      id: '4',
      stringValue: 'Jon Snow',
      numberValue: 4,
      dateValue: '2016-05-01',
      enumValue: 4,
      booleanValue: false
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
