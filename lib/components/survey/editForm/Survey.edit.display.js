'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  type: 'datagrid',
  input: true,
  label: 'Questions',
  key: 'questions',
  tooltip: 'The questions you would like to as in this survey question.',
  weight: 50,
  defaultValue: [{ label: '', value: '' }],
  components: [{
    label: 'Label',
    key: 'label',
    input: true,
    type: 'textfield'
  }, {
    label: 'Value',
    key: 'value',
    input: true,
    type: 'textfield',
    calculateValue: { or: [{ var: 'row.value' }, { _camelCase: [{ var: 'row.label' }] }] }
  }]
}, {
  type: 'datagrid',
  input: true,
  label: 'Values',
  key: 'values',
  tooltip: 'The values that can be selected per question. Example: \'Satisfied\', \'Very Satisfied\', etc.',
  weight: 50,
  defaultValue: [{ label: '', value: '' }],
  components: [{
    label: 'Label',
    key: 'label',
    input: true,
    type: 'textfield'
  }, {
    label: 'Value',
    key: 'value',
    input: true,
    type: 'textfield',
    calculateValue: { or: [{ var: 'row.value' }, { _camelCase: [{ var: 'row.label' }] }] }
  }]
}];