import iso6391 from 'iso-639-1';

export function getLanguageName(languageCode: string) {
  const languageName = iso6391.getName(languageCode);
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return languageName || 'Unknown Language';
}
