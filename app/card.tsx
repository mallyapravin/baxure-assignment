import React, { useState } from "react";
import { Text, Card, CardSection, Group, Avatar, Button } from "@mantine/core";
import "../styles/styles.css";
import {
  IconAt,
  IconPhone,
  IconWorld,
  IconStar,
  IconUserPlus,
  IconUserMinus,
} from "@tabler/icons-react";
import { User } from "../Interfaces/User";

interface CardComponentProps {
  user: User;
  onDelete: (userId: number) => void;
}
const CardComponent: React.FC<CardComponentProps> = ({ user, onDelete }) => {
  const [showStar, setShowStar] = useState(false);
  function handleClick() {
    //show the star when followed
    setShowStar(!showStar);
  }
  function handleDeleteClick() {
    onDelete(user.id);
  }
  return (
    <div>
      <Card shadow="md" radius="md" withBorder p="sm">
        <CardSection>
          <center>
            <Avatar
              mt="lg"
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
              alt="it's me"
              size={120}
            />
          </center>
        </CardSection>
        <CardSection
          style={{
            marginTop: 8,
            marginBottom: 2,
          }}
          fs="lg">
          <center>
            {" "}
            <div>
              <span style={{ fontWeight: 500 }}>
                {user.name}
                {showStar && (
                  <span>
                    <IconStar size={16} style={{ marginLeft: 5 }}></IconStar>
                  </span>
                )}
              </span>
            </div>
          </center>
        </CardSection>
        <Group c="dimmed">
          <div style={{ marginBottom: "8px" }}>
            <Text style={{ marginLeft: 2, marginBottom: 5 }}>
              {" "}
              <IconAt size={16} style={{ marginRight: 5 }}></IconAt>
              {user.email}
            </Text>
            <Text style={{ marginLeft: 2, marginBottom: 5 }}>
              <IconPhone size={16} style={{ marginRight: 5 }}></IconPhone>
              {user.phone}
            </Text>
            <Text style={{ marginLeft: 2, marginBottom: 5 }}>
              <IconWorld size={16} style={{ marginRight: 5 }}></IconWorld>
              {user.website}
            </Text>
          </div>
        </Group>

        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Button
            fullWidth
            variant={`${showStar ? "outline" : "primary"}`}
            style={{ marginRight: "8px" }}
            onClick={handleClick}>
            {/*Show the variant and icon of button based on showStar flag */}
            {showStar ? (
              <span>
                <IconUserMinus
                  size={16}
                  style={{
                    marginRight: 5,
                    verticalAlign: "center",
                    alignItems: "center",
                  }}></IconUserMinus>
                Unfollow
              </span>
            ) : (
              <span>
                <IconUserPlus
                  size={16}
                  style={{
                    marginRight: 5,
                    verticalAlign: "center",
                    alignItems: "center",
                  }}></IconUserPlus>
                Follow
              </span>
            )}
          </Button>

          <Button fullWidth variant="outline" onClick={handleDeleteClick}>
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CardComponent;
