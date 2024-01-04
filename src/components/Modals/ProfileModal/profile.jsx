import { Modal, ModalBody } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../cssFiles/ProfileModal/profileModal.css";
import { Field, Formik } from "formik";

const initialValues = {
  name: "Jasmeet",
  username: "jasmeet_test",
  email: "jasmeet@gmail.com",
};

const onSubmitHandler = (values) => {
  console.log("formik values>>>>", values);
};
function Profile(props) {
  const [formDisabled, setformDisabled] = useState(true);
  useEffect(() => {
    console.log("state>>>>", formDisabled);
  }, [formDisabled]);
  return (
    <Modal show={props.show} onHide={props.onHide}>
      {/* <Modal show={true} onHide={props.onHide}> */}
      {/* <ModalBody className="modal-profileModal"> */}
      <div className=" modal-profileModal main-holder-profile-modal">
        <div className="header-profile-modal-css">Hi, User</div>
        <div>
          <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="profile-Modal-form-Container"
              >
                <div>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    disabled={formDisabled}
                    value={values.name}
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    disabled={formDisabled}
                    value={values.username}
                  />
                </div>
                <div>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    disabled={formDisabled}
                    value={values.email}
                  />
                </div>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    {
                      formDisabled ? setformDisabled(false) : handleSubmit();
                    }
                  }}
                  className={
                    formDisabled
                      ? "edit-button-profileModal-form"
                      : "submit-button-profileModal-form"
                  }
                >
                  {formDisabled ? "Edit?" : "Submit"}
                </span>
              </form>
            )}
          </Formik>
        </div>
        <div className="orders-map-holder-profileModal">
          <h3 className="profileModal-order-heading">
            ORDER <span>#1</span>
          </h3>
          <div className="order-details-holder-profileModal">
            <div>Ordered place details </div>
            <div> Ordered Cart Items Details </div>
          </div>
        </div>
      </div>
      {/* </ModalBody> */}
    </Modal>
  );
}

export default Profile;
