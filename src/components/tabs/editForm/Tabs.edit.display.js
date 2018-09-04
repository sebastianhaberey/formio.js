export default [
  {
    key: 'components',
    type: 'datagrid',
    input: true,
    label: 'Tabs',
    weight: 50,
    components: [
      {
        type: 'textfield',
        input: true,
        key: 'label',
        label: 'Label'
      },
      {
        type: 'textfield',
        input: true,
        key: 'key',
        label: 'Key',
        calculateValue: { or: [{ var: 'row.key' }, { _camelCase: [{ var: 'row.label' }] }] }
      }
    ]
  }
];
