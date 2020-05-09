const biodata = (nama="Ismail",umur = 20) => {
  const bio = [{
    name : nama,
    age : umur,
    address : "JL.Musholla Annur no 86 Kedaung Pamulang",
    hobbies : ["Menonton Film","Mendengarkan Podcast","Bermain Game","Ngoding"],
    is_married : false,
    list_school : [
      {
        name : "SMA Negeri 11 Kota Tangerang Selatan",
        year_in : 2014,
        year_out : 2017,
        major : "IPS"
      },
      {
        name : "Universitas Pamulang",
        year_in : 2017,
        year_out : 2021,
        major : "Teknik Informatika"
      }
    ],
    skills : [
      {
        skill_name : "Javascript",
        level : "advanced"
      },
      {
        skill_name : "PHP",
        level : "advanced"
      },
      {
        skill_name : "Java",
        level : "advanced"
      },
      {
        skill_name : "Python",
        level : "beginner"
      },
    ],
    interest_in_coding : true
  }];

  return JSON.stringify(bio)
}

console.log(biodata("Ismail",20));
