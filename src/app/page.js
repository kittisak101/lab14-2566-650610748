"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Group,
  Pagination,
  Rating,
  Text,
  Textarea,
  Title,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Box my="12px">
        <Title size="h4">Your rating</Title>
        <Rating size="lg" defaultValue={0} />
      </Box>
      <Textarea
        size="sm"
        placeholder="Do you enjoy eating?"
        label="Your review"
        minRows="3"
      />
      <Box my="10px">
        <Button color="orange">Submit Review</Button>
      </Box>
      <Divider size="xs" />
      <Box my="12px">
        <Group position="center">
          <Title size="h4">Elon Musk</Title>
          <Rating defaultValue={5} />
        </Group>
        <Box ta="center">
          <Text c="dimmed">Best pizza in this world. I give you X score.</Text>
        </Box>
      </Box>
      <Divider size="xs" />
      <Box my="12px">
        <Group position="center">
          <Title size="h4">Mark Zuck</Title>
          <Rating defaultValue={4} />
        </Group>
        <Box ta="center">
          <Text c="dimmed">My favourite part is pepperoni</Text>
        </Box>
      </Box>
      <Pagination total={20} color="orange" position="center" my="16px" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Kittisak Bundit 650610748
      </Text>
    </Container>
  );
}
