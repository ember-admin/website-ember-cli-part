export default function() {

  this.namespace = 'admin/api/v1';

  this.get('/users', function(db, req) {
    let users = db.users;
    let avatars = db.avatars;
    if (req.queryParams.q) {
      return {
        users: [users[0]],
        meta: {
          total: 1
        },
        avatars: [avatars[0]]
      };
    }
    var perPage = +req.queryParams.perPage;
    var page = +req.queryParams.page;
    let usersArray = users.slice((page - 1) * perPage, page * perPage);
    if (req.queryParams.sort) {
      let sort = req.queryParams.sort;
      usersArray.sort(function(prev, next) {
        if (prev[sort] < next[sort]) {
          return -1;
        } else if (prev[sort] === next[sort]) {
          return 0;
        } else {
          return 1;
        }
      });
      if (!JSON.parse(req.queryParams.orderAscending)) {
        usersArray.reverse();
      }
    }
    let avatarsArray = avatars.slice((page - 1) * perPage, page * perPage);
    return {
      users: usersArray,
      meta: {
        total: 50
      },
      avatars: avatarsArray
    };
  });

  this.get('/users/:id', 'user');
  this.post('/users', 'user');
  this.del('/users/:id', 'user');
  this.put('/users/:id', 'user');
  this.get('/users/autocomplete', 'users');
  
  this.get('/categories');
  this.get('/categories/:id', 'category');
  this.post('/categories', 'category');
  this.del('/categories/:id', 'category');
  this.put('/categories/:id', 'category');
  this.post('/categories/rebuild', 'category');

}

  // These comments are here to help you get started. Feel free to delete them.
  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection} // returns all the data defined in /app/mirage/fixtures/{collection}.js
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;
      var contact = db.contacts.find(contactId);
      var addresses = db.addresses
        .filterBy('contact_id', contactId);

      return {
        contact: contact,
        addresses: addresses
      };
    });

  */

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
