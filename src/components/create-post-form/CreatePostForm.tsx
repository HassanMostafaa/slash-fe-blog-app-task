"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  TextArea,
  Button,
  SuccessMessage,
  ErrorMessage,
  CriteriaText,
} from "./CreatePostForm.styles";

const CreatePostForm: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(100, "Title must be 100 characters or less")
        .required("Title is required"),
      body: Yup.string()
        .min(10, "Body must be at least 10 characters")
        .required("Body is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Submitted:", { ...values, id: uuidv4() });
      setSuccessMessage("Post submitted successfully!");
      resetForm();
    },
  });

  return (
    <FormContainer>
      <FormTitle>Create Post</FormTitle>
      <form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" {...formik.getFieldProps("title")} />
          {formik.touched.title && formik.errors.title ? (
            <ErrorMessage>{formik.errors.title}</ErrorMessage>
          ) : null}
          <CriteriaText>Title must be maximum 100 characters.</CriteriaText>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="body">Body</Label>
          <TextArea id="body" {...formik.getFieldProps("body")}></TextArea>
          {formik.touched.body && formik.errors.body ? (
            <ErrorMessage>{formik.errors.body}</ErrorMessage>
          ) : null}
          <CriteriaText>Minimum 10 characters</CriteriaText>
        </FormGroup>
        <Button type="submit" style={{ width: "100%" }}>
          Submit
        </Button>
      </form>
      {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
    </FormContainer>
  );
};

export default CreatePostForm;
