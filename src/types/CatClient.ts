export interface Cat {
  id: number;
  name: string;
  description: string;
  temperament: string;
  origin: string;
}

export interface CatTableProps {
  temperamentSelector: string;
  originSelector: string;
  cats: Array<Cat>;
}

export interface CatTableRowProps {
  cat: {
    'id': number;
    'name': string,
    'temperament': string,
    'origin': string
  };
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