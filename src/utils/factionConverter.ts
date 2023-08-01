export const factionConverter = (faction: any) => {
  switch (faction) {
    case 'Canadian Armed Forces':
      faction = 'CAF'
      break
    case 'British Armed Forces':
      faction = 'GB'
      break
    case 'Insurgent Forces':
      faction = 'INS'
      break
    case 'Irregular Militia Forces':
      faction = 'MIL'
      break
    case 'Russian Ground Forces':
      faction = 'RUS'
      break
    case 'Russian Airborne Forces':
      faction = 'RUS'
      break
    case 'United States Army':
      faction = 'USA'
      break
    case 'United States Marine Corps':
      faction = 'USMC'
      break
    case 'Middle Eastern Alliance':
      faction = 'MEA'
      break
    case 'Australian Defence Force':
      faction = 'AUS'
      break
    case "People's Liberation Army":
      faction = 'PLA'
      break
    default:
      faction = '---'
      break
  }
  return faction
}
