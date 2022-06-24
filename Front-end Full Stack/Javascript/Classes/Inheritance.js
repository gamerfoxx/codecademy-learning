class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
      super(name);
    //   super keyword calls the constructor of the parent class. 
    // In this case, super(name) passes the name argument of the Nurse class to the constructor of the HospitalEmployee class. 
    //must be used before the this keyword is used
      this._certifications = certifications;
    }
    get certifications(){
        return this._certifications;
      }
    
      addCertification(newCertification) {
        this._certifications.push(newCertification);
      }
  }
  
  
  const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics'])
  console.log(nurseOlynyk.certifications);
  nurseOlynyk.takeVacationDays(5);
  console.log(nurseOlynyk.remainingVacationDays);
//   Can be used despite being configured in the HospitalEmployee class
nurseOlynyk.addCertification('Genetics');

console.log(nurseOlynyk.certifications);