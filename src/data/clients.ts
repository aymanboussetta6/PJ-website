/**
 * Clients shown in the "references" wall on the home page.
 * - Only list companies PJ Telecom actually works for and that agreed to be named.
 * - `url` must be the company's official site; leave it out when unknown (no link is rendered).
 * - Logo: drop `<key>.svg` (or .png/.webp) in src/assets/logos/ — see the README there.
 *   Until a logo file exists, the company name is shown as text.
 */
export interface Client {
  key: string;
  name: string;
  url?: string;
}

export const CLIENTS: Client[] = [
  { key: 'orange', name: 'Orange', url: 'https://www.orange.com/' },
  { key: 'free', name: 'Free', url: 'https://www.free.fr/' },
  { key: 'bouygues-telecom', name: 'Bouygues Telecom', url: 'https://www.bouyguestelecom.fr/' },
  { key: 'telencia', name: 'Telencia' }, // official website to be confirmed
  { key: 'tdf', name: 'TDF', url: 'https://www.tdf.fr/' },
  { key: 'cellnex', name: 'Cellnex', url: 'https://www.cellnex.com/' },
  { key: 'totem', name: 'TOTEM', url: 'https://www.totemtowers.com/' },
  { key: 'sncf', name: 'SNCF', url: 'https://www.sncf.com/' },
  { key: 'circet', name: 'Circet', url: 'https://www.circet.fr/' },
  { key: 'spie', name: 'SPIE', url: 'https://www.spie.com/' },
  { key: 'axione', name: 'Axione', url: 'https://www.axione.com/' },
  { key: 'axians', name: 'Axians', url: 'https://www.axians.fr/' },
  { key: 'nge', name: 'NGE', url: 'https://www.nge.fr/' },
];
