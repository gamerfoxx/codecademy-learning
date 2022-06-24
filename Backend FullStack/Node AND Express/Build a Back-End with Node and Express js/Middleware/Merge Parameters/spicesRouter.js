
const router = require('express').Router({ mergeParams: true });

const spices = [
  {
    id: 1,
    name: 'cardamom',
    grams: 45,
    spiceRackId: 1,
  },
  {
    id: 2,
    name: 'pimentn',
    grams: 20,
    spiceRackId: 1,
  },
  {
    id: 3,
    name: 'cumin',
    grams: 450,
    spiceRackId: 3,
  },
  {
    id: 4,
    name: 'sichuan peppercorns',
    grams: 107,
    spiceRackId: 2,
  }
];

let nextSpiceId = 5;

router.post('/', (req, res, next) => {
  const newSpice = req.body.spice;
  newSpice.spiceRackId = Number(req.params.spiceRackId);
  if (newSpice.name && newSpice.grams) {
    newSpice.id = nextSpiceId++;
    spices.push(newSpice);
    res.status(201).send(newSpice);
  } else {
    res.status(400).send();
  }
});

router.get('/:spiceId', (req, res, next) => {
  const spiceId = Number(req.params.id);
  const spiceIndex = spices.findIndex(spice => spice.id === spiceId);
  if (spiceIndex !== -1) {
    res.send(spices[spiceIndex]);
  } else {
    res.status(404).send('Spice not found.');
  }
});

router.put('/:spiceId', (req, res, next) => {
  const spiceId = Number(req.params.id);
  const spiceIndex = spices.findIndex(spice => spice.id === spiceId);
  if (spiceIndex !== -1) {
    spices[spiceIndex] = req.body.spice;
    res.send(spices[spiceIndex]);
  } else {
    res.status(404).send('Spice not found.');
  }
});

router.delete('/:spiceId', (req, res, next) => {
  const spiceId = Number(req.params.id);
  const spiceIndex = spices.findIndex(spice => spice.id === spiceId);
  if (spiceIndex !== -1) {
    spices.splice(spiceIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Spice not found.');
  }
});

module.exports = router;