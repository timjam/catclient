import { Cat } from './CatClient';

export interface CatModalProps {
  cat: Cat | undefined;
  show: boolean;
  // Can not get the right Function type for handleClose, thus again ... any at least for now -.-
  handleClose: any;
}

export interface CatCardProps {
  cat: Cat | undefined
}