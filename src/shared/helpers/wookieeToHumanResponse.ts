import { TCharacter, TCharacterWookiee } from 'store/slice/swapi/types';

export const wookieeToHuman = (charactersListWookiee: TCharacterWookiee[]) =>
  charactersListWookiee.map((character) =>
    ({
      birth_year: character.rhahrcaoac_roworarc,
      eye_color: character.worowo_oaooanoorc,
      films: character.wwahanscc,
      gender: character.rrwowhwaworc,
      hair_color: character.acraahrc_oaooanoorc,
      height: character.acwoahrracao,
      homeworld: character.acooscwoohoorcanwa,
      mass: character.scracc,
      name: character.whrascwo,
      skin_color: character.corahwh_oaooanoorc,
      created: character.oarcworaaowowa,
      edited: character.wowaahaowowa,
      species: character.cakwooaahwoc,
      starships: character.caorarccacahakc,
      url: character.hurcan,
      vehicles: character.howoacahoaanwoc,
    })) as TCharacter[];
