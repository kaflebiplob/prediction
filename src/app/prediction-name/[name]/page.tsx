interface params {
  params: {
    name: string;
  };
}

const getPredictedAge = async (name: string) => {
  const response = await fetch(`https://api.agify.io/?name=${name}`);
  return response.json();
};
const getPredictedGender = async (name: string) => {
  const response = await fetch(`https://api.genderize.io/?name=${name}`);

  return response.json();
};
const getPredictedNationality = async (name: string) => {
  const response = await fetch(`https://api.nationalize.io/?name=${name}`);

  return response.json();
};
export default async function PageName({ params }: any) {
  const getage = getPredictedAge(params.name);
  const getgender = getPredictedGender(params.name);
  const getnational = getPredictedNationality(params.name);

  const [age, gender, nationality] = await Promise.all([
    getage,
    getgender,
    getnational,
  ]);
  return (
    <div className="flex flex-col items-center justify-center m-12 border-2 border-black bg-black text-white p-10">
      <div className="m-4 ">

      <div>{params.name}</div>
      <div>Age:{age?.age}</div>
      <div>{params.age}</div>
      <div>Gender:{gender?.gender}</div>
      <div>Country:{nationality?.country?.[0]?.country_id}</div>
      </div>
    </div>
  );
}
