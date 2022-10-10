export const customSelectorStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: '#3c3f41',
    border: 'none',
    height: '2.5rem',
    boxShadow: 'var(--shadow-1)',
  }),
  placeholder: (provided: any, state: any) => ({
    ...provided,
    color: 'rgba(253, 253, 254, 0.65)',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: '1px solid #5e5e5f',
    backgroundColor: state.isSelected
      ? '#939394'
      : '#3c3f41' && state.isFocused
      ? '#2a2a2b'
      : '#3c3f41',
    color: 'rgba(253, 253, 254, 0.65)',
    padding: '0.6rem',
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: '#3c3f41',
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: '#ffffff',
  }),
}
