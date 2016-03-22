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
    Session.set('isEmployee',null);
  },
  'click #clickCustomerCare':function(){
    Session.set('departmentSelected',"CUSTOMER CARE");
    Session.set('isEmployee',null);
  },
  'click #clickSpare':function(){
    Session.set('departmentSelected',"SPARE");
    Session.set('isEmployee',null);
  }
});

Template.employee.events({
  'click #clickEmployee':function(){
    Session.set('isEmployee',this.employeeName);
    console.log(Session.get('isEmployee'));
    console.log(this);
    $(this).attr('class') == "list-group-item active";
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
