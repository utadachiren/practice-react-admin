import React from "react";
import { SimpleForm, ReferenceInput, SelectInput, TextInput, Create, CreateProps } from "react-admin";

export const PostCreate = (props: CreateProps) => (
  <Create {...props}>
      <SimpleForm>
          <ReferenceInput source="userId" reference="users"><SelectInput optionText="name" /></ReferenceInput>
          <TextInput source="title" />
          <TextInput multiline source="body" />
      </SimpleForm>
  </Create>
);
