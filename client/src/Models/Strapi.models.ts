export interface IStrapiAttributes {
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
}

export interface IStrapiPagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

export interface IStrapiMeta {
  pagination: IStrapiPagination;
}

export interface IStrapiResponse<Data> {
  data: Data[];
  meta: IStrapiMeta;
}
