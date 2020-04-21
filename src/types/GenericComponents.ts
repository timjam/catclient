export interface SearchBoxProps {
  name: string;
  handleOnChange: Function;
}

export interface PropertySelectorProps {
  value: string;
  property: string;
  labels: Array<string>;
  handleOnChange: Function;
}
