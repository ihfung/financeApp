import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 5,
  tables: [
    // We'll add tableSchemas here later
    tableSchema({
      name: 'accounts',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'cap', type: 'number' },
        { name: 'tap', type: 'number' },
        { name: 'user_id', type: 'string'}
      ]
    }),
    tableSchema({
      name: 'moveMoneys',
      columns: [
        { name: 'created_at', type: 'number' },
        { name: 'money', type: 'number' },
        { name: 'user_id', type: 'string'}
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
        { name: 'user_id', type: 'string'}
      ]
    }),
  ]
})

