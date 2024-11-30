import { Button, Form } from "react-bootstrap";
import "./FormFields.css";
import { Link } from "react-router-dom";

export const InputTextField = ({
  label,
  placeholder,
  value,
  inputChange,
  isOptional,
  type = "text",
}) => {
  return (
    <Form.Group controlId={label} className="mb-3">
      <Form.Label>
        {label} {isOptional && " (Optional)"}
      </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={inputChange}
        required={!isOptional} // Add required if isOptional is false
      />
    </Form.Group>
  );
};

export const InputPasswordField = ({
  label,
  placeholder,
  value,
  inputChange,
}) => {
  return (
    <Form.Group controlId={label} className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="password"
        placeholder={placeholder}
        value={value}
        onChange={inputChange}
        required
      />
    </Form.Group>
  );
};

export const SubmitButton = ({ label }) => {
  return (
    <Button variant="primary" type="submit" className="w-100">
      {label}
    </Button>
  );
};

export const UrlLink = ({label,text,link}) => {
    return <div className="text-center mt-3">
    <p>
      {text}{' '}
      <Link to={link} className="form-link">
        {label}
      </Link>
    </p>
  </div>
};
