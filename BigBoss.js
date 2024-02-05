const company = {
  name: 'Big Company',
  type: 'Main Company',
  platform: 'Platform for selling tickets',
  sellsSolution: 'Ticket Sales Solution',
  clients: [
    {
      name: 'Client 1',
      type: 'subCompany',
      uses: 'Ticketing Software',
      sells: 'Ticketing Solutions',
      partners: [
        {
          name: 'Client 1.1',
          type: 'subSubCompany',
          uses: 'Ticketing Solutions',
          sells: 'Ticketing Solutions',
        },
        {
          name: 'Client 1.2',
          type: 'subSubCompany',
          uses: 'Ticketing Solutions',
          sells: 'Ticketing Solutions',
          partners: [
            {
              name: 'Client 1.2.3',
              type: 'subSubCompany',
              uses: 'Ticketing Solutions',
              sells: 'Ticketing Solutions',
            },
          ],
        },
      ],
    },
    {
      name: 'Client 2',
      type: 'subCompany',
      uses: 'Ticketing Software',
      sells: 'Ticket Sales Solutions',
    },
  ],
};

function findValueByKey(companyName) {
  let result = null;

  function searchCompany(obj) {
    if (obj.name === companyName) {
      result = obj;
      return;
    }

    if (obj.clients) {
      for (let i = 0; i < obj.clients.length; i++) {
        searchCompany(obj.clients[i]);
      }
    }

    if (obj.partners) {
      for (let i = 0; i < obj.partners.length; i++) {
        searchCompany(obj.partners[i]);
      }
    }
  }

  searchCompany(company);
  return result;
}

const companyName = 'Client 1.2.3';
const subCompany = findValueByKey(companyName);
console.log(subCompany);