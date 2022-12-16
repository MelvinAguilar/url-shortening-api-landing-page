import classes from "./Form.module.scss";
import Button from "../Button/Button";
import InputField from "./InputField.jsx/InputField";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Services from "../../services/Services";
import { useForm } from "react-hook-form";

const Form = ({ onHandleSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { url } = data;
    onHandleSubmit(url).then((res) => {
      if (res === true) {
        reset();
      }
    });
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <InputField
        id="url"
        className={classes.input}
        nameGroup="url"
        type="text"
        placeholder="Shorten a link here..."
        label="Input your link"
        innerRef={{
          ...register("url", {
            required: {
              value: true,
              message: "Please add a link",
            },
            pattern: {
              value: /^(ftp|http|https):\/\/[^ "]+$/,
              message: "Please enter a valid URL",
            },
          }),
        }}
        validation={errors.url}
      >
        <div aria-live="polite" aria-atomic="true">
          {errors.url?.type === "required" && (
            <ErrorMessage>{errors.url.message}</ErrorMessage>
          )}
          {errors.url?.type === "pattern" && (
            <ErrorMessage>{errors.url.message}</ErrorMessage>
          )}
          {errors.url?.type === "custom" && (
            <ErrorMessage>{errors.url.message}</ErrorMessage>
          )}
        </div>
      </InputField>

      <Button type="submit" className={classes.button}>
        Shorten It!
      </Button>
    </form>
  );
};

export default Form;
