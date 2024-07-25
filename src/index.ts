import { readdir } from "fs/promises";
const set = new Set();

function checkNil(json: any): any {
  if (json instanceof Array) {
    return json.map((a) => checkNil(a));
  }
  if (!json || json["@xsi:nil"] === "true") return "nil";
  return json;
}

for (const filestr of await readdir("./data/16/acteur")) {
  const file = await Bun.file(`./data/16/acteur/${filestr}`).json();
  const value = file.acteur.adresses?.adresse;
  if (!value) continue;
  const withoutNil = value?.filter?.(
    (a: any) => a["@xsi:type"] === "AdresseTelephonique_Type"
  );
  if (withoutNil === "nil" || !withoutNil) continue;
  //console.log(withoutNil)
  if (withoutNil instanceof Array)
    for (const tel of withoutNil) {
      set.add(
        `${file.acteur.etatCivil.ident.civ} ${file.acteur.etatCivil.ident.prenom} ${file.acteur.etatCivil.ident.nom}: \`${tel.valElec}\``
      );
    }
  //else set.add(value);
}

for (const a of set.values()) {
  console.log(a);
}
