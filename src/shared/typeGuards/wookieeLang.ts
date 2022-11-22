import { TSwApiDataRequest, TSwApiDataRequestWookiee, TCharacter, TCharacterWookiee } from 'store/slice/swapi/types';

export function isWookieeResponse(
  response: TSwApiDataRequestWookiee<TCharacterWookiee> | TSwApiDataRequest<TCharacter>,
): response is TSwApiDataRequestWookiee<TCharacterWookiee> {
  return (response as TSwApiDataRequestWookiee<TCharacterWookiee>).oaoohuwhao !== undefined;
}
