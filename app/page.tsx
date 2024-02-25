"use client";
import { Grid, GridCol } from "@mantine/core";
import CardComponent from "./card";
import { useEffect, useState } from "react";
import API from "./api";
import axios from "axios";
import { User } from "../Interfaces/User";

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get<User[]>(API.USERS_API);
      setUsers(response.data);
    }
    fetchUsers();
  }, [API.USERS_API]);

  const handleDeleteUser = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    // Remove user from state by filtering out the user with the given userId
  };
  return (
    <Grid m="lg">
      {users.map((user) => (
        <GridCol key={user.id} span={{ base: 12, md: 6, lg: 3 }}>
          <CardComponent
            key={user.id}
            user={user}
            onDelete={handleDeleteUser}></CardComponent>
        </GridCol>
      ))}
    </Grid>
  );
}
