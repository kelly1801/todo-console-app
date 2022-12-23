import fs from "fs";
const file = "./db/data.json";

export const saveDB = (data) => {
  fs.writeFileSync(file, JSON.stringify(data));
};

export const readDb = () => {
  !fs.existsSync(file) && null;

  const info = fs.readFileSync(file, { encoding: "utf-8" });
  const data = JSON.parse(info);

  return data;
};
