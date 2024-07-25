
mkdir -p ./data/{16,17}/{scrutins,acteur,deport,mandat,amendements,organe,pays,questionsG,questionsSD,questionsE,reunions,compteRendu} ./tmp


# 16e

# Scrutins
curl -L http://data.assemblee-nationale.fr/static/openData/repository/16/loi/scrutins/Scrutins.json.zip -o ./tmp/Scrutins16.zip
unzip -o ./tmp/Scrutins16.zip -d ./tmp/
mv ./tmp/json/* ./data/16/scrutins
rm -rf ./tmp/*

# 
curl -L http://data.assemblee-nationale.fr/static/openData/repository/16/amo/acteurs_mandats_organes_divises/AMO50_acteurs_mandats_organes_divises.json.zip -o ./tmp/ADMOP.zip
unzip -o ./tmp/ADMOP.zip -d ./tmp/
mv ./tmp/acteur/* ./data/16/acteur
mv ./tmp/deport/* ./data/16/deport
mv ./tmp/mandat/* ./data/16/mandat
mv ./tmp/organe/* ./data/16/organe
mv ./tmp/pays/* ./data/16/pays

rm -rf ./tmp/*

# Questions Gouvernementales
curl -L http://data.assemblee-nationale.fr/static/openData/repository/16/questions/questions_gouvernement/Questions_gouvernement.json.zip -o ./tmp/QG.zip
unzip -o ./tmp/QG.zip -d ./tmp/
mv ./tmp/json/* ./data/16/questionsG
rm -rf ./tmp/*

# Questions Sans débats
curl -L http://data.assemblee-nationale.fr/static/openData/repository/16/questions/questions_orales_sans_debat/Questions_orales_sans_debat.json.zip -o ./tmp/QSD.zip
unzip -o ./tmp/QSD.zip -d ./tmp/
mv ./tmp/json/* ./data/16/questionsSD
rm -rf ./tmp/*

# Questions écrites
curl -L http://data.assemblee-nationale.fr/static/openData/repository/16/questions/questions_ecrites/Questions_ecrites.json.zip -o ./tmp/QE.zip
unzip -o ./tmp/QE.zip -d ./tmp/
mv ./tmp/json/* ./data/16/questionsE
rm -rf ./tmp/*

# Réunions (marche pas)
curl -L http://data.assemblee-nationale.fr/static/openData/repository/16/vp/reunions/Agenda.json.zip -o ./tmp/reus.zip
unzip -o ./tmp/reus.zip -d ./tmp/
mv ./tmp/json/reunions/* ./data/16/reunions
rm -rf ./tmp/*

# Acteurs Organes Mandats
curl -L http://data.assemblee-nationale.fr/static/openData/repository/16/amo/deputes_senateurs_ministres_legislature/AMO20_dep_sen_min_tous_mandats_et_organes.json.zip -o ./tmp/aom.zip
unzip -o ./tmp/aom.zip -d ./tmp/
mv ./tmp/json/organe/* ./data/16/organe
mv ./tmp/json/acteur/* ./data/16/acteur
rm -rf ./tmp/*

# Débats
curl -L http://data.assemblee-nationale.fr/static/openData/repository/16/vp/syceronbrut/syseron.xml.zip -o ./tmp/syseron.zip
unzip -o ./tmp/syseron.zip -d ./tmp/
mv ./tmp/xml/compteRendu/* ./data/16/compteRendu
rm -rf ./tmp/*

# https://data.assemblee-nationale.fr/static/openData/repository/16/amo/oep_csv_opendata/liste_organismes_extra_parlementaires_libre_office.csv
curl -L https://data.assemblee-nationale.fr/static/openData/repository/16/amo/oep_csv_opendata/liste_organismes_extra_parlementaires_libre_office.csv -- | python -c 'import csv, json, sys; print(json.dumps([dict(r) for r in csv.DictReader(sys.stdin)]))' > ./data/16/oep.json

# Amendements
curl -L http://data.assemblee-nationale.fr/static/openData/repository/16/loi/amendements_div_legis/Amendements.json.zip -o ./tmp/amendements.zip
unzip -o ./tmp/amendements.zip -d ./tmp/
mv ./tmp/json/* ./data/16/amendements
rm -rf ./tmp/*

# https://data.assemblee-nationale.fr/static/openData/repository/16/amo/mandats_csv_opendata/mandats_ge_ga_gevi_excel.csv
curl -L https://data.assemblee-nationale.fr/static/openData/repository/16/amo/mandats_csv_opendata/mandats_ge_ga_gevi_excel.csv -- | python -c 'import csv, json, sys; print(json.dumps([dict(r) for r in csv.DictReader(sys.stdin)]))' > ./data/16/mandats-simple.json

rm -rf ./tmp
