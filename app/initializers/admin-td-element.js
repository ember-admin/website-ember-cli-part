import AdminTdElement from 'admin-app/components/admin-td-element';

export default {
  name: 'admin-td-element',
  initialize: function() {
    return AdminTdElement.reopen({
      relations: 'email title name'.w()
    });
  }
};