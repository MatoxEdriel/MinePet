export interface TableColumn {
  key: string;
  label: string;
  visible?: boolean;
}

export interface TableOptions {
  search?: boolean;
  filter?: boolean;
  pagination?: boolean;
}