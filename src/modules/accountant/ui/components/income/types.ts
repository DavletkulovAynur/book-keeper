export interface Item {
  key: string
  category: string
  amount: number
  deskription: string
}

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean
  dataIndex: string
  title: any
  inputType: 'number' | 'text'
  record: Item
  index: number
  children: React.ReactNode
}

export const testData = [
  {
    key: '1',
    category: 'Работа',
    amount: 120000,
    deskription: 'London Park no',
    date: '12.01.2022'
  },
]
