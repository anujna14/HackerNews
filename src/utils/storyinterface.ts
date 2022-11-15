export interface Story {
    by: string;
    id: number;
    score: number;
    time: number;
    title: string;
    type: string;
    url: string;
  }

  export interface Search{
    searchValue: string,
    handleSearch: (searchVal: string) => void
  }