if (Meteor.isClient) {

Template.body.onRendered({

});

Template.body.helpers({
  employees:[
    {employeeName: "Subhashree"},
    {employeeName: "Rajashree"},
    {employeeName: "Rajan"}
  ],

  'isEmployee':function(){
    return Session.get('isEmployee');
  },

  'departmentSelected':function(){
    return Session.get('departmentSelected');
  },

});

Template.body.events({
  'click #clickSales':function(){
    Session.set('departmentSelected',"SALES");
  },
  'click #clickServices':function(){
    Session.set('departmentSelected',"SERVICES");
  },
  'click #clickCustomerCare':function(){
    Session.set('departmentSelected',"CUSTOMER CARE");
  },
  'click #clickSpare':function(){
    Session.set('departmentSelected',"SPARE");
  }
});

Template.employee.events({
  'click #clickEmployee':function(){
    Session.set('isEmployee',this.employeeName);
    console.log(Session.get('isEmployee'));
  }
});

Template.employeeDataEntry.helpers({
  'entryName':function(){
    return Session.get('isEmployee');
  }
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
