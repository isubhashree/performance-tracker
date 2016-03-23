EmployeesCollection = new Meteor.Collection("employees");
VehicleModels = new Meteor.Collection("vehicle_models");
VehicleTypes = new Meteor.Collection("vehicle_types");
RetailCollection = new Meteor.Collection("retail");


if (Meteor.isClient){
  Template.body.onRendered({

  });

  Template.body.helpers({
    'employeeList':function(){
      return EmployeesCollection.find();
    },
    'currentEmployee':function(){
      return Session.get('currentEmployee');
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
      Session.set('currentEmployee',null);
    },
    'click #clickCustomerCare':function(){
      Session.set('departmentSelected',"CUSTOMER CARE");
      Session.set('currentEmployee',null);
    },
    'click #clickSpare':function(){
      Session.set('departmentSelected',"SPARE");
      Session.set('currentEmployee',null);
    }
  });

  Template.employee.events({
    'click #clickEmployee':function(){
      Session.set('currentEmployee',this.name);
      console.log(Session.get('currentEmployee'));
      console.log(this);
      $(this).attr('class') == "list-group-item active";
    }
  });

  Template.employeeDataEntry.helpers({
    'entryName':function(){
      return Session.get('currentEmployee');
    },
    'types':function(){
      return VehicleTypes.find();
    },
    'models':function(){
      return VehicleModels.find();
    }
  });
}

if (Meteor.isServer){
  Meteor.startup(function(){
    RetailCollection._ensureIndex({employeeName: 1, vehicleModel: 1, quantitySold:1, createdAt: 1}, {unique: 1});
  });

  Meteor.methods({
    
  });
}
