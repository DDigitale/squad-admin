//normalize json example
// const actionsData = rawMaps.map(
//     ({ Name, rawName, gamemode, mapName, lighting, team1, team2 }) => ({
//       Name,
//       rawName,
//       gamemode,
//       mapName,
//       lighting,
//       team1: { name: team1.teamSetupName, tickets: team1.tickets },
//       team2: { name: team2.teamSetupName, tickets: team2.tickets },
//     })
// )
//
// console.log(actionsData)

export const mapsNormalized = [
  {
    Name: 'Anvil AAS v1',
    rawName: 'Anvil_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Anvil',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 5th Battalion, Royal Australian Regiment',
      tickets: '300',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '300',
    },
  },
  {
    Name: 'Anvil AAS v2',
    rawName: 'Anvil_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Anvil',
    lighting: 'Sunrise',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '350',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '350',
    },
  },
  {
    Name: 'Anvil Invasion v1',
    rawName: 'Anvil_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Anvil',
    lighting: 'Sunrise',
    team1: {
      name: 'ADF 5th Battalion, Royal Australian Regiment',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '800',
    },
  },
  {
    Name: 'Anvil Invasion v2',
    rawName: 'Anvil_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Anvil',
    lighting: 'Night',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '800',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '200',
    },
  },
  {
    Name: 'Anvil RAAS v1',
    rawName: 'Anvil_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Anvil',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'Russian Battalion Tactical Group',
      tickets: '400',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '400',
    },
  },
  {
    Name: 'Anvil RAAS v2',
    rawName: 'Anvil_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Anvil',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF LdSH Regiment Heavy Armor Troop',
      tickets: '300',
    },
    team2: {
      name: 'MEA 60th Prince Assur Armored Brigade',
      tickets: '300',
    },
  },
  {
    Name: 'Anvil RAAS v3',
    rawName: 'Anvil_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Anvil',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '400',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '400',
    },
  },
  {
    Name: 'Anvil RAAS v4',
    rawName: 'Anvil_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Anvil',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '300',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '300',
    },
  },
  {
    Name: 'Anvil Skirmish v1',
    rawName: 'Anvil_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Anvil',
    lighting: 'Cloudy Mid Day',
    team1: {
      name: 'ADF 5th Battalion, Royal Australian Regiment',
      tickets: '200',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '200',
    },
  },
  {
    Name: 'Anvil TC v1',
    rawName: 'Anvil_TC_v1',
    gamemode: 'TC',
    mapName: 'Anvil',
    lighting: 'Cloudy Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '400',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '400',
    },
  },
  {
    Name: 'Al Basrah AAS v1',
    rawName: 'AlBasrah_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Al Basrah',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Al Basrah AAS v2',
    rawName: 'AlBasrah_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Al Basrah',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '250',
    },
  },
  {
    Name: 'Al Basrah AAS v3',
    rawName: 'AlBasrah_AAS_v3',
    gamemode: 'AAS',
    mapName: 'Al Basrah',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '250',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '250',
    },
  },
  {
    Name: 'Al Basrah Insurgency v1',
    rawName: 'AlBasrah_Insurgency_v1',
    gamemode: 'Insurgency',
    mapName: 'Al Basrah',
    lighting: 'Sunrise',
    team1: {
      name: 'British Armed Forces',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '1000',
    },
  },
  {
    Name: 'Al Basrah Invasion v1',
    rawName: 'AlBasrah_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Al Basrah',
    lighting: 'Sunrise',
    team1: {
      name: 'British Armed Forces',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '900',
    },
  },
  {
    Name: 'Al Basrah Invasion v2',
    rawName: 'AlBasrah_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Al Basrah',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC 1st Battalion, 1st Marines',
      tickets: '200',
    },
    team2: {
      name: 'Insurgent Rebel Federation',
      tickets: '900',
    },
  },
  {
    Name: 'Al Basrah Invasion v3',
    rawName: 'AlBasrah_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Al Basrah',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '900',
    },
  },
  {
    Name: 'Al Basrah Invasion v4',
    rawName: 'AlBasrah_Invasion_v4',
    gamemode: 'Invasion',
    mapName: 'Al Basrah',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF Royal 22e Régiment Mechanized Platoon',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '900',
    },
  },
  {
    Name: 'Al Basrah Invasion v5',
    rawName: 'AlBasrah_Invasion_v5',
    gamemode: 'Invasion',
    mapName: 'Al Basrah',
    lighting: 'Sunrise',
    team1: {
      name: 'CAF LdSH Regiment Heavy Armor Troop',
      tickets: '200',
    },
    team2: {
      name: 'MEA 60th Prince Assur Armored Brigade',
      tickets: '900',
    },
  },
  {
    Name: 'Al Basrah Invasion v6',
    rawName: 'AlBasrah_Invasion_v6',
    gamemode: 'Invasion',
    mapName: 'Al Basrah',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 3rd Battallion PPCLI Infantry Platoon',
      tickets: '900',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '250',
    },
  },
  {
    Name: 'Al Basrah RAAS v1',
    rawName: 'AlBasrah_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Al Basrah',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'Local Militia Group',
      tickets: '300',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '300',
    },
  },
  {
    Name: 'Al Basrah Seed v1',
    rawName: 'AlBasrah_Seed_v1',
    gamemode: 'Seed',
    mapName: 'Al Basrah',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Al Basrah Skirmish v1',
    rawName: 'AlBasrah_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Al Basrah',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'UK 1st Battalion, Grenadier Guards',
      tickets: '150',
    },
    team2: {
      name: 'MEA 4th Border Guards Group',
      tickets: '150',
    },
  },
  {
    Name: 'Al Basrah Skirmish v2',
    rawName: 'AlBasrah_Skirmish_v2',
    gamemode: 'Skirmish',
    mapName: 'Al Basrah',
    lighting: 'Sunrise',
    team1: {
      name: "The Peoples' Front Militia",
      tickets: '150',
    },
    team2: {
      name: 'Insurgent Homeland Freedom Fighters',
      tickets: '150',
    },
  },
  {
    Name: 'Al Basrah TA v1',
    rawName: 'AlBasrah_TA_v1',
    gamemode: 'TA',
    mapName: 'Al Basrah',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '24',
    },
    team2: {
      name: 'US Brigade Combat Team',
      tickets: '24',
    },
  },
  {
    Name: 'Al Basrah TC v1',
    rawName: 'AlBasrah_TC_v1',
    gamemode: 'TC',
    mapName: 'Al Basrah',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '400',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '400',
    },
  },
  {
    Name: 'Al Basrah TC v2',
    rawName: 'AlBasrah_TC_v2',
    gamemode: 'TC',
    mapName: 'Al Basrah',
    lighting: 'Sunrise',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '400',
    },
  },
  {
    Name: 'Belaya Pass AAS v1',
    rawName: 'Belaya_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Belaya Pass',
    lighting: 'Overcast',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '300',
    },
  },
  {
    Name: 'Belaya Pass AAS v2',
    rawName: 'Belaya_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Belaya Pass',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Belaya Pass AAS v3',
    rawName: 'Belaya_AAS_v3',
    gamemode: 'AAS',
    mapName: 'Belaya Pass',
    lighting: 'Overcast',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '300',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '300',
    },
  },
  {
    Name: 'Belaya Pass Invasion v1',
    rawName: 'Belaya_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Belaya Pass',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '800',
    },
  },
  {
    Name: 'Belaya Pass Invasion v2',
    rawName: 'Belaya_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Belaya Pass',
    lighting: 'Overcast',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '900',
    },
  },
  {
    Name: 'Belaya Pass Invasion v3',
    rawName: 'Belaya_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Belaya Pass',
    lighting: 'Overcast',
    team1: {
      name: 'British Armed Forces',
      tickets: '200',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '700',
    },
  },
  {
    Name: 'Belaya Pass RAAS v1',
    rawName: 'Belaya_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Belaya Pass',
    lighting: 'Overcast',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Belaya Pass RAAS v2',
    rawName: 'Belaya_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Belaya Pass',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC 3rd Light Armored Recon Battalion',
      tickets: '300',
    },
    team2: {
      name: 'United Liberation Force Militia',
      tickets: '320',
    },
  },
  {
    Name: 'Belaya Pass RAAS v3',
    rawName: 'Belaya_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Belaya Pass',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '300',
    },
  },
  {
    Name: 'Belaya Pass RAAS v4',
    rawName: 'Belaya_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Belaya Pass',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '300',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '300',
    },
  },
  {
    Name: 'Belaya Pass RAAS v5',
    rawName: 'Belaya_RAAS_v5',
    gamemode: 'RAAS',
    mapName: 'Belaya Pass',
    lighting: 'Overcast',
    team1: {
      name: 'CAF PPCLI UN Protection Force',
      tickets: '300',
    },
    team2: {
      name: 'Allied Republican Army Militia',
      tickets: '320',
    },
  },
  {
    Name: 'Belaya Pass Skirmish v1',
    rawName: 'Belaya_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Belaya Pass',
    lighting: 'Overcast',
    team1: {
      name: 'UK 1st Battalion, Grenadier Guards',
      tickets: '150',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '150',
    },
  },
  {
    Name: 'Belaya Pass TC v1',
    rawName: 'Belaya_TC_v1',
    gamemode: 'TC',
    mapName: 'Belaya Pass',
    lighting: 'Overcast',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '400',
    },
  },
  {
    Name: 'Chora AAS v1',
    rawName: 'Chora_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Chora AAS v2',
    rawName: 'Chora_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC 3rd Light Armored Recon Battalion',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Motorized Rifle Platoon',
      tickets: '300',
    },
  },
  {
    Name: 'Chora AAS v3',
    rawName: 'Chora_AAS_v3',
    gamemode: 'AAS',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Chora AAS v4',
    rawName: 'Chora_AAS_v4',
    gamemode: 'AAS',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 5th Battalion, Royal Australian Regiment',
      tickets: '300',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '300',
    },
  },
  {
    Name: 'Chora AAS v5',
    rawName: 'Chora_AAS_v5',
    gamemode: 'AAS',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 3rd Battallion PPCLI Infantry Platoon',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '300',
    },
  },
  {
    Name: 'Chora Insurgency v1',
    rawName: 'Chora_Insurgency_v1',
    gamemode: 'Insurgency',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '1000',
    },
  },
  {
    Name: 'Chora Invasion v1',
    rawName: 'Chora_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '900',
    },
  },
  {
    Name: 'Chora Invasion v2',
    rawName: 'Chora_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Chora',
    lighting: 'Early Dawn (Dark)',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '900',
    },
  },
  {
    Name: 'Chora RAAS v1',
    rawName: 'Chora_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Chora RAAS v2',
    rawName: 'Chora_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Chora RAAS v3',
    rawName: 'Chora_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF Mentoring Task Force',
      tickets: '300',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '340',
    },
  },
  {
    Name: 'Chora RAAS v4',
    rawName: 'Chora_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 3rd Battallion PPCLI Infantry Platoon',
      tickets: '300',
    },
    team2: {
      name: 'MEA Vizir Hussein 2nd Support Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Chora Skirmish v1',
    rawName: 'Chora_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '150',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '150',
    },
  },
  {
    Name: 'Chora TC v1',
    rawName: 'Chora_TC_v1',
    gamemode: 'TC',
    mapName: 'Chora',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '400',
    },
  },
  {
    Name: 'Fallujah AAS v1',
    rawName: 'Fallujah_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Fallujah',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '250',
    },
  },
  {
    Name: 'Fallujah AAS v2',
    rawName: 'Fallujah_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Fallujah',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'USMC 31st Marine Expeditionary Unit',
      tickets: '300',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Fallujah Insurgency v1',
    rawName: 'Fallujah_Insurgency_v1',
    gamemode: 'Insurgency',
    mapName: 'Fallujah',
    lighting: 'Dusty Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '1000',
    },
  },
  {
    Name: 'Fallujah Invasion v1',
    rawName: 'Fallujah_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Fallujah',
    lighting: 'Dusty Mid Day',
    team1: {
      name: 'USMC 1st Battalion, 1st Marines',
      tickets: '200',
    },
    team2: {
      name: 'Insurgent Homeland Freedom Fighters',
      tickets: '900',
    },
  },
  {
    Name: 'Fallujah Invasion v2',
    rawName: 'Fallujah_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Fallujah',
    lighting: 'Dusty Mid Day',
    team1: {
      name: 'MEA Combined Arms Battalion',
      tickets: '800',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '250',
    },
  },
  {
    Name: 'Fallujah Invasion v3',
    rawName: 'Fallujah_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Fallujah',
    lighting: 'Dusty Mid Day',
    team1: {
      name: 'USMC 1st Battalion, 5th Marines',
      tickets: '200',
    },
    team2: {
      name: 'Insurgent Homeland Freedom Fighters',
      tickets: '900',
    },
  },
  {
    Name: 'Fallujah Invasion v4',
    rawName: 'Fallujah_Invasion_v4',
    gamemode: 'Invasion',
    mapName: 'Fallujah',
    lighting: 'Dusty Mid Day',
    team1: {
      name: 'ADF 1st Armored',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '800',
    },
  },
  {
    Name: 'Fallujah Invasion v5',
    rawName: 'Fallujah_Invasion_v5',
    gamemode: 'Invasion',
    mapName: 'Fallujah',
    lighting: 'Clear Night',
    team1: {
      name: 'CAF Royal 22e Régiment Mechanized Platoon',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '900',
    },
  },
  {
    Name: 'Fallujah RAAS v1',
    rawName: 'Fallujah_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Fallujah',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'USMC 31st Marine Expeditionary Unit',
      tickets: '250',
    },
    team2: {
      name: 'MEA 3rd King Qadesh Mechanized Infantry Brigade',
      tickets: '250',
    },
  },
  {
    Name: 'Fallujah RAAS v2',
    rawName: 'Fallujah_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Fallujah',
    lighting: 'Dusty Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Fallujah RAAS v3',
    rawName: 'Fallujah_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Fallujah',
    lighting: 'Dusty Mid Day',
    team1: {
      name: 'USMC 31st Marine Expeditionary Unit',
      tickets: '250',
    },
    team2: {
      name: 'MEA 3rd King Qadesh Mechanized Infantry Brigade',
      tickets: '250',
    },
  },
  {
    Name: 'Fallujah RAAS v4',
    rawName: 'Fallujah_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Fallujah',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Fallujah RAAS v5',
    rawName: 'Fallujah_RAAS_v5',
    gamemode: 'RAAS',
    mapName: 'Fallujah',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '300',
    },
    team2: {
      name: 'MEA 1st Battalion, Legion of Babylon',
      tickets: '300',
    },
  },
  {
    Name: 'Fallujah RAAS v6',
    rawName: 'Fallujah_RAAS_v6',
    gamemode: 'RAAS',
    mapName: 'Fallujah',
    lighting: 'Sand Storm Mid Day',
    team1: {
      name: 'USMC 1st Battalion, 1st Marines',
      tickets: '300',
    },
    team2: {
      name: 'Freedom Fighter Mechanized Platoon',
      tickets: '340',
    },
  },
  {
    Name: 'Fallujah Seed v1',
    rawName: 'Fallujah_Seed_v1',
    gamemode: 'Seed',
    mapName: 'Fallujah',
    lighting: 'Dusty Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Fallujah Skirmish v1',
    rawName: 'Fallujah_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Fallujah',
    lighting: 'Dusty Mid Day',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '250',
    },
    team2: {
      name: 'MEA 4th Border Guards Group',
      tickets: '250',
    },
  },
  {
    Name: 'Fallujah Skirmish v2',
    rawName: 'Fallujah_Skirmish_v2',
    gamemode: 'Skirmish',
    mapName: 'Fallujah',
    lighting: 'Sand Storm Mid Day',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '200',
    },
    team2: {
      name: 'Insurgent Homeland Freedom Fighters',
      tickets: '200',
    },
  },
  {
    Name: 'Fallujah TC v1',
    rawName: 'Fallujah_TC_v1',
    gamemode: 'TC',
    mapName: 'Fallujah',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Fallujah TC v2',
    rawName: 'Fallujah_TC_v2',
    gamemode: 'TC',
    mapName: 'Fallujah',
    lighting: 'Sand Storm Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: "Fool's Road AAS v1",
    rawName: 'FoolsRoad_AAS_v1',
    gamemode: 'AAS',
    mapName: "Fool's Road",
    lighting: 'Sunny Afternoon',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '250',
    },
  },
  {
    Name: "Fool's Road AAS v2",
    rawName: 'FoolsRoad_AAS_v2',
    gamemode: 'AAS',
    mapName: "Fool's Road",
    lighting: 'Sunny Afternoon',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '250',
    },
  },
  {
    Name: "Fool's Road Destruction v1",
    rawName: 'FoolsRoad_Destruction_v1',
    gamemode: 'Destruction',
    mapName: "Fool's Road",
    lighting: 'Sunny Afternoon',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '1000',
    },
  },
  {
    Name: "Fool's Road Invasion v1",
    rawName: 'FoolsRoad_Invasion_v1',
    gamemode: 'Invasion',
    mapName: "Fool's Road",
    lighting: 'Sunny Afternoon',
    team1: {
      name: 'British Armed Forces',
      tickets: '200',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '700',
    },
  },
  {
    Name: "Fool's Road RAAS v1",
    rawName: 'FoolsRoad_RAAS_v1',
    gamemode: 'RAAS',
    mapName: "Fool's Road",
    lighting: 'Sunny Afternoon',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: "Fool's Road RAAS v2",
    rawName: 'FoolsRoad_RAAS_v2',
    gamemode: 'RAAS',
    mapName: "Fool's Road",
    lighting: 'Sunny Afternoon',
    team1: {
      name: 'British Armed Forces',
      tickets: '250',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '250',
    },
  },
  {
    Name: "Fool's Road RAAS v3",
    rawName: 'FoolsRoad_RAAS_v3',
    gamemode: 'RAAS',
    mapName: "Fool's Road",
    lighting: 'Sunny Afternoon',
    team1: {
      name: 'British Armed Forces',
      tickets: '250',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '250',
    },
  },
  {
    Name: "Fool's Road RAAS v4",
    rawName: 'FoolsRoad_RAAS_v4',
    gamemode: 'RAAS',
    mapName: "Fool's Road",
    lighting: 'Sunny Afternoon',
    team1: {
      name: 'ADF 5th Battalion, Royal Australian Regiment',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '300',
    },
  },
  {
    Name: "Fool's Road RAAS v5",
    rawName: 'FoolsRoad_RAAS_v5',
    gamemode: 'RAAS',
    mapName: "Fool's Road",
    lighting: 'Sunny Afternoon',
    team1: {
      name: 'CAF Canadian Combat Support Brigade',
      tickets: '250',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '250',
    },
  },
  {
    Name: "Fool's Road Skirmish v1",
    rawName: 'FoolsRoad_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: "Fool's Road",
    lighting: 'Sunny Afternoon',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '150',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '150',
    },
  },
  {
    Name: "Fool's Road Skirmish v2",
    rawName: 'FoolsRoad_Skirmish_v2',
    gamemode: 'Skirmish',
    mapName: "Fool's Road",
    lighting: 'Sunny Afternoon',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
  },
  {
    Name: "Fool's Road TC v1",
    rawName: 'FoolsRoad_TC_v1',
    gamemode: 'TC',
    mapName: "Fool's Road",
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '400',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '400',
    },
  },
  {
    Name: 'Goose Bay AAS v1',
    rawName: 'GooseBay_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Goose Bay',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF Royal 22e Régiment Mechanized Platoon',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Motorized Rifle Platoon',
      tickets: '300',
    },
  },
  {
    Name: 'Goose Bay AAS v2',
    rawName: 'GooseBay_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Goose Bay',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF Royal Newfoundland Regiment',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Rifle Division Reconaissance Platoon',
      tickets: '300',
    },
  },
  {
    Name: 'Goose Bay Invasion v1',
    rawName: 'GooseBay_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Goose Bay',
    lighting: 'Overcast',
    team1: {
      name: 'CAF Royal Newfoundland Regiment',
      tickets: '900',
    },
    team2: {
      name: 'RUS 205th Motorized Rifle Platoon',
      tickets: '200',
    },
  },
  {
    Name: 'Goose Bay Invasion v2',
    rawName: 'GooseBay_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Goose Bay',
    lighting: 'Overcast',
    team1: {
      name: 'CAF Royal 22e Régiment Mechanized Platoon',
      tickets: '200',
    },
    team2: {
      name: 'Newfoundland Liberation Front',
      tickets: '900',
    },
  },
  {
    Name: 'Goose Bay Invasion v3',
    rawName: 'GooseBay_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Goose Bay',
    lighting: 'Sunset',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '800',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '200',
    },
  },
  {
    Name: 'Goose Bay Invasion v4',
    rawName: 'GooseBay_Invasion_v4',
    gamemode: 'Invasion',
    mapName: 'Goose Bay',
    lighting: 'Overcast',
    team1: {
      name: 'USMC 4th Assault Amphibian Battalion',
      tickets: '200',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '900',
    },
  },
  {
    Name: 'Goose Bay RAAS v1',
    rawName: 'GooseBay_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Goose Bay',
    lighting: 'Overcast',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '350',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '350',
    },
  },
  {
    Name: 'Goose Bay RAAS v2',
    rawName: 'GooseBay_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Goose Bay',
    lighting: 'Overcast',
    team1: {
      name: 'US 37th Armor Regiment',
      tickets: '350',
    },
    team2: {
      name: 'RUS 6th Separate Czestochowa Tank Brigade ',
      tickets: '350',
    },
  },
  {
    Name: 'Goose Bay RAAS v3',
    rawName: 'GooseBay_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Goose Bay',
    lighting: 'Overcast',
    team1: {
      name: 'USMC 31st Marine Expeditionary Unit',
      tickets: '350',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '350',
    },
  },
  {
    Name: 'Goose Bay Skirmish v1',
    rawName: 'GooseBay_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Goose Bay',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 3rd Battallion PPCLI',
      tickets: '150',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '150',
    },
  },
  {
    Name: 'Gorodok AAS v1',
    rawName: 'Gorodok_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Gorodok',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Gorodok AAS v2',
    rawName: 'Gorodok_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Gorodok',
    lighting: 'Sunset',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Gorodok AAS v3',
    rawName: 'Gorodok_AAS_v3',
    gamemode: 'AAS',
    mapName: 'Gorodok',
    lighting: 'Overcast',
    team1: {
      name: 'CAF LdSH Armored Recce Troop',
      tickets: '300',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '300',
    },
  },
  {
    Name: 'Gorodok AAS v4',
    rawName: 'Gorodok_AAS_v4',
    gamemode: 'AAS',
    mapName: 'Gorodok',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC 1st Battalion, 1st Marines',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '300',
    },
  },
  {
    Name: 'Gorodok Destruction v1',
    rawName: 'Gorodok_Destruction_v1',
    gamemode: 'Destruction',
    mapName: 'Gorodok',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '1000',
    },
  },
  {
    Name: 'Gorodok Insurgency v1',
    rawName: 'Gorodok_Insurgency_v1',
    gamemode: 'Insurgency',
    mapName: 'Gorodok',
    lighting: 'Overcast',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '1000',
    },
  },
  {
    Name: 'Gorodok Invasion v1',
    rawName: 'Gorodok_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Gorodok',
    lighting: 'Sunset',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '900',
    },
  },
  {
    Name: 'Gorodok Invasion v2',
    rawName: 'Gorodok_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Gorodok',
    lighting: 'Overcast',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '900',
    },
  },
  {
    Name: 'Gorodok Invasion v3',
    rawName: 'Gorodok_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Gorodok',
    lighting: 'Sunset',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '200',
    },
    team2: {
      name: "The Peoples' Front Militia",
      tickets: '900',
    },
  },
  {
    Name: 'Gorodok RAAS v1',
    rawName: 'Gorodok_RAAS_v01',
    gamemode: 'RAAS',
    mapName: 'Gorodok',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Gorodok RAAS v2',
    rawName: 'Gorodok_RAAS_v02',
    gamemode: 'RAAS',
    mapName: 'Gorodok',
    lighting: 'Sunset',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Gorodok RAAS v3',
    rawName: 'Gorodok_RAAS_v03',
    gamemode: 'RAAS',
    mapName: 'Gorodok',
    lighting: 'Overcast',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Gorodok RAAS v4',
    rawName: 'Gorodok_RAAS_v04',
    gamemode: 'RAAS',
    mapName: 'Gorodok',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Gorodok RAAS v5',
    rawName: 'Gorodok_RAAS_v05',
    gamemode: 'RAAS',
    mapName: 'Gorodok',
    lighting: 'Sunset',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Gorodok RAAS v6',
    rawName: 'Gorodok_RAAS_v06',
    gamemode: 'RAAS',
    mapName: 'Gorodok',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC 1st Battalion, 1st Marines',
      tickets: '350',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '350',
    },
  },
  {
    Name: 'Gorodok RAAS v7',
    rawName: 'Gorodok_RAAS_v07',
    gamemode: 'RAAS',
    mapName: 'Gorodok',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 1st Armored',
      tickets: '300',
    },
    team2: {
      name: 'RUS 6th Separate Czestochowa Tank Brigade ',
      tickets: '300',
    },
  },
  {
    Name: 'Gorodok RAAS v8',
    rawName: 'Gorodok_RAAS_v08',
    gamemode: 'RAAS',
    mapName: 'Gorodok',
    lighting: 'Overcast',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '300',
    },
    team2: {
      name: 'Allied Republican Army Militia',
      tickets: '340',
    },
  },
  {
    Name: 'Gorodok RAAS v9',
    rawName: 'Gorodok_RAAS_v09',
    gamemode: 'RAAS',
    mapName: 'Gorodok',
    lighting: 'Overcast',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '350',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '350',
    },
  },
  {
    Name: 'Gorodok RAAS v10',
    rawName: 'Gorodok_RAAS_v10',
    gamemode: 'RAAS',
    mapName: 'Gorodok',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 3rd Battalion RCR Air Assault Platoon',
      tickets: '300',
    },
    team2: {
      name: "The Peoples' Front Militia Mechanized Platoon",
      tickets: '340',
    },
  },
  {
    Name: 'Gorodok RAAS v11',
    rawName: 'Gorodok_RAAS_v11',
    gamemode: 'RAAS',
    mapName: 'Gorodok',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '300',
    },
    team2: {
      name: 'US 1st Cavalry Regiment',
      tickets: '300',
    },
  },
  {
    Name: 'Gorodok Skirmish v1',
    rawName: 'Gorodok_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Gorodok',
    lighting: 'Overcast',
    team1: {
      name: 'UK 1st Battalion, Grenadier Guards',
      tickets: '150',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '150',
    },
  },
  {
    Name: 'Gorodok TC v1',
    rawName: 'Gorodok_TC_v1',
    gamemode: 'TC',
    mapName: 'Gorodok',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '400',
    },
  },
  {
    Name: 'Gorodok TC v2',
    rawName: 'Gorodok_TC_v2',
    gamemode: 'TC',
    mapName: 'Gorodok',
    lighting: 'Sunset',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '450',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '450',
    },
  },
  {
    Name: "Jensen's Training Range",
    rawName: 'JensensRange_GB-MIL',
    gamemode: 'Training',
    mapName: "Jensen's",
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'British Armed Forces Battlegroup',
      tickets: '99999',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '99999',
    },
  },
  {
    Name: "Jensen's Training Range",
    rawName: 'JensensRange_US-RUS',
    gamemode: 'Training',
    mapName: "Jensen's",
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '99999',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '99999',
    },
  },
  {
    Name: "Jensen's Training Range",
    rawName: 'JensensRange_USMC-MEA',
    gamemode: 'Training',
    mapName: "Jensen's",
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC Marine Expeditionary Unit',
      tickets: '99999',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '99999',
    },
  },
  {
    Name: "Jensen's Training Range",
    rawName: 'JensensRange_CAF-INS',
    gamemode: 'Training',
    mapName: "en's",
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '99999',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '99999',
    },
  },
  {
    Name: "Jensen's Training Range",
    rawName: 'JensensRange_AUS-RUS',
    gamemode: 'Training',
    mapName: "Jensen's",
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '99999',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '99999',
    },
  },
  {
    Name: 'Kamdesh Highlands AAS v1',
    rawName: 'Kamdesh_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '300',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '300',
    },
  },
  {
    Name: 'Kamdesh Highlands Insurgency v1',
    rawName: 'Kamdesh_Insurgency_v1',
    gamemode: 'Insurgency',
    mapName: 'Kamdesh Highlands',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '1000',
    },
  },
  {
    Name: 'Kamdesh Highlands Insurgency v2',
    rawName: 'Kamdesh_Insurgency_v2',
    gamemode: 'Insurgency',
    mapName: 'Kamdesh Highlands',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '1000',
    },
  },
  {
    Name: 'Kamdesh Highlands Invasion v1',
    rawName: 'Kamdesh_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '900',
    },
  },
  {
    Name: 'Kamdesh Highlands Invasion v2',
    rawName: 'Kamdesh_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Kamdesh Highlands',
    lighting: 'Sunset',
    team1: {
      name: 'British Armed Forces',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '900',
    },
  },
  {
    Name: 'Kamdesh Highlands Invasion v3',
    rawName: 'Kamdesh_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Kamdesh Highlands',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '800',
    },
  },
  {
    Name: 'Kamdesh Highlands Invasion v4',
    rawName: 'Kamdesh_Invasion_v4',
    gamemode: 'Invasion',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '800',
    },
  },
  {
    Name: 'Kamdesh Highlands Invasion v5',
    rawName: 'Kamdesh_Invasion_v5',
    gamemode: 'Invasion',
    mapName: 'Kamdesh Highlands',
    lighting: 'Sunset',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '800',
    },
  },
  {
    Name: 'Kamdesh Highlands Invasion v6',
    rawName: 'Kamdesh_Invasion_v6',
    gamemode: 'Invasion',
    mapName: 'Kamdesh Highlands',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '200',
    },
    team2: {
      name: 'MEA 4th Border Guards Group',
      tickets: '800',
    },
  },
  {
    Name: 'Kamdesh Highlands Invasion v7',
    rawName: 'Kamdesh_Invasion_v7',
    gamemode: 'Invasion',
    mapName: 'Kamdesh Highlands',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF Royal 22e Régiment Mechanized Platoon',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '900',
    },
  },
  {
    Name: 'Kamdesh Highlands RAAS v1',
    rawName: 'Kamdesh_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'Local Militia Group',
      tickets: '300',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '300',
    },
  },
  {
    Name: 'Kamdesh Highlands RAAS v2',
    rawName: 'Kamdesh_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'British Armed Forces',
      tickets: '250',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '250',
    },
  },
  {
    Name: 'Kamdesh Highlands RAAS v3',
    rawName: 'Kamdesh_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Kamdesh Highlands RAAS v4',
    rawName: 'Kamdesh_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Kamdesh Highlands RAAS v5',
    rawName: 'Kamdesh_RAAS_v5',
    gamemode: 'RAAS',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'ADF 1st Armored',
      tickets: '300',
    },
    team2: {
      name: 'MEA 60th Prince Assur Armored Brigade',
      tickets: '300',
    },
  },
  {
    Name: 'Kamdesh Highlands RAAS v6',
    rawName: 'Kamdesh_RAAS_v6',
    gamemode: 'RAAS',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '300',
    },
    team2: {
      name: 'RUS 6th Separate Czestochowa Tank Brigade ',
      tickets: '300',
    },
  },
  {
    Name: 'Kamdesh Highlands RAAS v7',
    rawName: 'Kamdesh_RAAS_v7',
    gamemode: 'RAAS',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'CAF 3rd Battallion PPCLI Infantry Platoon',
      tickets: '300',
    },
    team2: {
      name: 'Insurgent Mechanized Platoon',
      tickets: '300',
    },
  },
  {
    Name: 'Kamdesh Highlands Skirmish v1',
    rawName: 'Kamdesh_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Kamdesh Highlands',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 5th Battalion, Royal Australian Regiment',
      tickets: '150',
    },
    team2: {
      name: 'UK 1st Battalion, Grenadier Guards',
      tickets: '150',
    },
  },
  {
    Name: 'Kamdesh Highlands TC v1',
    rawName: 'Kamdesh_TC_v1',
    gamemode: 'TC',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'British Armed Forces',
      tickets: '400',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '400',
    },
  },
  {
    Name: 'Kamdesh Highlands TC v2',
    rawName: 'Kamdesh_TC_v2',
    gamemode: 'TC',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'Local Militia Group',
      tickets: '400',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '400',
    },
  },
  {
    Name: 'Kamdesh Highlands TC v3',
    rawName: 'Kamdesh_TC_v3',
    gamemode: 'TC',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '400',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '400',
    },
  },
  {
    Name: 'Kamdesh Highlands TC v4',
    rawName: 'Kamdesh_TC_v4',
    gamemode: 'TC',
    mapName: 'Kamdesh Highlands',
    lighting: 'Stormy',
    team1: {
      name: 'CAF Royal 22e Régiment Mechanized Platoon',
      tickets: '450',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '450',
    },
  },
  {
    Name: 'Kohat Toi AAS v1',
    rawName: 'Kohat_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Kohat Toi AAS v2',
    rawName: 'Kohat_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Kohat Toi',
    lighting: 'Early Morning',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Kohat Toi AAS v3',
    rawName: 'Kohat_AAS_v3',
    gamemode: 'AAS',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '300',
    },
  },
  {
    Name: 'Kohat Toi Insurgency v1',
    rawName: 'Kohat_Insurgency_v1',
    gamemode: 'Insurgency',
    mapName: 'Kohat Toi',
    lighting: 'Early Morning',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '1000',
    },
  },
  {
    Name: 'Kohat Toi Invasion v1',
    rawName: 'Kohat_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '800',
    },
  },
  {
    Name: 'Kohat Toi Invasion v2',
    rawName: 'Kohat_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '700',
    },
  },
  {
    Name: 'Kohat Toi Invasion v3',
    rawName: 'Kohat_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF Royal Canadian Regiment Battle Group',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '900',
    },
  },
  {
    Name: 'Kohat Toi RAAS v1',
    rawName: 'Kohat_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Kohat Toi RAAS v2',
    rawName: 'Kohat_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC 1st Battalion, 5th Marines',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Motorized Rifle Platoon',
      tickets: '300',
    },
  },
  {
    Name: 'Kohat Toi RAAS v3',
    rawName: 'Kohat_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Kohat Toi RAAS v4',
    rawName: 'Kohat_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Kohat Toi',
    lighting: 'Early Morning',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Kohat Toi RAAS v5',
    rawName: 'Kohat_RAAS_v5',
    gamemode: 'RAAS',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Kohat Toi RAAS v6',
    rawName: 'Kohat_RAAS_v6',
    gamemode: 'RAAS',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Kohat Toi RAAS v7',
    rawName: 'Kohat_RAAS_v7',
    gamemode: 'RAAS',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Kohat Toi RAAS v8',
    rawName: 'Kohat_RAAS_v8',
    gamemode: 'RAAS',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '300',
    },
  },
  {
    Name: 'Kohat Toi RAAS v9',
    rawName: 'Kohat_RAAS_v9',
    gamemode: 'RAAS',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF Royal Canadian Regiment Battle Group',
      tickets: '300',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '340',
    },
  },
  {
    Name: 'Kohat Toi Skirmish v1',
    rawName: 'Kohat_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '150',
    },
    team2: {
      name: 'UK 1st Battalion, Grenadier Guards',
      tickets: '150',
    },
  },
  {
    Name: 'Kohat Toi TC v1',
    rawName: 'Kohat_TC_v1',
    gamemode: 'TC',
    mapName: 'Kohat Toi',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '400',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '400',
    },
  },
  {
    Name: 'Kokan AAS v1',
    rawName: 'Kokan_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Kokan',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Kokan AAS v2',
    rawName: 'Kokan_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Kokan',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Kokan AAS v3',
    rawName: 'Kokan_AAS_v3',
    gamemode: 'AAS',
    mapName: 'Kokan',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '250',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '250',
    },
  },
  {
    Name: 'Kokan Insurgency v1',
    rawName: 'Kokan_Insurgency_v1',
    gamemode: 'Insurgency',
    mapName: 'Kokan',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '1000',
    },
  },
  {
    Name: 'Kokan Invasion v1',
    rawName: 'Kokan_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Kokan',
    lighting: 'Sunrise',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '800',
    },
  },
  {
    Name: 'Kokan RAAS v1',
    rawName: 'Kokan_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Kokan',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Kokan RAAS v2',
    rawName: 'Kokan_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Kokan',
    lighting: 'Sunrise',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Kokan RAAS v3',
    rawName: 'Kokan_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Kokan',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 5th Battalion, Royal Australian Regiment',
      tickets: '250',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '250',
    },
  },
  {
    Name: 'Kokan RAAS v4',
    rawName: 'Kokan_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Kokan',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 3rd Battallion PPCLI Infantry Platoon',
      tickets: '250',
    },
    team2: {
      name: 'MEA Vizir Hussein 2nd Support Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Kokan Skirmish v1',
    rawName: 'Kokan_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Kokan',
    lighting: 'Sunny Mid Day',
    team1: {
      name: "The Peoples' Front Militia",
      tickets: '150',
    },
    team2: {
      name: 'Insurgent Homeland Freedom Fighters',
      tickets: '150',
    },
  },
  {
    Name: 'Kokan TC v1',
    rawName: 'Kokan_TC_v1',
    gamemode: 'TC',
    mapName: 'Kokan',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '400',
    },
  },
  {
    Name: 'Lashkar Valley AAS v1',
    rawName: 'LashkarValley_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Lashkar Valley',
    lighting: 'Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '250',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '250',
    },
  },
  {
    Name: 'Lashkar Valley AAS v2',
    rawName: 'LashkarValley_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Lashkar Valley',
    lighting: 'Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Lashkar Valley AAS v3',
    rawName: 'LashkarValley_AAS_v3',
    gamemode: 'AAS',
    mapName: 'Lashkar Valley',
    lighting: 'Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '250',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '250',
    },
  },
  {
    Name: 'Lashkar Valley AAS v4',
    rawName: 'LashkarValley_AAS_v4',
    gamemode: 'AAS',
    mapName: 'Lashkar Valley',
    lighting: 'Mid Day',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '250',
    },
    team2: {
      name: 'MEA 4th Border Guards Group',
      tickets: '250',
    },
  },
  {
    Name: 'Lashkar Valley Insurgency v1',
    rawName: 'LashkarValley_Insurgency_v1',
    gamemode: 'Insurgency',
    mapName: 'Lashkar Valley',
    lighting: 'Early Morning',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '1000',
    },
  },
  {
    Name: 'Lashkar Valley Invasion v1',
    rawName: 'LashkarValley_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Lashkar Valley',
    lighting: 'Rain Storm',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '900',
    },
  },
  {
    Name: 'Lashkar Valley Invasion v2',
    rawName: 'LashkarValley_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Lashkar Valley',
    lighting: 'Mid Day',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '200',
    },
    team2: {
      name: 'Insurgent National Liberation Front',
      tickets: '900',
    },
  },
  {
    Name: 'Lashkar Valley Invasion v3',
    rawName: 'LashkarValley_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Lashkar Valley',
    lighting: 'Mid Day',
    team1: {
      name: 'CAF Royal Canadian Regiment Battle Group',
      tickets: '200',
    },
    team2: {
      name: 'Insurgent National Liberation Front',
      tickets: '900',
    },
  },
  {
    Name: 'Lashkar Valley RAAS v1',
    rawName: 'LashkarValley_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Lashkar Valley',
    lighting: 'Early Morning',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Lashkar Valley RAAS v2',
    rawName: 'LashkarValley_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Lashkar Valley',
    lighting: 'Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '250',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '250',
    },
  },
  {
    Name: 'Lashkar Valley RAAS v3',
    rawName: 'LashkarValley_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Lashkar Valley',
    lighting: 'Rain Storm',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '250',
    },
    team2: {
      name: 'MEA 3rd King Qadesh Mechanized Infantry Brigade',
      tickets: '250',
    },
  },
  {
    Name: 'Lashkar Valley RAAS v4',
    rawName: 'LashkarValley_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Lashkar Valley',
    lighting: 'Mid Day',
    team1: {
      name: 'CAF Royal Canadian Regiment Battle Group',
      tickets: '300',
    },
    team2: {
      name: 'Insurgent National Liberation Front',
      tickets: '340',
    },
  },
  {
    Name: 'Lashkar Valley RAAS v5',
    rawName: 'LashkarValley_RAAS_v5',
    gamemode: 'RAAS',
    mapName: 'Lashkar Valley',
    lighting: 'Mid Day',
    team1: {
      name: 'USMC 3rd Battalion, 2nd Marines',
      tickets: '300',
    },
    team2: {
      name: 'Insurgent National Liberation Front',
      tickets: '340',
    },
  },
  {
    Name: 'Lashkar Valley Skirmish v1',
    rawName: 'LashkarValley_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Lashkar Valley',
    lighting: 'Mid Day',
    team1: {
      name: 'ADF 5th Battalion, Royal Australian Regiment',
      tickets: '200',
    },
    team2: {
      name: 'Insurgent Homeland Freedom Fighters',
      tickets: '200',
    },
  },
  {
    Name: 'Lashkar Valley TC v1',
    rawName: 'LashkarValley_TC_v1',
    gamemode: 'TC',
    mapName: 'Lashkar Valley',
    lighting: 'Rain Storm',
    team1: {
      name: 'British Armed Forces',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Lashkar Valley TC v2',
    rawName: 'LashkarValley_TC_v2',
    gamemode: 'TC',
    mapName: 'Lashkar Valley',
    lighting: 'Rain Storm',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '450',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '450',
    },
  },
  {
    Name: 'Lashkar Valley TC v3',
    rawName: 'LashkarValley_TC_v3',
    gamemode: 'TC',
    mapName: 'Lashkar Valley',
    lighting: 'Early Morning',
    team1: {
      name: 'British Armed Forces',
      tickets: '250',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '250',
    },
  },
  {
    Name: 'Lashkar Valley TC v4',
    rawName: 'LashkarValley_TC_v4',
    gamemode: 'TC',
    mapName: 'Lashkar Valley',
    lighting: 'Rain Storm',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '250',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '250',
    },
  },
  {
    Name: 'Lashkar Valley TC v5',
    rawName: 'LashkarValley_TC_v5',
    gamemode: 'TC',
    mapName: 'Lashkar Valley',
    lighting: 'Rain Storm',
    team1: {
      name: 'CAF Royal Canadian Regiment Battle Group',
      tickets: '450',
    },
    team2: {
      name: 'Insurgent National Liberation Front',
      tickets: '450',
    },
  },
  {
    Name: 'Logar Valley AAS v1',
    rawName: 'Logar_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Logar Valley',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '200',
    },
  },
  {
    Name: 'Logar Valley AAS v2',
    rawName: 'Logar_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Logar Valley',
    lighting: 'Overcast',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '200',
    },
  },
  {
    Name: 'Logar Valley AAS v3',
    rawName: 'Logar_AAS_v3',
    gamemode: 'AAS',
    mapName: 'Logar Valley',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 5th Battalion, Royal Australian Regiment',
      tickets: '200',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '200',
    },
  },
  {
    Name: 'Logar Valley Insurgency v1',
    rawName: 'Logar_Insurgency_v1',
    gamemode: 'Insurgency',
    mapName: 'Logar Valley',
    lighting: 'Evening',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '1000',
    },
  },
  {
    Name: 'Logar Valley RAAS v1',
    rawName: 'Logar_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Logar Valley',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Logar Valley RAAS v2',
    rawName: 'Logar_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Logar Valley',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 3rd Battallion PPCLI Infantry Platoon',
      tickets: '350',
    },
    team2: {
      name: 'MEA 1st Battalion, Legion of Babylon',
      tickets: '350',
    },
  },
  {
    Name: 'Logar Valley Seed v1',
    rawName: 'Logar_Seed_v1',
    gamemode: 'Seed',
    mapName: 'Logar Valley',
    lighting: 'Evening',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '300',
    },
  },
  {
    Name: 'Logar Valley Skirmish v1',
    rawName: 'Logar_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Logar Valley',
    lighting: 'Evening',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '150',
    },
    team2: {
      name: 'MEA 4th Border Guards Group',
      tickets: '150',
    },
  },
  {
    Name: 'Logar Valley TC v1',
    rawName: 'Logar_TC_v1',
    gamemode: 'TC',
    mapName: 'Logar Valley',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '400',
    },
  },
  {
    Name: 'Manic-5 AAS v1',
    rawName: 'Manic_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Manic-5',
    lighting: 'Mid Day',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '300',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '300',
    },
  },
  {
    Name: 'Manic-5 AAS v2',
    rawName: 'Manic_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Manic-5',
    lighting: 'Mid Day',
    team1: {
      name: 'CAF 3rd Battalion RCR Air Assault Platoon',
      tickets: '300',
    },
    team2: {
      name: 'RUS 108th Guards Airborne Kuban Cossack Regiment',
      tickets: '300',
    },
  },
  {
    Name: 'Manic-5 Invasion v1',
    rawName: 'Manic_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Manic-5',
    lighting: 'Mid Day',
    team1: {
      name: 'CAF Royal 22e Régiment Mechanized Platoon',
      tickets: '200',
    },
    team2: {
      name: 'RUS 205th Rifle Division Reconaissance Platoon',
      tickets: '900',
    },
  },
  {
    Name: 'Manic-5 Invasion v2',
    rawName: 'Manic_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Manic-5',
    lighting: 'Mid Day',
    team1: {
      name: 'CAF Royal Westminster Regiment',
      tickets: '900',
    },
    team2: {
      name: 'US 1st Cavalry Regiment',
      tickets: '200',
    },
  },
  {
    Name: 'Manic-5 RAAS v1',
    rawName: 'Manic_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Manic-5',
    lighting: 'Mid Day',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '350',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '350',
    },
  },
  {
    Name: 'Manic-5 RAAS v2',
    rawName: 'Manic_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Manic-5',
    lighting: 'Mid Day',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '350',
    },
    team2: {
      name: "The Peoples' Front Militia Mechanized Platoon",
      tickets: '370',
    },
  },
  {
    Name: 'Manic-5 RAAS v3',
    rawName: 'Manic_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Manic-5',
    lighting: 'Mid Day',
    team1: {
      name: 'CAF LdSH Regiment Heavy Armor Troop',
      tickets: '350',
    },
    team2: {
      name: 'RUS 6th Separate Czestochowa Tank Brigade ',
      tickets: '350',
    },
  },
  {
    Name: 'Manic-5 RAAS v4',
    rawName: 'Manic_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Manic-5',
    lighting: 'Mid Day',
    team1: {
      name: 'CAF 3rd Battalion RCR Air Assault Platoon',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Motorized Rifle Platoon',
      tickets: '300',
    },
  },
  {
    Name: 'Manic-5 Skirmish v1',
    rawName: 'Manic_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Manic-5',
    lighting: 'Overcast',
    team1: {
      name: 'CAF Royal Newfoundland Regiment',
      tickets: '150',
    },
    team2: {
      name: "The Peoples' Front Militia",
      tickets: '150',
    },
  },
  {
    Name: 'Manic-5 Skirmish v2',
    rawName: 'Manic_Skirmish_v2',
    gamemode: 'Skirmish',
    mapName: 'Manic-5',
    lighting: 'Mid Day',
    team1: {
      name: 'CAF 3rd Battallion PPCLI',
      tickets: '150',
    },
    team2: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '150',
    },
  },
  {
    Name: 'Manic-5 TC v1',
    rawName: 'Manic_TC_v1',
    gamemode: 'TC',
    mapName: 'Manic-5',
    lighting: 'Sunset',
    team1: {
      name: 'CAF 3rd Battallion PPCLI Infantry Platoon',
      tickets: '450',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '450',
    },
  },
  {
    Name: 'Mestia AAS v1',
    rawName: 'Mestia_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Mestia',
    lighting: 'Mid Day',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '250',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '250',
    },
  },
  {
    Name: 'Mestia AAS v2',
    rawName: 'Mestia_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Mestia',
    lighting: 'Sunset',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '250',
    },
  },
  {
    Name: 'Mestia Invasion v1',
    rawName: 'Mestia_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Mestia',
    lighting: 'Mid Day',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '800',
    },
  },
  {
    Name: 'Mestia Invasion v2',
    rawName: 'Mestia_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Mestia',
    lighting: 'Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '800',
    },
  },
  {
    Name: 'Mestia RAAS v1',
    rawName: 'Mestia_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Mestia',
    lighting: 'Overcast',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '250',
    },
  },
  {
    Name: 'Mestia RAAS v2',
    rawName: 'Mestia_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Mestia',
    lighting: 'Sunny Afternoon',
    team1: {
      name: 'CAF 3rd Battallion PPCLI Infantry Platoon',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Rifle Division Reconaissance Platoon',
      tickets: '300',
    },
  },
  {
    Name: 'Mestia Skirmish v1',
    rawName: 'Mestia_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Mestia',
    lighting: 'Overcast',
    team1: {
      name: 'UK 1st Battalion, Grenadier Guards',
      tickets: '150',
    },
    team2: {
      name: 'MEA 4th Border Guards Group',
      tickets: '150',
    },
  },
  {
    Name: 'Mestia TC v1',
    rawName: 'Mestia_TC_v1',
    gamemode: 'TC',
    mapName: 'Mestia',
    lighting: 'Overcast',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '400',
    },
  },
  {
    Name: 'Mutaha AAS v1',
    rawName: 'Mutaha_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Mutaha',
    lighting: 'Sunrise',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Mutaha AAS v2',
    rawName: 'Mutaha_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Mutaha',
    lighting: 'Sunrise',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '300',
    },
  },
  {
    Name: 'Mutaha AAS v3',
    rawName: 'Mutaha_AAS_v3',
    gamemode: 'AAS',
    mapName: 'Mutaha',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 5th Battalion, Royal Australian Regiment',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '300',
    },
  },
  {
    Name: 'Mutaha AAS v4',
    rawName: 'Mutaha_AAS_v4',
    gamemode: 'AAS',
    mapName: 'Mutaha',
    lighting: 'Sunrise',
    team1: {
      name: 'CAF Royal 22e Régiment Mechanized Platoon',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '300',
    },
  },
  {
    Name: 'Mutaha Invasion v1',
    rawName: 'Mutaha_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Mutaha',
    lighting: 'Dusk',
    team1: {
      name: 'British Armed Forces',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '800',
    },
  },
  {
    Name: 'Mutaha Invasion v2',
    rawName: 'Mutaha_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Mutaha',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '800',
    },
  },
  {
    Name: 'Mutaha Invasion v3',
    rawName: 'Mutaha_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Mutaha',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 2nd/14th Light Horse Regiment',
      tickets: '200',
    },
    team2: {
      name: 'Insurgent Rebel Federation',
      tickets: '800',
    },
  },
  {
    Name: 'Mutaha Invasion v4',
    rawName: 'Mutaha_Invasion_v4',
    gamemode: 'Invasion',
    mapName: 'Mutaha',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF Royal 22e Régiment Mechanized Platoon',
      tickets: '200',
    },
    team2: {
      name: 'Insurgent Rebel Federation',
      tickets: '900',
    },
  },
  {
    Name: 'Mutaha RAAS v1',
    rawName: 'Mutaha_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Mutaha',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Mutaha RAAS v2',
    rawName: 'Mutaha_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Mutaha',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '300',
    },
  },
  {
    Name: 'Mutaha RAAS v3',
    rawName: 'Mutaha_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Mutaha',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'UK 1st Battalion, Grenadier Guards',
      tickets: '300',
    },
    team2: {
      name: 'MEA 3rd King Qadesh Mechanized Infantry Brigade',
      tickets: '300',
    },
  },
  {
    Name: 'Mutaha RAAS v4',
    rawName: 'Mutaha_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Mutaha',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF LdSH Regiment Heavy Armor Troop',
      tickets: '350',
    },
    team2: {
      name: 'RUS 6th Separate Czestochowa Tank Brigade ',
      tickets: '350',
    },
  },
  {
    Name: 'Mutaha RAAS v5',
    rawName: 'Mutaha_RAAS_v5',
    gamemode: 'RAAS',
    mapName: 'Mutaha',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '300',
    },
    team2: {
      name: 'MEA 1st Battalion, Legion of Babylon',
      tickets: '300',
    },
  },
  {
    Name: 'Mutaha RAAS v6',
    rawName: 'Mutaha_RAAS_v6',
    gamemode: 'RAAS',
    mapName: 'Mutaha',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC 3rd Battalion, 2nd Marines',
      tickets: '300',
    },
    team2: {
      name: 'MEA 1st Battalion, Legion of Babylon',
      tickets: '300',
    },
  },
  {
    Name: 'Mutaha Skirmish v1',
    rawName: 'Mutaha_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Mutaha',
    lighting: 'Sunrise',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '150',
    },
    team2: {
      name: 'MEA 4th Border Guards Group',
      tickets: '150',
    },
  },
  {
    Name: 'Mutaha TC v1',
    rawName: 'Mutaha_TC_v1',
    gamemode: 'TC',
    mapName: 'Mutaha',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Mutaha TC v2',
    rawName: 'Mutaha_TC_v2',
    gamemode: 'TC',
    mapName: 'Mutaha',
    lighting: 'Sunrise',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '400',
    },
  },
  {
    Name: 'Narva AAS v1',
    rawName: 'Narva_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Narva',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Narva AAS v2',
    rawName: 'Narva_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Narva',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Narva AAS v3',
    rawName: 'Narva_AAS_v3',
    gamemode: 'AAS',
    mapName: 'Narva',
    lighting: 'Foggy',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Narva AAS v4',
    rawName: 'Narva_AAS_v4',
    gamemode: 'AAS',
    mapName: 'Narva',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'USMC 3rd Battalion, 2nd Marines',
      tickets: '300',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '300',
    },
  },
  {
    Name: 'Narva_Destruction v1',
    rawName: 'Narva_Destruction_v1',
    gamemode: 'Destruction',
    mapName: 'Narva',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '1000',
    },
  },
  {
    Name: 'Narva Invasion v1',
    rawName: 'Narva_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Narva',
    lighting: 'Sunrise',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '800',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
  },
  {
    Name: 'Narva Invasion v2',
    rawName: 'Narva_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Narva',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '200',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '800',
    },
  },
  {
    Name: 'Narva Invasion v3',
    rawName: 'Narva_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Narva',
    lighting: 'Sunrise',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '800',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '200',
    },
  },
  {
    Name: 'Narva Invasion v4',
    rawName: 'Narva_Invasion_v4',
    gamemode: 'Invasion',
    mapName: 'Narva',
    lighting: 'Foggy',
    team1: {
      name: 'CAF LdSH Regiment Heavy Armor Troop',
      tickets: '200',
    },
    team2: {
      name: 'Militia Armored Platoon',
      tickets: '900',
    },
  },
  {
    Name: 'Narva RAAS v1',
    rawName: 'Narva_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Narva',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Narva RAAS v2',
    rawName: 'Narva_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Narva',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'USMC 3rd Light Armored Recon Battalion',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Motorized Rifle Platoon',
      tickets: '300',
    },
  },
  {
    Name: 'Narva RAAS v3',
    rawName: 'Narva_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Narva',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'CAF 3rd Battallion PPCLI Infantry Platoon',
      tickets: '300',
    },
    team2: {
      name: "The Peoples' Front Militia Mechanized Platoon",
      tickets: '320',
    },
  },
  {
    Name: 'Narva RAAS v4',
    rawName: 'Narva_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Narva',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '300',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '300',
    },
  },
  {
    Name: 'Narva Skirmish v1',
    rawName: 'Narva_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Narva',
    lighting: 'Overcast',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '150',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '150',
    },
  },
  {
    Name: 'Narva TA v1',
    rawName: 'Narva_TA_v1',
    gamemode: 'TA',
    mapName: 'Narva',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'Russian Battalion Tactical Group',
      tickets: '24',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '24',
    },
  },
  {
    Name: 'Narva TC v1',
    rawName: 'Narva_TC_v1',
    gamemode: 'TC',
    mapName: 'Narva',
    lighting: 'Foggy',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '400',
    },
  },
  {
    Name: 'Narva TC v2',
    rawName: 'Narva_TC_v2',
    gamemode: 'TC',
    mapName: 'Narva',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '400',
    },
  },
  {
    Name: 'Pacific Proving Grounds v2',
    rawName: 'PacificProvingGrounds_USMC-MEA',
    gamemode: 'Grounds',
    mapName: 'Pacific Proving',
    lighting: 'Storm',
    team1: {
      name: 'USMC 31st Marine Expeditionary Unit',
      tickets: '99999',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '99999',
    },
  },
  {
    Name: 'Pacific Proving Grounds v1',
    rawName: 'PacificProvingGrounds_USMC-RUS',
    gamemode: 'Grounds',
    mapName: 'Pacific Proving',
    lighting: 'Sunrise',
    team1: {
      name: 'USMC 31st Marine Expeditionary Unit',
      tickets: '99999',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '99999',
    },
  },
  {
    Name: 'Skorpo AAS v1',
    rawName: 'Skorpo_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Skorpo',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Skorpo Invasion v1',
    rawName: 'Skorpo_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Skorpo',
    lighting: 'Sunset',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '900',
    },
  },
  {
    Name: 'Skorpo Invasion v2',
    rawName: 'Skorpo_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Skorpo',
    lighting: 'Sunset',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '800',
    },
  },
  {
    Name: 'Skorpo RAAS_v1',
    rawName: 'Skorpo_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Skorpo',
    lighting: 'Foggy',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '350',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '350',
    },
  },
  {
    Name: 'Skorpo RAAS v2',
    rawName: 'Skorpo_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Skorpo',
    lighting: 'Stormy',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '350',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '350',
    },
  },
  {
    Name: 'Skorpo RAAS v3',
    rawName: 'Skorpo_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Skorpo',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '350',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '350',
    },
  },
  {
    Name: 'Skorpo RAAS v4',
    rawName: 'Skorpo_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Skorpo',
    lighting: 'Stormy',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '350',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '350',
    },
  },
  {
    Name: 'Skorpo RAAS v5',
    rawName: 'Skorpo_RAAS_v5',
    gamemode: 'RAAS',
    mapName: 'Skorpo',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 3rd Battalion RCR Air Assault Platoon',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Rifle Division Mechanized Platoon',
      tickets: '320',
    },
  },
  {
    Name: 'Skorpo Skirmish v1',
    rawName: 'Skorpo_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Skorpo',
    lighting: 'Foggy',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '150',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '150',
    },
  },
  {
    Name: 'Skorpo TC v1',
    rawName: 'Skorpo_TC_v1',
    gamemode: 'TC',
    mapName: 'Skorpo',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '400',
    },
  },
  {
    Name: 'Skorpo TC v2',
    rawName: 'Skorpo_TC_v2',
    gamemode: 'TC',
    mapName: 'Skorpo',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '400',
    },
  },
  {
    Name: 'Skorpo TC v3',
    rawName: 'Skorpo_TC_v3',
    gamemode: 'TC',
    mapName: 'Skorpo',
    lighting: 'Sunset',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '500',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '500',
    },
  },
  {
    Name: 'Sumari Bala AAS v1',
    rawName: 'Sumari_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Sumari Bala',
    lighting: 'Sunrise',
    team1: {
      name: 'British Armed Forces',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Sumari Bala AAS v2',
    rawName: 'Sumari_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Sumari Bala',
    lighting: 'Sunrise',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '250',
    },
  },
  {
    Name: 'Sumari Bala AAS v3',
    rawName: 'Sumari_AAS_v3',
    gamemode: 'AAS',
    mapName: 'Sumari Bala',
    lighting: 'Sunrise',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '250',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '250',
    },
  },
  {
    Name: 'Sumari Bala AAS v4',
    rawName: 'Sumari_AAS_v4',
    gamemode: 'AAS',
    mapName: 'Sumari Bala',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'CAF 3rd Battallion PPCLI Infantry Platoon',
      tickets: '250',
    },
    team2: {
      name: 'MEA 83rd Prince Zaid Motorized Infantry Brigade',
      tickets: '250',
    },
  },
  {
    Name: 'Sumari Bala AAS v5',
    rawName: 'Sumari_AAS_v5',
    gamemode: 'AAS',
    mapName: 'Sumari Bala',
    lighting: 'Sunrise',
    team1: {
      name: 'USMC 1st Battalion, 5th Marines',
      tickets: '250',
    },
    team2: {
      name: 'MEA Vizir Hussein 2nd Support Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Sumari Bala Insurgency v1',
    rawName: 'Sumari_Insurgency_v1',
    gamemode: 'Insurgency',
    mapName: 'Sumari Bala',
    lighting: 'Sunrise',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '1000',
    },
  },
  {
    Name: 'Sumari Bala Invasion v1',
    rawName: 'Sumari_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Sumari Bala',
    lighting: 'Sunrise',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '900',
    },
  },
  {
    Name: 'Sumari Bala RAAS v1',
    rawName: 'Sumari_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Sumari Bala',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Sumari Bala RAAS v2',
    rawName: 'Sumari_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Sumari Bala',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '250',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '250',
    },
  },
  {
    Name: 'Sumari Bala Seed v1',
    rawName: 'Sumari_Seed_v1',
    gamemode: 'Seed',
    mapName: 'Sumari Bala',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '300',
    },
  },
  {
    Name: 'Sumari Bala Seed v2',
    rawName: 'Sumari_Seed_v2',
    gamemode: 'Seed',
    mapName: 'Sumari Bala',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'ADF 1st Battalion, Royal Australian Regiment',
      tickets: '300',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '300',
    },
  },
  {
    Name: 'Sumari Bala Skirmish v1',
    rawName: 'Sumari_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Sumari Bala',
    lighting: 'Overcast',
    team1: {
      name: "The Peoples' Front Militia",
      tickets: '150',
    },
    team2: {
      name: 'Insurgent Homeland Freedom Fighters',
      tickets: '150',
    },
  },
  {
    Name: 'Sumari Bala TC v1',
    rawName: 'Sumari_TC_v1',
    gamemode: 'TC',
    mapName: 'Sumari Bala',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '400',
    },
  },
  {
    Name: 'Tallil Outskirts AAS_v1',
    rawName: 'Tallil_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '350',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '350',
    },
  },
  {
    Name: 'Tallil Outskirts AAS v2',
    rawName: 'Tallil_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '350',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '350',
    },
  },
  {
    Name: 'Tallil Outskirts Invasion v1',
    rawName: 'Tallil_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Tallil Outskirts',
    lighting: 'Morning Sunrise',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '800',
    },
  },
  {
    Name: 'Tallil Outskirts Invasion v2',
    rawName: 'Tallil_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Tallil Outskirts',
    lighting: 'Morning Sunrise',
    team1: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '700',
    },
  },
  {
    Name: 'Tallil Outskirts Invasion v3',
    rawName: 'Tallil_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Tallil Outskirts',
    lighting: 'Morning Sunrise',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '800',
    },
  },
  {
    Name: 'Tallil Outskirts Invasion v4',
    rawName: 'Tallil_Invasion_v4',
    gamemode: 'Invasion',
    mapName: 'Tallil Outskirts',
    lighting: 'Morning Sunrise',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '200',
    },
    team2: {
      name: 'Insurgent National Liberation Front',
      tickets: '800',
    },
  },
  {
    Name: 'Tallil Outskirts RAAS v1',
    rawName: 'Tallil_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC 1st Battalion, 5th Marines',
      tickets: '350',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '350',
    },
  },
  {
    Name: 'Tallil Outskirts RAAS v2',
    rawName: 'Tallil_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Tallil Outskirts',
    lighting: 'Morning Sunrise',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Tallil Outskirts RAAS v3',
    rawName: 'Tallil_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Tallil Outskirts RAAS v4',
    rawName: 'Tallil_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '350',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '350',
    },
  },
  {
    Name: 'Tallil Outskirts RAAS v5',
    rawName: 'Tallil_RAAS_v5',
    gamemode: 'RAAS',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '350',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '350',
    },
  },
  {
    Name: 'Tallil Outskirts RAAS v6',
    rawName: 'Tallil_RAAS_v6',
    gamemode: 'RAAS',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '350',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '350',
    },
  },
  {
    Name: 'Tallil Outskirts RAAS v7',
    rawName: 'Tallil_RAAS_v7',
    gamemode: 'RAAS',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF LdSH Regiment Heavy Armor Troop',
      tickets: '350',
    },
    team2: {
      name: 'MEA 60th Prince Assur Armored Brigade',
      tickets: '350',
    },
  },
  {
    Name: 'Tallil Outskirts Seed v1',
    rawName: 'Tallil_Seed_v1',
    gamemode: 'Seed',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC 1st Battalion, 5th Marines',
      tickets: '300',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '300',
    },
  },
  {
    Name: 'Tallil Outskirts Seed v2',
    rawName: 'Tallil_Seed_v2',
    gamemode: 'Seed',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF Royal Westminster Regiment',
      tickets: '300',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '300',
    },
  },
  {
    Name: 'Tallil Outskirts Skirmish v1',
    rawName: 'Tallil_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '150',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '150',
    },
  },
  {
    Name: 'Tallil Outskirts Skirmish v2',
    rawName: 'Tallil_Skirmish_v2',
    gamemode: 'Skirmish',
    mapName: 'Tallil Outskirts',
    lighting: 'Morning Sunrise',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '150',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '150',
    },
  },
  {
    Name: 'Tallil Outskirts Skirmish v3',
    rawName: 'Tallil_Skirmish_v3',
    gamemode: 'Skirmish',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'Local Militia Group',
      tickets: '200',
    },
    team2: {
      name: 'Local Insurgent Cell',
      tickets: '200',
    },
  },
  {
    Name: 'Tallil Outskirts Tanks v1',
    rawName: 'Tallil_Tanks_v1',
    gamemode: 'Tanks',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'MEA Combined Arms Battalion',
      tickets: '300',
    },
  },
  {
    Name: 'Tallil Outskirts Tanks v2',
    rawName: 'Tallil_Tanks_v2',
    gamemode: 'Tanks',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '300',
    },
  },
  {
    Name: 'Tallil Outskirts TA v1',
    rawName: 'Tallil_TA_v1',
    gamemode: 'TA',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '34',
    },
    team2: {
      name: 'US Brigade Combat Team',
      tickets: '34',
    },
  },
  {
    Name: 'Tallil Outskirts TC v1',
    rawName: 'Tallil_TC_v1',
    gamemode: 'TC',
    mapName: 'Tallil Outskirts',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '500',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '500',
    },
  },
  {
    Name: 'Helicopter Tutorial',
    rawName: 'Tutorial_Helicopter',
    gamemode: 'Tutorial',
    mapName: 'Helicopter',
    team1: {
      name: 'US Brigade Combat Team Training',
      tickets: '99999',
    },
    team2: {
      name: 'US Brigade Combat Team Training',
      tickets: '99999',
    },
  },
  {
    Name: 'Infantry Tutorial',
    rawName: 'Tutorial_Infantry',
    gamemode: 'Tutorial',
    mapName: 'Infantry',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'US Brigade Combat Team Training',
      tickets: '99999',
    },
    team2: {
      name: 'US Brigade Combat Team Training',
      tickets: '99999',
    },
  },
  {
    Name: 'Yehorivka AAS v1',
    rawName: 'Yehorivka_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'British Armed Forces',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Yehorivka AAS v2',
    rawName: 'Yehorivka_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '350',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '350',
    },
  },
  {
    Name: 'Yehorivka AAS v3',
    rawName: 'Yehorivka_AAS_v3',
    gamemode: 'AAS',
    mapName: 'Yehorivka',
    lighting: 'Overcast',
    team1: {
      name: 'ADF 5th Battalion, Royal Australian Regiment',
      tickets: '350',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '350',
    },
  },
  {
    Name: 'Yehorivka AAS v4',
    rawName: 'Yehorivka_AAS_v4',
    gamemode: 'AAS',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'USMC 1st Battalion, 5th Marines',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Motorized Rifle Platoon',
      tickets: '300',
    },
  },
  {
    Name: 'Yehorivka Destruction v1',
    rawName: 'Yehorivka_Destruction_v1',
    gamemode: 'Destruction',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '200',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '1000',
    },
  },
  {
    Name: 'Yehorivka Invasion v1',
    rawName: 'Yehorivka_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Yehorivka',
    lighting: 'Sunrise',
    team1: {
      name: 'British Armed Forces',
      tickets: '200',
    },
    team2: {
      name: 'Local Militia Group',
      tickets: '900',
    },
  },
  {
    Name: 'Yehorivka Invasion v2',
    rawName: 'Yehorivka_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '800',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '200',
    },
  },
  {
    Name: 'Yehorivka Invasion v3',
    rawName: 'Yehorivka_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Yehorivka',
    lighting: 'Overcast',
    team1: {
      name: 'CAF Royal 22e Régiment Mechanized Platoon',
      tickets: '200',
    },
    team2: {
      name: "The Peoples' Front Militia",
      tickets: '900',
    },
  },
  {
    Name: 'Yehorivka RAAS v1',
    rawName: 'Yehorivka_RAAS_v01',
    gamemode: 'RAAS',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'USMC 1st Battalion, 5th Marines',
      tickets: '350',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '350',
    },
  },
  {
    Name: 'Yehorivka RAAS v2',
    rawName: 'Yehorivka_RAAS_v02',
    gamemode: 'RAAS',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Yehorivka RAAS v3',
    rawName: 'Yehorivka_RAAS_v03',
    gamemode: 'RAAS',
    mapName: 'Yehorivka',
    lighting: 'Sunrise',
    team1: {
      name: 'British Armed Forces',
      tickets: '350',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '350',
    },
  },
  {
    Name: 'Yehorivka RAAS v4',
    rawName: 'Yehorivka_RAAS_v04',
    gamemode: 'RAAS',
    mapName: 'Yehorivka',
    lighting: 'Overcast',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '300',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '300',
    },
  },
  {
    Name: 'Yehorivka RAAS v5',
    rawName: 'Yehorivka_RAAS_v05',
    gamemode: 'RAAS',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '350',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '350',
    },
  },
  {
    Name: 'Yehorivka RAAS v6',
    rawName: 'Yehorivka_RAAS_v06',
    gamemode: 'RAAS',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '350',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '350',
    },
  },
  {
    Name: 'Yehorivka RAAS v7',
    rawName: 'Yehorivka_RAAS_v07',
    gamemode: 'RAAS',
    mapName: 'Yehorivka',
    lighting: 'Sunrise',
    team1: {
      name: 'British Armed Forces',
      tickets: '350',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '350',
    },
  },
  {
    Name: 'Yehorivka RAAS v8',
    rawName: 'Yehorivka_RAAS_v08',
    gamemode: 'RAAS',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'ADF 3rd Brigade',
      tickets: '350',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '350',
    },
  },
  {
    Name: 'Yehorivka RAAS v9',
    rawName: 'Yehorivka_RAAS_v09',
    gamemode: 'RAAS',
    mapName: 'Yehorivka',
    lighting: 'Overcast',
    team1: {
      name: 'CAF 3rd Battallion PPCLI Infantry Platoon',
      tickets: '350',
    },
    team2: {
      name: "The Peoples' Front Militia Mechanized Platoon",
      tickets: '390',
    },
  },
  {
    Name: 'Yehorivka RAAS v10',
    rawName: 'Yehorivka_RAAS_v10',
    gamemode: 'RAAS',
    mapName: 'Yehorivka',
    lighting: 'Overcast',
    team1: {
      name: 'CAF Royal 22e Régiment Mechanized Platoon',
      tickets: '350',
    },
    team2: {
      name: 'RUS 108th Guards Airborne Kuban Cossack Regiment',
      tickets: '350',
    },
  },
  {
    Name: 'Yehorivka RAAS v11',
    rawName: 'Yehorivka_RAAS_v11',
    gamemode: 'RAAS',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '350',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '350',
    },
  },
  {
    Name: 'Yehorivka RAAS v12',
    rawName: 'Yehorivka_RAAS_v12',
    gamemode: 'RAAS',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'CAF LdSH Regiment Heavy Armor Troop',
      tickets: '350',
    },
    team2: {
      name: 'RUS 6th Separate Czestochowa Tank Brigade ',
      tickets: '350',
    },
  },
  {
    Name: 'Yehorivka Skirmish v1',
    rawName: 'Yehorivka_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Yehorivka',
    lighting: 'Overcast',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '150',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '150',
    },
  },
  {
    Name: 'Yehorivka Skirmish v2',
    rawName: 'Yehorivka_Skirmish_v2',
    gamemode: 'Skirmish',
    mapName: 'Yehorivka',
    lighting: 'Overcast',
    team1: {
      name: 'UK 1st Battalion, Grenadier Guards',
      tickets: '150',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '150',
    },
  },
  {
    Name: 'Yehorivka Skirmish v3',
    rawName: 'Yehorivka_Skirmish_v3',
    gamemode: 'Skirmish',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US 149th Brigade, Kentucky Army National Guard',
      tickets: '150',
    },
    team2: {
      name: 'RU 205th Detached Mechanized Cossacks Brigade',
      tickets: '150',
    },
  },
  {
    Name: 'Yehorivka TA v1',
    rawName: 'Yehorivka_TA_v1',
    gamemode: 'TA',
    mapName: 'Yehorivka',
    lighting: 'Sunrise',
    team1: {
      name: 'Russian Battalion Tactical Group',
      tickets: '34',
    },
    team2: {
      name: 'Russian Battalion Tactical Group',
      tickets: '34',
    },
  },
  {
    Name: 'Yehorivka TC v1',
    rawName: 'Yehorivka_TC_v1',
    gamemode: 'TC',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '450',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '450',
    },
  },
  {
    Name: 'Yehorivka TC v2',
    rawName: 'Yehorivka_TC_v2',
    gamemode: 'TC',
    mapName: 'Yehorivka',
    lighting: 'Partial Clouds Mid Day',
    team1: {
      name: 'US Brigade Combat Team',
      tickets: '400',
    },
    team2: {
      name: 'Russian battalion tactical group',
      tickets: '400',
    },
  },
  {
    Name: 'Yehorivka TC v3',
    rawName: 'Yehorivka_TC_v3',
    gamemode: 'TC',
    mapName: 'Yehorivka',
    lighting: 'Overcast',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '450',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '450',
    },
  },
  {
    Name: 'Black Coast AAS v1',
    rawName: 'BlackCoast_AAS_v1',
    gamemode: 'AAS',
    mapName: 'Black Coast',
    lighting: 'Overcast',
    team1: {
      name: 'USMC 4th Assault Amphibian Battalion',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '300',
    },
  },
  {
    Name: 'Black Coast AAS v2',
    rawName: 'BlackCoast_AAS_v2',
    gamemode: 'AAS',
    mapName: 'Black Coast',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'UK 1st Battalion Yorkshire Regiment',
      tickets: '300',
    },
    team2: {
      name: 'United Liberation Force Militia',
      tickets: '300',
    },
  },
  {
    Name: 'Black Coast Invasion v1',
    rawName: 'BlackCoast_Invasion_v1',
    gamemode: 'Invasion',
    mapName: 'Black Coast',
    lighting: 'Foggy',
    team1: {
      name: 'USMC 4th Assault Amphibian Battalion',
      tickets: '200',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '800',
    },
  },
  {
    Name: 'Black Coast Invasion v2',
    rawName: 'BlackCoast_Invasion_v2',
    gamemode: 'Invasion',
    mapName: 'Black Coast',
    lighting: 'Overcast',
    team1: {
      name: 'USMC 4th Assault Amphibian Battalion',
      tickets: '200',
    },
    team2: {
      name: 'United Liberation Force Militia',
      tickets: '900',
    },
  },
  {
    Name: 'Black Coast Invasion v3',
    rawName: 'BlackCoast_Invasion_v3',
    gamemode: 'Invasion',
    mapName: 'Black Coast',
    lighting: 'Overcast',
    team1: {
      name: 'CAF 3rd Battalion RCR Air Assault Platoon',
      tickets: '200',
    },
    team2: {
      name: "The Peoples' Front Militia",
      tickets: '800',
    },
  },
  {
    Name: 'Black Coast RAAS v1',
    rawName: 'BlackCoast_RAAS_v1',
    gamemode: 'RAAS',
    mapName: 'Black Coast',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC 4th Assault Amphibian Battalion',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Detached Mechanized Cossacks Brigade',
      tickets: '300',
    },
  },
  {
    Name: 'Black Coast RAAS v2',
    rawName: 'BlackCoast_RAAS_v2',
    gamemode: 'RAAS',
    mapName: 'Black Coast',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC 31st Marine Expeditionary Unit',
      tickets: '300',
    },
    team2: {
      name: "The Peoples' Front Militia Mechanized Platoon",
      tickets: '340',
    },
  },
  {
    Name: 'Black Coast RAAS v3',
    rawName: 'BlackCoast_RAAS_v3',
    gamemode: 'RAAS',
    mapName: 'Black Coast',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'UK 3rd Battalion, The Rifles',
      tickets: '300',
    },
    team2: {
      name: 'RUS 205th Motorized Rifle Platoon',
      tickets: '300',
    },
  },
  {
    Name: 'Black Coast RAAS v4',
    rawName: 'BlackCoast_RAAS_v4',
    gamemode: 'RAAS',
    mapName: 'Black Coast',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'CAF 1 Canadian Mechanized Brigade Group',
      tickets: '300',
    },
    team2: {
      name: 'RUS 49th Combined Arms Army',
      tickets: '300',
    },
  },
  {
    Name: 'Black Coast Seed v1',
    rawName: 'BlackCoast_Seed_v1',
    gamemode: 'Seed',
    mapName: 'Black Coast',
    lighting: 'Overcast',
    team1: {
      name: 'USMC 31st Marine Expeditionary Unit',
      tickets: '100',
    },
    team2: {
      name: 'RUS 205th Motorized Rifle Platoon',
      tickets: '100',
    },
  },
  {
    Name: 'Black Coast Skirmish v1',
    rawName: 'BlackCoast_Skirmish_v1',
    gamemode: 'Skirmish',
    mapName: 'Black Coast',
    lighting: 'Sunny Mid Day',
    team1: {
      name: 'USMC 31st Marine Expeditionary Unit',
      tickets: '150',
    },
    team2: {
      name: 'RUS 205th Motorized Rifle Platoon',
      tickets: '150',
    },
  },
]
