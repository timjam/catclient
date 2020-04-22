export interface Cat {
  id: number;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  imgUrl: string;
}

export interface CatTableProps {
  handleRowClick: Function;
  temperamentSelector: string;
  originSelector: string;
  cats: Array<Cat>;
}

export interface CatTableRowProps {
  handleClick: Function;
  cat: Cat;
};

export interface CTTBProps {
  selectedTemperament: string;
  selectedOrigin: string;
  temperaments: Array<string>;
  origins: Array<string>;
  selectTemperament: Function;
  selectOrigin: Function;
  searchText: string;
  changeSearchText: Function;
}

export type CPSelect = React.FormEvent<HTMLSelectElement>;
export type CTText = React.FormEvent<HTMLTextAreaElement>;
export type CTRClick = React.MouseEvent<HTMLTableRowElement, MouseEvent>
