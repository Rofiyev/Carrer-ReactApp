import { Container, CssBaseline } from "@mui/material";
import Header from "./Components/Header";
import fon from "./bg.jpg";
import Home from "./Containers/Home";
import JonsPage from "./Containers/JobsPage";
import { FeaturedJobs } from "./Containers/FeaturedJobsPage";
import CompaniesPage from "./Containers/CompaniesPage";
import ConnectionPage from "./Containers/ConnectionPage";
import JobsPage from "./Containers/PostPage";
import CustomerPage from "./Containers/CustomerPage";
import ClienstsPage from "./Containers/ClientsPage";
import NewsPage from "./Containers/NewsPage";
import AdvertisingPage from "./Containers/AdvertisingPage";
import GetJobsPage from "./Containers/GetJobsPage";
import Footer from "./Containers/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          height: {
            xs: "130vh",
            sm: "80vh",
            md: "90vh",
            lg: "125vh",
            xl: "100vh",
          },
          background: `linear-gradient(to bottom, rgba(22, 28, 36, 0.88), rgba(22, 28, 36, 0.88)), url(${fon}) center`,
          backgroundSize: "cover",
        }}
      >
        <Header />
        <Home />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          maxHeight: { xs: "570vh", sm: "450vh" },
          background: "#fff",
          mb: 10,
        }}
      >
        <JonsPage />
        <FeaturedJobs />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          maxHeight: {
            xs: "600vh",
            sm: "400vh",
            md: "170vh",
            lg: "220vh",
            xl: "220vh",
          },
          background: "#f2f3f5",
        }}
      >
        <CompaniesPage />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          display: { xs: "none", md: "block" },
          height: {
            xs: "370vh",
            sm: "100vh",
            md: "100vh",
            lg: "130vh",
            xl: "100vh",
          },
          overflow: "hidden",
        }}
      >
        <ConnectionPage />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          height: {
            xs: "75vh",
            sm: "85vh",
            md: "90vh",
            lg: "100vh",
            xl: "100vh",
          },
          background: `linear-gradient(to bottom, rgba(22, 28, 36, 0.88), rgba(22, 28, 36, 0.88)), url(${fon}) center`,
          backgroundSize: "cover",
          mt: 15,
        }}
      >
        <JobsPage />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          background: "#f2f3f5",
        }}
      >
        <CustomerPage />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          background: "#fff",
          mb: 10,
        }}
      >
        <ClienstsPage />
        <NewsPage />
        <AdvertisingPage />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          height: "55vh",
          background: `linear-gradient(to bottom, rgba(22, 28, 36, 0.88), rgba(22, 28, 36, 0.88)), 
          url(https://zone-assets-api.vercel.app/assets/images/career/career_newsletter.jpg) center center no-repeat`,
          backgroundSize: "cover",
          mt: 15,
          p: "80px 0",
        }}
      >
        <GetJobsPage />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          minHeight: "120vh",
          background: "#fff",
        }}
      >
        <Footer />
      </Container>
    </>
  );
}

export default App;
