export interface Menu {
  Header: string;
  Items: MenuItem[];
}

interface MenuItem {
  Name: string;
  Price: string;
  Portion: string;
  Description: string;
}
