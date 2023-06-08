function MedScan() {
  var images = "";
  var usage = "";
  var allergen = "";
  var side_effect = "";
  var precaution = "";
  var product_name = "";

  var pharma_products = [
    {
      image:
        "https://pbs.twimg.com/media/FF6zUOpXwAMIbk6?format=jpg&name=small",
      names: "Alcophyllex",
      usages:
        "Adults: 2 to 3 medicine measures (10 to 15 ml) every four hours Children 2 to 6 years: ½ to 1 medicine measure (2,5 to 5 ml) every four hours 7 to 12 years: 1 to 2 medicine measures (5 to 10 ml) every four hours. Not for use in children under 2 years of age.",
      side_effects:
        "Insomnia, anxiety and restlessness. Nervous system disorders : Headache. Ear and labyrinth disorders The following side effect has been reported but the frequency is unknown: Vertigo. Cardiac disorders : Palpitations. Gastrointestinal disorders : Nausea, vomiting, abdominal pain and gastrointestinal bleeding. Diphenhydramine hydrochloride: Blood and the lymphatic system disorders : Thrombocytopenia. Metabolism and nutrition disorders : Anorexia or increased appetite. ",
      allergens:
        "ALCOPHYLLEX should be given with caution to patients with peptic ulceration and hyperthyroidism",
      precautions:
        "ALCOPHYLLEX should be given with caution to patients with peptic ulceration, hyperthyroidism, hypertention, cardiac arrhythmias or other cardiovascular disease as these conditions may be exacerbated. ALCOPHYLLEX should also be given with caution to patients with heart failure, acute febrile illness and the elderly, since in all of these circumstances theophylline clearance may be decreased.",
    },
    {
      image: "https://hipharm-eg.com/wp-content/uploads/2021/07/Flu-scaled.jpg",
      names: "Flustat",
      usages:
        "Adults: 2 capsules three times daily. Children (6 - 12 years): 1 capsule three times daily. Not recommended for children under the age of 6 years.",
      side_effects:
        "If any of the following happen, you should stop taking the and tell your doctor immediately or go to the casualty department at your nearest hospital: Red skin rash or allergic skin reaction, Sudden, life-threatening severe allergic reaction, difficulty in breathing/shortness of breath",
      allergens:
        "Do not take flustast capsules if you are allergic to any of the active or inactive ingredients. Each capsule contains:- Phenylephrine hydrochloride 5 mg Chlorpheniramine maleate 2 mg Paracetamol 300 mg Ascorbic acid 75 mg Caffeine 30 mg.",
      precautions:
        "Take special care with flustat if you suffer from liver or kidney disease,  if you have diabetes,  if you have a history of peptic ulcers, if you operate a vehicle or dangerous machinery.",
    },
    {
      image:
        "https://www.dischem.co.za/media/catalog/product/cache/41664faeeb094fcc68fc0c934ed2e5ae/6/4/644bbdf2a5545_6006352036999.jpg",
      names: "Soflax",
      usages:
        "For adults and children older than 12 years, the recommended dose ranges from 100 mg to 200 mg daily. For children 6 to 12 years old, the recommended dose is 100 mg daily. For children under 6 years of age, your doctor will recommend the appropriate dose. Swallow the capsules whole with water or fruit juice. The syrup or drops should be given in 120ml of milk or fruit juice, or in infant formula to mask the bitter taste of the medication. Use an oral syringe or dropper to measure each dose of the syrup or drops.",
      allergens:
        "If you allergic to any of these ingredients you are advised not to take it. Inactive ingredients: Include Carmellose Sodium, Lactose Monohydrate, Magnesium Stearate, Maize Starch, Microcrystalline Cellulose, Purified Talc and Sodium Lauryl Sulphate.",
      side_effects:
        "The following side effects have been reported by at least 1% of people taking this medication. diarrhea, skin rash,stomach or intestinal cramping,throat irritation (if using liquid forms). Some people may experience side effects other than those listed.",
      precautions:
        "Do not use this medication if you, are allergic to docusate or any ingredients of the medication, have abdominal pain, nausea, fever, or vomiting, have symptoms of appendicitis, have rectal bleeding or undiagnosed bleeding,have high blood pressure,have congestive heart failure, have impacted stools, have a blockage in the intestines",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9XeTR4sKBvB5qGvgS-oebhhFwwaYSz-ZnQ&usqp=CAU",
      names: "Allergex",
      usages:
        "ALLERGEX NON DROWSY SYRUP lack significant sedative properties. However, patients should be advised that a small number of individuals may experience sedation. Therefore, the effect of the medicine on a particular patient should be ascertained before they drive or operate machinery. Patients with hepatic impairment should be administered reduced dose as they may have decreased clearance of loratadine; an initial dose of 5 ml once daily or 10 ml on alternate days is recommended. Use with caution in patients with epilepsy due to less frequent reports of convulsions. Cross sensitivity to related drugs may occur.",
      side_effects:
        "Hypersensitivity reactions (including angioedema and anaphylaxis Photosensitivity may occur, Increased appetite,Headache, somnolence, sleep disturbances, sedation, nervousness, convulsions, depression, dizziness, extrapyramidal effects, tremor, sweating, paraesthesia,Tinnitus,Tachycardia, palpitations,Hypotension,Nausea, dry mouth, vomiting, diarrhoea, epigastric pain,Rash, alopecia).",
      allergens: "No known allergens ",
      precautions:
        "Contains sucrose. Patients with the rare hereditary conditions of fructose intolerance e.g., glucose galactose malabsorption or sucrase-isomaltase insufficiency should not take ALLERGEX NON DROWSY SYRUP. Contains sucrose which may have an effect on the glycaemic control of patients with diabetes mellitus. H1 receptor antihistamines such as ALLERGEX NON DROWSY SYRUP have been shown to may cause weight gain",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0090/0317/1906/products/medazine_tablets_zimseller.jpg?v=1567109167",
      names: "Medazine",
      usages:
        "Mezadine can be used to help you  stop from feeling nausea or vomiting. Mezadine can also be used to treat sickness caused by some inner ear problems such as an inner ear problem that can cause dizzy spells, also called vertigo, and hearing loss.",
      side_effects:
        "Drowsiness ,Inability to concentrate , Dizziness , Feeling tired , Headache , Dry mouth, Blurred vision, Difficulty urinating, Pain or discomfort when urinating, Tightness of the chest, Feeling restless , Diarrhoea, Constipation, Nausea, Vomiting, Pain in the stomach, increased appetite, An eating disorder called anorexia, Headache Ringing in the ear, Excitement, Muscle weakness, Low blood pressure ,Hallucinations.",
      allergens: "cyclizine",
      precautions:
        "If your child suffer from any of the following conditions: Skin reactions, Liver disease,Epilepsy. If your child has suffer from epilepsy or previously suffered a fit or seizure, taking more MEDAZINE than recommended may induce a fit/seizure, Heart failure.",
    },
    {
      image:
        "https://broadwaypharmacy.co.za/wp-content/uploads/2021/02/gastropect.jpg",
      names: "Gastropect",
      usages:
        "Shake the bottle before use, If the symptoms persist for longer than 48 hours or the condition of the patient deteriorates, the product must be discontinued and a doctor consulted. In the treatment of diarrhoea it is important that hydration be maintained by giving adequate fluids and electrolytes .",
      side_effects:
        "Constipation may occur.Pectin may temporarily increase flatulence and distension.",
      allergens: "No known allergens",
      precautions:
        "Should not be given to patients with intestinal obstruction, and patients with spastic bowel conditions.",
    },
  ];

  function getNameOfProduct(name_of_product) {
    product_name = name_of_product;
    return product_name;
  }

  function getPrecautions() {
    for (var i = 0; pharma_products.length < 7; i++) {
      if (pharma_products[i].names == product_name) {
        for (const y in pharma_products[i]) {
          precaution = pharma_products[i].precautions;
        }
        return precaution;
      }
    }
  }

  function getAllergens() {
    for (var i = 0; pharma_products.length < 7; i++) {
      if (pharma_products[i].names == product_name) {
        for (const y in pharma_products[i]) {
          allergen = pharma_products[i].allergens;
        }
        return allergen;
      }
    }
  }

  function getSideEffects() {
    for (var i = 0; pharma_products.length < 7; i++) {
      if (pharma_products[i].names == product_name) {
        for (const y in pharma_products[i]) {
          side_effect = pharma_products[i].side_effects;
        }
        return side_effect;
      }
    }
  }

  function getUsages() {
    for (var i = 0; pharma_products.length < 7; i++) {
      if (pharma_products[i].names == product_name) {
        for (const y in pharma_products[i]) {
          usage = pharma_products[i].usages;
        }
        return usage;
      }
    }
  }

  function getImage() {
    for (var i = 0; pharma_products.length < 7; i++) {
      if (pharma_products[i].names == product_name) {
        for (const y in pharma_products[i]) {
          images = pharma_products[i].image;
        }
        return images;
      }
    }
  }

  return {
    getImage,
    getUsages,
    getSideEffects,
    getAllergens,
    getPrecautions,
    getNameOfProduct,
  };
}
