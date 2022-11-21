export type DateISO8601 = string;
export type URL = string;

export type TCharacter = {
  'birth_year': '19 BBY',
  'eye_color': string | 'unknown' | 'n/a',
  'films': URL[],
  'gender': 'Male' | 'Female' | 'unknown' | 'n/a',
  'hair_color': string | 'unknown' | 'n/a',
  'height': string,
  'homeworld': URL,
  'mass': string,
  'name': string,
  'skin_color': string,
  'created': DateISO8601,
  'edited': DateISO8601,
  'species': URL[],
  'starships': URL[],
  'url': URL,
  'vehicles': URL[],
};

export type TCharacterFilterSearchProps = {
  search: string;
};
