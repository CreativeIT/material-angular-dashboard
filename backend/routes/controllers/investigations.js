import { sample, sampleDate } from '../../utils';
// import { Investigation } from '../../db';

const investigations = Array(100).fill(0).map((_, id) => {
  const openDateTime = sampleDate(new Date(2018, 1, 1), new Date());
  const author = sample([
    'admin',
    'Eugene',
    'Author',
    'Bob Marley',
    'Bob Black',
  ]);
  const status = sample(['Closed', 'Open']);
  const reportSource = sample(['Internal', 'Helpline']);
  const originSource = sample([
    'Phone',
    'E-mail',
    'Web',
    'In-person',
  ]);
  const location = sample([{
    city: 'Minsk',
    country: "Belarus",
  }, {
    city: 'Moscow',
    country: 'Russian Federation',
  }, {
    city: 'Kraków',
    country: 'Poland',
  }, {
    city: 'Krobia',
    country: 'Poland',
  }, {
    city: 'New York City',
    country: 'United States',
  }, {
    city: 'London',
    country: 'United Kingdom',
  }, {
    city: 'Paris',
    country: 'France',
  }]);

  return {
    id,
    location,
    openDateTime,
    author,
    status,
    reportSource,
    originSource,
    locationCity: location.city,
    locationCountry: location.country,
  };
});

export const get = (req, res) => {
  if (req.query.page) {
    return res.json(getFromPage(+req.query.page));
  } else {
    return res.json(getAll());
  }
};

export const getSingle = (req, res) => {
  const investigation = investigations.find((investigation) => investigation.id === +req.params.id);
  return res.json(investigation);
};

function getFromPage(page = 1) {
  let limit = 20;   // number of records per page
  let pages = Math.ceil(investigations.length / limit);
  let offset = limit * (page - 1);

  return { investigations: investigations.slice(offset, offset + limit), pages };
}

function getAll() {
  return { investigations: investigations };
}
