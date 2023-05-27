export type ShowsT = {
  averageRuntime: number;
  dvdCountry: CountryT | null;
  ended: string | null;
  externals: {
    imdb: string;
    thetvdb: number;
    tvrage: number;
  };
  genres: string[];
  id: number;
  image: {
    medium: string;
    original: string;
  };
  language: string;
  name: string;
  network: NetworkT;
  officialSite: string;
  premiered: string;
  rating: { average: number };
  runtime: number;
  schedule: {
    days: string[];
    time: string;
  };
  status: string;
  summary: string;
  type: string;
  updated: number;
  url: string;
  webChannel: null;
  weight: number;
};

type NetworkT = {
  country: CountryT;
  id: number;
  name: string;
};

type CountryT = {
  code: string;
  name: string;
  timezone: string;
};
