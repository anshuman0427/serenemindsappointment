import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./theme";

import { AuthenticationForm } from "./component/AuthenticationForm/AuthenticationForm";
import { Services } from "./component/Servicesoff/Services";
import { Calendar } from "./component/Calendar/Calendar";
import { Contact } from "./component/Contactinfo/Contact";
import { ReviewInfo } from "./component/ReviewInfo/ReviewInfo";
import { ServerError } from "./component/ServerError/ServerError"; // Optional

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router>
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<AuthenticationForm />} />
          <Route path="/services" element={<Services />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<ReviewInfo />} />
          <Route path="/appointmentsuccess" element={<ReviewInfo />} />
          <Route path="/servererror" element={<ServerError />} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}
