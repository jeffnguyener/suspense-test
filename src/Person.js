import React from "react";

export const Person = ({ resource }) => {
  const person = resource.person.read();
  console.log(person)

  return <div>{person.name.first}</div>;
};