type ref = "http://schemas.assemblee-nationale.fr/referentiel";
type xref = "http://www.w3.org/2001/XMLSchema-instance";

export interface ObjActeur {
  acteur: Acteur;
}

type Adresse = AdressePostale | AdresseTelephonique | AdresseSite | AdresseMail;

export interface Acteur {
  "@xmlns": ref;
  uid: UID;
  uri_hatvp: uri_hatvp;
  etatCivil: EtatCivil;
  profession: {
    libelleCourant: string;
    socProcINSEE: {
      catSocPro: string;
      famSocPro: string;
    };
  };
  adresses: {
    adresse: Adresse[] | Adresse;
  };
  // mandats: {
  //   mandat:
  // }
}

export interface MandatSimple {
  "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
  "@xsi:type": "AdresseMail_Type";
  uid: string;
  acteurRef: string;
  legislature: null | "16";
  typeOrgane: typeOrgane;
  datePublication: null | string;
  dateFin: null | string;
  preseance: null | string;
  nominPrincipale: "1" | "0";
  infosQualite: infosQualite;
  organes: organes;
}

export interface organes {
  organeRef: string;
}

export interface infosQualite {
  codeQualite: null | codeQualite;
  libQualite: string
  libQualiteSex: string
}

// " ", "-", "'" => "_"
export enum codeQualite {
  Membre,
  Titulaire,
  Député_non_inscrit,
  Secrétaire,
  Co_Président,
  Rapporteur,
  Suppléant,
  Vice_Président,
  Président,
  Autre_membre_du_Bureau,
  membre,
  Ministre_délégué,
  Secrétaire_d_État,
  Membre_apparenté,
  Rapporteur_thématique,
  Membre_de_droit,
  Secrétaire_du_Bureau,
  Ministre,
  Membre_rattaché,
  Secrétaire_général,
  Rapporteur_général,
  Premier_Vice_Président,
  Trésorier,
  Président_délégué,
  Trésorier_adjoint,
  Président_de_droit,
  Premier_ministre,
  Vice_Président_délégué,
  Garde_des_sceaux,
  Président_exécutif,
  Secrétaire_général_adjoint,
}

export enum typeOrgane {
  PARPOL,
  CNPS,
  CNPE,
  GP,
  COMPER,
  ORGEXTPARL,
  GE,
  GA,
  DELEGSENAT,
  API,
  GROUPESENAT,
  COMSENAT,
  CMP,
  DELEG,
  GEVI,
  GOUVERNEMENT,
  MINISTERE,
  COMSPSENAT,
  DELEGBUREAU,
}

export interface MendatMission {}
export interface MendatParlementaire {}
export interface MendatAvecSuppleant {}

export interface AdresseMail {
  "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
  "@xsi:type": "AdresseMail_Type";
  uid: string;
  type: "15";
  typeLibelle: "Mèl";
  poids: null | "2" | "22";
  adresseDeRattachement: string | null;
  valElec: string;
}

export interface AdresseSite {
  "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
  "@xsi:type": "AdresseSiteWeb_Type";
  uid: string;
  type: string;
  typeLibelle:
    | "Url sénateur"
    | "Facebook"
    | "Twitter"
    | "Instagram"
    | "Linkedin"
    | "Site internet";
  poids: string | null;
  adresseDeRattachement: string | null;
  valElec: string | null;
}

export interface AdresseTelephonique {
  "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
  "@xsi:type": "AdresseTelephonique_Type";
  uid: string;
  type: string;
  typeLibelle: "Téléphone";
  poids: string | null;
  adresseDeRattachement: string;
  valElec: string;
}

export interface AdressePostale {
  "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
  "@xsi:type": "AdressePostale_Type";
  uid: string;
  type: string;
  typeLibelle: string;
  poids: string | null;
  adresseDeRattachement: null | string;
  intitule: string;
  numeroRue: string | null;
  nomRue: string | null;
  complementAdresse: string | null;
  codePostal: string;
  ville: string;
}

export interface uri_hatvp {
  "@xmlns:xsi": xref;
  "@xsi:nil": "true" | "false";
}

