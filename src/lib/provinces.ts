export interface Province {
  abbreviation: string
  name: string
}

export const provinces: Array<Province> = [
  { abbreviation: 'AB', name: 'ALBERTA' },
  { abbreviation: 'BC', name: 'BRITISH COLUMBIA' },
  { abbreviation: 'MB', name: 'MANITOBA' },
  { abbreviation: 'NB', name: 'NEW BRUNSWICK' },
  { abbreviation: 'NL', name: 'NEWFOUNDLAND AND LABRADOR' },
  { abbreviation: 'NS', name: 'NOVA SCOTIA' },
  { abbreviation: 'ON', name: 'ONTARIO' },
  { abbreviation: 'PE', name: 'PRINCE EDWARD ISLAND' },
  { abbreviation: 'QC', name: 'QUEBEC' },
  { abbreviation: 'SK', name: 'SASKATCHEWAN' },
  { abbreviation: 'NT', name: 'NORTHWEST TERRITORIES' },
  { abbreviation: 'NU', name: 'NUNAVUT' },
  { abbreviation: 'YT', name: 'YUKON' },
]

export function getProvinceByAbbr(abbr: string): Province {
  const result = provinces.find((province) => province.abbreviation === abbr)

  if (!result) return { abbreviation: '', name: '' }

  return result
}
