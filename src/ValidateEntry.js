export const formValidator = values => {

    const errors = {};
  
    if (!values.first_name) {
      errors.first_name = "First name is required";
    } else if (values.first_name.length < 3) {
      errors.first_name = "First name should be > 3";
    }
  
    if (!values.last_name) {
      errors.last_name = "Last name is required";
    } else if (values.last_name.length < 3) {
      errors.last_name = "Last name should be > 3";
    }
      
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/(.+)@(.+){2,}\.(.+){2,}/i.test(values.email)) {
      errors.email = "Invalid Email !!!";
    }

    console.log(errors);
    return errors;
  };