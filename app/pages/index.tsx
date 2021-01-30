import { Container, Typography, Box, Button } from "@material-ui/core";
import Link from "next/link";

const Index = () => (
  <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Link href="/about">
        <Button variant="contained" color="primary">
          Go to the about page
        </Button>
      </Link>
    </Box>
  </Container>
);

export default Index;
