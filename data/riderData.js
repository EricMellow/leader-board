const riders = [
  { id: 1, name: 'Chloe KIM', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/usa.png?interpolation=lanczos-none&resize=45:45', country: 'USA' },
  { id: 2, name: 'Jiayu LIU', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/chn.png?interpolation=lanczos-none&resize=45:45', country: 'CHN' },
  { id: 3, name: 'Arielle GOLD', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/usa.png?interpolation=lanczos-none&resize=45:45', country: 'USA' },
  { id: 4, name: 'Kelly CLARK', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/usa.png?interpolation=lanczos-none&resize=45:45', country: 'USA' },
  { id: 5, name: 'Xuetong CAI', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/chn.png?interpolation=lanczos-none&resize=45:45', country: 'CHN' },
  { id: 6, name: 'Haruna MATSUMOTO', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/jpn.png?interpolation=lanczos-none&resize=45:45', country: 'JPN' },
  { id: 7, name: 'Queralt CASTELLET', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/esp.png?interpolation=lanczos-none&resize=45:45', country: 'ESP' },
  { id: 8, name: 'Sena TOMITA', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/jpn.png?interpolation=lanczos-none&resize=45:45', country: 'JPN' },
  { id: 9, name: 'Mirabelle THOVEX', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/fra.png?interpolation=lanczos-none&resize=45:45', country: 'FRA' },
  { id: 10, name: 'Sophie RODRIGUEZ', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/fra.png?interpolation=lanczos-none&resize=45:45', country: 'FRA' },
  { id: 11, name: 'Emily ARTHUR', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/aus.png?interpolation=lanczos-none&resize=45:45', country: 'AUS' },
  { id: 12, name: 'Maddie MASTRO', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/usa.png?interpolation=lanczos-none&resize=45:45', country: 'USA' },
  { id: 13, name: 'Holly CRAWFORD', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/aus.png?interpolation=lanczos-none&resize=45:45', country: 'AUS' },
  { id: 14, name: 'Verena ROHRER', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/sui.png?interpolation=lanczos-none&resize=45:45', country: 'SUI' },
  { id: 15, name: 'Kurumi IMAI', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/jpn.png?interpolation=lanczos-none&resize=45:45', country: 'JPN' },
  { id: 16, name: 'Leng QIU', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/chn.png?interpolation=lanczos-none&resize=45:45', country: 'CHN' },
  { id: 17, name: 'Hikaru OE', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/jpn.png?interpolation=lanczos-none&resize=45:45', country: 'JPN' },
  { id: 18, name: 'Mercedes NICOLL', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/can.png?interpolation=lanczos-none&resize=45:45', country: 'CAN' },
  { id: 19, name: 'Elizabeth HOSKING', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/can.png?interpolation=lanczos-none&resize=45:45', country: 'CAN' },
  { id: 20, name: 'Sunoo KWON', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/kor.png?interpolation=lanczos-none&resize=45:45', country: 'KOR' },
  { id: 21, name: 'Kaja VERDNIK', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/slo.png?interpolation=lanczos-none&resize=45:45', country: 'SLO' },
  { id: 22, name: 'Shuang LI', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/chn.png?interpolation=lanczos-none&resize=45:45', country: 'CHN' },
  { id: 23, name: 'Calynn IRWIN', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/can.png?interpolation=lanczos-none&resize=45:45', country: 'CAN' },
  { id: 24, name: 'Clemence GRIMAL', gender: 'womens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/fra.png?interpolation=lanczos-none&resize=45:45', country: 'FRA' },
  { id: 25, name: 'Shaun WHITE', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/usa.png?interpolation=lanczos-none&resize=45:45', country: 'USA' },
  { id: 26, name: 'Ayumu HIRANO', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/jpn.png?interpolation=lanczos-none&resize=45:45', country: 'JPN' },
  { id: 27, name: 'Scott JAMES', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/aus.png?interpolation=lanczos-none&resize=45:45', country: 'AUS' },
  { id: 28, name: 'Ben FERGUSON', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/usa.png?interpolation=lanczos-none&resize=45:45', country: 'USA' },
  { id: 29, name: 'Patrick BURGENER', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/sui.png?interpolation=lanczos-none&resize=45:45', country: 'SUI' },
  { id: 30, name: 'Chase JOSEY', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/usa.png?interpolation=lanczos-none&resize=45:45', country: 'USA' },
  { id: 31, name: 'Raibu KATAYAMA', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/jpn.png?interpolation=lanczos-none&resize=45:45', country: 'JPN' },
  { id: 32, name: 'Jake PATES', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/usa.png?interpolation=lanczos-none&resize=45:45', country: 'USA' },
  { id: 33, name: 'Jan SCHERRER', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/sui.png?interpolation=lanczos-none&resize=45:45', country: 'SUI' },
  { id: 34, name: 'Kent CALLISTER', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/aus.png?interpolation=lanczos-none&resize=45:45', country: 'AUS' },
  { id: 35, name: 'Yuto TOTSUKA', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/jpn.png?interpolation=lanczos-none&resize=45:45', country: 'JPN' },
  { id: 36, name: 'Peetu PIIROINEN', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/fin.png?interpolation=lanczos-none&resize=45:45', country: 'FIN' },
  { id: 37, name: 'Taku HIRAOKA', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/jpn.png?interpolation=lanczos-none&resize=45:45', country: 'JPN' },
  { id: 38, name: 'Kwang Ki LEE', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/kor.png?interpolation=lanczos-none&resize=45:45', country: 'KOR' },
  { id: 39, name: 'Yiwei ZHANG', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/chn.png?interpolation=lanczos-none&resize=45:45', country: 'CHN' },
  { id: 40, name: 'Tim-Kevin RAVNJAK', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/slo.png?interpolation=lanczos-none&resize=45:45', country: 'SLO' },
  { id: 41, name: 'Derek LIVINGSTON', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/can.png?interpolation=lanczos-none&resize=45:45', country: 'CAN' },
  { id: 42, name: 'Seamus O CONNOR', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/irl.png?interpolation=lanczos-none&resize=45:45', country: 'IRL' },
  { id: 43, name: 'Markus MALIN', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/fin.png?interpolation=lanczos-none&resize=45:45', country: 'FIN' },
  { id: 44, name: 'Nikita AVTANEEV', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/oar.png?interpolation=lanczos-none&resize=45:45', country: 'OAR' },
  { id: 45, name: 'Leejun KWEON', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/kor.png?interpolation=lanczos-none&resize=45:45', country: 'KOR' },
  { id: 46, name: 'Nathan JOHNSTONE', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/aus.png?interpolation=lanczos-none&resize=45:45', country: 'AUS' },
  { id: 47, name: 'Johannes HOEPFL', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/ger.png?interpolation=lanczos-none&resize=45:45', country: 'GER' },
  { id: 48, name: 'Ho Jun KIM', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/kor.png?interpolation=lanczos-none&resize=45:45', country: 'KOR' },
  { id: 49, name: 'Tit STANTE', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/slo.png?interpolation=lanczos-none&resize=45:45', country: 'SLO' },
  { id: 50, name: 'Rakai TAIT', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/nzl.png?interpolation=lanczos-none&resize=45:45', country: 'NZL' },
  { id: 51, name: 'Elias ALLENSPACH', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/sui.png?interpolation=lanczos-none&resize=45:45', country: 'SUI' },
  { id: 52, name: 'Janne KORPI', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/fin.png?interpolation=lanczos-none&resize=45:45', country: 'FIN' },
  { id: 53, name: 'Wancheng SHI', gender: 'mens', img: 'https://stillimg.olympic.org/flags/1x1/340x340/chn.png?interpolation=lanczos-none&resize=45:45', country: 'CHN' },
];

module.exports = riders;