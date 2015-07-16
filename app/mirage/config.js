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
  
  this.get('/categories');
  this.get('/categories/:id', 'category');
  this.post('/categories', 'category');
  this.del('/categories/:id', 'category');
  this.put('/categories/:id', 'category');
  this.post('/categories/rebuild', 'category');

  this.get('/products', function(db) {
    return {products: db.products, companies: db.companies};
  });
  this.get('/products/:id', function(db, req) {
    let product = db.products.find(req.params.id);
    let company = db.companies.find(req.params.id);
    return {product: product, companies: [company]};
  });
  this.post('/products', 'product');
  this.del('/products/:id', 'product');
  this.put('/products/:id', function(db, req) {
    let updated = JSON.parse(req.requestBody).product;
    return {product: updated};
  });

  this.get('/companies');
  this.get('/companies/:id', 'company');
  this.post('/companies', 'company');
  this.del('/companies/:id', 'company');
  this.put('/companies/:id', 'company');
}
