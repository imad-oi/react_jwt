export const ServiceFormulaire = [
  {
    id: 1,
    name: "General",
    LabelsInput: [
      { label: "nom", type: "text" },
      { label: "prenom", type: "text" },
      { label: "date de naissance", type: "date" },
      { label: "sexe", type: "text" },
      { label: "pays", type: "text" },
      { label: "telephone", type: "text" },
      { label: "email", type: "email" },
      { label: "profession", type: "text" },
      { label: "situation familiale", type: "text" },
      { label: "nombre d'enfants", type: "number" },
    ],
  },
  {
    id: 2,
    name: "Consultation",
    LabelsInput: [
      { label: "motif de consultation", type: "text" },
      { label: "date de consultation", type: "date" },
      { label: "heure de consultation", type: "time" },
      { label: "type de consultation", type: "text" },
      { label: "medecin", type: "text" },
      { label: "ordonnance", type: "text" },
    ],
  },
  {
    id: 3,
    name: "Analyse",
    LabelsInput: [
      { label: "date d'analyse", type: "date" }, 
      { label: "type d'analyse", type: "text" },
      { label: "resultat", type: "text" },
    ],
  },
  {
    id: 4,
    name: "Facture",
    LabelsInput: [
      
    ],
  },
];
