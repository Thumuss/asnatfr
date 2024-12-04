import { readdir } from "fs/promises";
const set = new Set();

// function checkNil(json: any): any {
//   if (json instanceof Array) {
//     return json.map((a) => checkNil(a));
//   }
//   if (!json || json["@xsi:nil"] === "true") return "nil";
//   return json;
// }

const types = "infosQualite";
const typeAchanger = "MandatSimple_Type"
const chktyp = (ty: {"@xsi:type": string}) => ty["@xsi:type"] == typeAchanger 

const addKey = (ty: Object) => {
  for(const a of Object.keys(ty)) set.add(a);
}
const addObject = (ty: any) => set.add(ty[types].libQualite);
const isNull = (ty: any) => set.add(ty[types] == null)
const isNil = (ty: any) => set.add(ty["@xsi:nil"] == "true")

for (const filestr of await readdir("./data/16/acteur")) {
  const file = await Bun.file(`./data/16/acteur/${filestr}`).json();
  const adr = file.acteur.mandats.mandat;
  if (!adr) continue;
  if (!(adr instanceof Array)) {
    if (!chktyp(adr)) continue
    addObject(adr)
    continue;
  }
  for (const adresse of adr || []) {
    if (!chktyp(adresse)) continue
    addObject(adresse)
  }
}

for (const a of set.values()) {
  console.log(a);
}
