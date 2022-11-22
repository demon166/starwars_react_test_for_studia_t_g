export type DateISO8601 = string;
export type TUrl = string;

export type TCharacter = {
  'birth_year': string | 'unknown',
  'eye_color': string | 'unknown' | 'n/a',
  'films': TUrl[],
  'gender': 'male' | 'female' | 'hermaphrodite' | 'unknown' | 'n/a',
  'hair_color': string | 'unknown' | 'n/a',
  'height': string,
  'homeworld': TUrl,
  'mass': string,
  'name': string,
  'skin_color': string,
  'created': DateISO8601,
  'edited': DateISO8601,
  'species': TUrl[],
  'starships': TUrl[],
  'url': TUrl,
  'vehicles': TUrl[],
};

export type TCharacterWookiee = {
  whrascwo: string, // name
  acwoahrracao: string, // 'height',
  scracc: string, // 'mass',
  acraahrc_oaooanoorc: string, // 'hair_color',
  corahwh_oaooanoorc: string, // 'skin_color',
  worowo_oaooanoorc: string, // 'eye_color',
  rhahrcaoac_roworarc: string | 'unknown', // 'birth_year',
  rrwowhwaworc: 'male' | 'female' | 'hermaphrodite' | 'unknown' | 'n/a', // 'gender',
  acooscwoohoorcanwa: TUrl, // 'homeworld',
  wwahanscc: TUrl[], // 'films',
  cakwooaahwoc: TUrl[], // 'species',
  howoacahoaanwoc: TUrl[], // 'vehicles',
  caorarccacahakc: TUrl[], // 'starships',
  oarcworaaowowa: DateISO8601, // 'created',
  wowaahaowowa: DateISO8601, // 'edited',
  hurcan: TUrl, // 'url',
};

export type TCharacterFilterSearchProps = {
  search?: string,
  page?: number,
  format?: 'wookiee',
};

export type TSwApiDataRequest<T> = {
  count: number,
  next: TUrl | null,
  previous: TUrl | null,
  results: T[],
};

export type TSwApiDataRequestWookiee<T> = {
  oaoohuwhao: number,
  whwokao: TUrl | null,
  akrcwohoahoohuc: TUrl | null,
  rcwochuanaoc: T[],
};