export interface UID {
  "@xmlns:xsi": xref;
  "@xsi:type": string;
  "#text": string;
}

export interface EtatCivil {
  dateDeces: booleanNil;
  ident: ident;
  infoNaissance: infoNaissance;
}

export interface infoNaissance {
  dateNais: string;
  villeNais: string;
  depNais: string;
  paysNais: booleanNil;
}

export interface ident {
  civ: "Mme" | "M";
  prenom: string;
  nom: string;
  alpha: string;
  trigramme: booleanNil;
}

export interface booleanNil {
  "@xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance";
  "@xsi:nil": "true" | "false";
}

export enum Metier {
  "Professeur de faculté",
  "Professeur, profession scientifique",
  "Formateur en management",
  "Autre cadre (secteur privé)",
  "Cadre de la fonction publique",
  "Enseignante",
  "Cadre administratif et commercial d'entreprise",
  "Masseur Kinésithérapeute",
  "Industriel-Chef d'entreprise",
  "Neuroradiologue",
  "Profession rattachée à l'enseignement",
  "Cadre supérieur (secteur privé)",
  "Profession libérale",
  "Médecin",
  "Cadre commercial bâtiment",
  "Sans profession déclarée",
  "Inspecteur général de l'éducation nationale honoraire",
  "Conseil en gestion de patrimoine",
  "Cadre technique d'entreprise",
  "Autre profession libérale",
  "Sans activité professionnelle",
  "Fonctionnaire de catégorie A",
  "Expert-comptable",
  "Professeur du secondaire et technique",
  "Administrateur civil hors-classe",
  "Agricultrice",
  "Ancien cadre",
  "retraité",
  "Chargée de ressources humaines",
  "Directeur de cabinet",
  "Consultante indépendante",
  "Ancien employé",
  "Consultant",
  "Chef d'entreprise de 10 salariés ou plus",
  "Fonctionnaire de catégorie B",
  "Ministre",
  "Sous-préfet",
  "Retraitée de l'enseignement",
  "Employé administratif d'entreprise",
  "Ingénieur et cadre technique d'entreprise",
  "Intervenant social",
  "Maître des requêtes au conseil d'état",
  "Artisan",
  "Policier et militaire",
  "Consultante en communication",
  "Ingénieure",
  "Avocat",
  "Retraité de l'éducation nationale",
  "Enseignant",
  "Profession intermédiaire de la santé et du travail social",
  "Collaborateur d'élu",
  "Coordinatrice de projets associatifs",
  "Pharmacien",
  "SANS PROFESSION DÉCLARÉE",
  "Professeur d'histoire-géographie",
  "Directeur d'école",
  "Cadre territorial",
  "Assistant parlementaire",
  "Fonctionnaire des grands corps de l'État",
  "Cadre administratif",
  "Profession intermédiaire administrative de la fonction publique",
  "Gestionnaire à l'INRAE",
  "Cadre d'entreprise",
  "Journaliste",
  "Ingénieur",
  "Directrice marketing",
  "Biologiste A.I.H.P.",
  "Professeur des écoles, instituteur et assimilé",
  "Chef d'entreprise",
  "Responsable de la communication numérique",
  "Juriste d'entreprise",
  "Enseignant 1er degré-directeur d'école (en disponibilité)",
  "Directeur régional des ventes",
  "Retraitée de la fonction publique hospitalière et chargée de formation",
  "Professeure agrégée",
  "Cadre d'entreprise de 10 salariés ou plus",
  "Professeur du secondaire",
  "Professeur de lycée professionnel",
  "Employé (secteur privé)",
  "Expert comptable",
  "Educatrice spécialisée",
  "Consultant sécurité",
  "Contremaître, agent de maîtrise",
  "Ingénieur commercial",
  "Responsable de service social hospitalier",
  "Magistrat",
  "Professeur agrégé enseignant à l'université d'Orléans",
  "Administrateur de l'Etat",
  "Officier de l'armée de Terre",
  "Salariée agricole",
  "Cadre commercial dans l'industrie et le bâtiment",
  "Chef entreprise",
  "Employé civil et agent de service de la fonction publique",
  "Ancien artisan, commerçant, chef d'entreprise",
  "RESPONSABLE CENTRE DE FORMATION",
  "Agent général d'assurances",
  "Avocate",
  "Cadre",
  "Professeur",
  "Employée du secteur privé",
  "Profession intermédiaire administrative et commerciale des entreprises",
  "Professeur agrégé",
  "Directeur de programme immobilier",
  "Professeur des écoles",
  "Directrice de mission",
  "Navigateur",
  "Photographe et réalisateur",
  "Commerçant et assimilé",
  "Cadre supérieur (entreprises publiques)",
  "Commerciale",
  "Directeur Général d'un établissement de santé",
  "Médecin spécialiste en onco-gériatrie",
  "Retraité fonction publique (hors enseignement)",
  "Salariée du secteur médical",
  "Technicien",
  "Conseiller référendaire honoraire à la Cour des comptes",
  "Responsable associative",
  "Professeur du second degré",
  "Expert-Comptable-Commissaire aux Comptes",
  "Assistant Maitre d'Équipage - Assistant Toutes Catégories",
  "Chef de projets SI",
  "Consultante",
  "Cadre (entreprises publiques)",
  "Mère au foyer",
  "cadre territorial",
  "Directeur du développement",
  "Agent administratif hospitalier",
  "Chargée de communication",
  "Responsable du programme LFI",
  "Ingénieure aéronautique",
  "Conseillère parlementaire",
  "Permanent politique",
  "Avocate / Ancien cadre",
  "Fonctionnaire territorial",
  "Ingénieur dans le domaine de l'environnement",
  "Cadre (secteur privé)",
  "Commerçante",
  "Collaboratrice politique en collectivité locale",
  "Intervenant en communication",
  "Cadre à la Caisse des Dépôts et Consignations",
  "Professeur des Universités",
  "Juriste",
  "Agriculteur-propriétaire exploitant",
  "Ouvrier qualifié de type industriel",
  "Retraité de l'enseignement",
  "Personnel de direction de l'éducation nationale",
  "Ingénieur en informatique",
  "Urbaniste",
  "Fonction publique territoriale",
  "avocat",
  "Directrice générale adjointe d'une agence de communication",
  "Consultante en affaires publiques",
  "Assistant Parlementaire",
  "Professeure de français",
  "Agent contractuel au Parlement européen",
  "Médecin expert judiciaire",
  "collaboratrice parlementaire",
  "Ancien Chef d'entreprise",
  "Directrice de cabinet",
  "Employé de commerce",
  "Collaborateur parlementaire",
  "AVOCAT",
  "Reporter",
  "Cadre secteur privé",
  "Consultant en développement durable",
  "Professeur dans l'enseignement supérieur",
  "Cadre supérieur du secteur public",
  "Délégué général du Comité des travaux historiques et scientifiques",
  "Professeur d'économie",
  "Professeure des écoles",
  "Journaliste et autre média",
  "Directrice commerciale",
  "Contrôleure interne et risk manager",
  "Cadre agricole",
  "Ingénieur en informatique – Directeur de missions",
  "Maître de conférences à Sciences Po",
  "Cadre d'entreprise / enseignant universitaire",
  "Collaboratrice parlementaire",
  "Conseillère en stratégie des organisations",
  "Médecin biologiste",
  "Sans profession",
  "Inspecteur général des Affaires sociales",
  "Clerc d'huissier",
  "Notaire",
  "Conseiller ministériel",
  "Chirurgien",
  "consultant - formateur",
  "Directrice d'Ehpad",
  "Ouvrière agricole",
  "Professeur agrégé à l'Université",
  "Diplomate",
  "cadre d'entreprise",
  "Professeur d'italien",
  "Retraité de l'enseignement supérieur",
  "Fonctionnaire retraité",
  "Commerçant",
  "Conseiller en assurance",
  "Retraité de la police nationale",
  "Autre profession",
  "Employé",
  "Professeur de lettres",
  "Fonctionnaire",
  "Consultante-Coach en Ressources Humaines",
  "Retraitée de la fonction publique hospitalière",
  "Chargée de gestion administrative",
  "Directrice administrative",
  "Ingénieur Arts et métiers",
  "Professeur de médecine",
  "Inspecteur assurance-vie",
  "Retraité des professions libérales",
  "Consultant aéronautique",
  "Conseiller protection sociale (Assurances)",
  "Ancien journaliste",
  "Artiste-peintre",
  "Sociologue",
  "Conseiller en communication",
  "Elu local",
  "Professeure",
  "Enseignant 1er deg.-directeur école",
  "Exploitant céréalier",
  "Editeur",
  "Infirmier des forces spéciales",
  "Attachée de Presse",
  "cheminot",
  "Directeur d'établissements sanitaires et sociaux",
  "Fonctionnaire territorial - Agent du service courrier",
  "Chef de projet dans l'industrie",
  "Administrateur de biens",
  "Assistante parlementaire",
  "Agriculteur",
  "Agriculteur sur moyenne exploitation",
  "Exploitant agricole",
  "Bibliothécaire",
  "Cadre du secteur privé",
  "Associé dans un cabinet d'audit international",
  "Cadre supérieur du secteur privé",
  "Informaticien",
  "Entrepreneur",
  "Directeur d'un organisme de financement du logement social",
  "Psychologue",
  "Comptable",
  "Économiste",
  "Chauffeur-livreur",
  "Chargé de mission",
  "Industriel-Chef entreprise",
  "Consultante communication",
  "Personnel des services directs aux particuliers",
  "DRH Aéronautique",
  "Ancien cadre du secteur privé",
  "Directrice de la communication",
  "Chargé d'opérations urbanisme",
  "Directeur d'un établissement pour l'enfance handicapée",
  "Professeur d'anglais CFA",
  "Chargée des relations extérieures - secteur télécom",
  "Ancien cadre du secteur bancaire",
  "Cheffe de service socio-éducatif",
  "Cadre supérieur",
  "Inspecteur principal des Finances publiques",
  "Attaché parlementaire",
  "Maire",
  "Employée (secteur privé)",
  "Conseiller parlementaire",
  "Professeur certifié de SES",
  "ingénieur en chef du contrôle de la navigation aérienne",
  "Instituteur",
  "Personne diverse sans activité professionnelle de moins de 60 ans (sauf retraité",
  "Ouvrier de type industriel",
  "Conseiller d'insertion professionnelle",
  "Préparatrice en pharmacie",
  "chef d'entreprise",
  "Docteur, Ingénieur Recherche et Dévelopement",
  "Directeur d'association",
  "Directrice projets",
  "Ancienne profession intermédiaire",
  "Ingénieur des mines",
  "Directeur de ressources humaines",
  "Profession de l'information",
  "Retraitée de la Fonction publique",
  "Cadre du secteur de la santé",
  "étudiant",
  "Directeur de mutuelle",
  "Analyste bancaire",
  "Cadre commercial",
  "Archéozoologue",
  "Ingénieur-Agriculteur",
  "Médecin neurologue hospitalier",
  "Chef d'entreprise - Enseignante associée université",
  "Cardiologue",
  "Policier",
  "Grands corps de l'État",
  "Retraité de la fonction publique",
  "Senior Advisor",
  "Elève, étudiant",
  "Directrice Culture, Patrimoine et Sport",
  "Profession de l'information, des arts et des spectacles",
  "Retraitée de la fonction publique (hors enseignement)",
  "Chargé d'assistance automobile",
  "Cadre administratif d'entreprise",
  "Conseiller foncier agricole",
  "Professeur certifié",
  "Ancien directeur d'une société de recrutement",
  "Viticulteur",
  "Représentant de commerce",
  "DIRIGEANT D'ENTREPRISE",
  "Déléguée médicale",
  "Magistrat administratif",
  "Vétérinaire",
  "Collaborateur politique",
  "Horticulteur",
  "Ingénieur agronome",
  "Manager public",
  "Professeur agrégé de biologie",
}

export enum Addr {
  "AdressePostale_Type",
  "AdresseMail_Type",
  "AdresseSiteWeb_Type",
  "AdresseTelephonique_Type",
}
