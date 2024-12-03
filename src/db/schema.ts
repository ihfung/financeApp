import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 4,
  tables: [
    // We'll add tableSchemas here later
    tableSchema({
      name: 'accounts',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'cap', type: 'number' },
        { name: 'tap', type: 'number' },
      ]
    }),
    tableSchema({
      name: 'moveMoneys',
      columns: [
        { name: 'created_at', type: 'number' },
        { name: 'money', type: 'number' },
      ]
    }),
    tableSchema({
      name: 'accounts_moveMoneys',
      columns: [
        { name: 'created_at', type: 'number' },
        { name: 'account_id', type: 'string' },
        { name: 'moveMoney_id', type: 'string' },
        { name: 'amount', type: 'number' },
        { name: 'cap', type: 'number' },
      ]
    }),
  ]
})

