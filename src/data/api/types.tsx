interface Character {
  id: number;
  name: string;
  image: string;
  episode: string[];
}

export type Characters = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results?: Character[];
};
