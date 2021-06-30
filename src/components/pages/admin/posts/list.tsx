import React from "react";
import { Datagrid, EditButton, List, ListProps, ReferenceField, TextField } from "react-admin";

export const PostList = (props: ListProps) => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users"><TextField source="name" /></ReferenceField>
          <TextField source="title" />
          <EditButton />
      </Datagrid>
  </List>
);