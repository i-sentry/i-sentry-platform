import React from "react";
import {
  Body,
  // Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  // Section,
  Text,
} from "@react-email/components";

type IContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  track: string;
  country: string;
  phone: string;
};

const InternFormEmail: React.FC<IContactForm> = ({ firstName, track }) => {
  return (
    <>
      <Html lang="en" dir="ltr">
        <Head />
        <Preview>
          Thank you for applying to ISentry Technologies Internship! We&apos;ve
          received your application and will review it soon.
        </Preview>

        <Body style={main}>
          <Container style={container}>
            <Img
              src={`https://isentry.netlify.app/_next/static/media/isentry.4df0976c.svg`}
              width="170"
              height="50"
              alt="Koala"
              style={logo}
            />
            <Text style={paragraph}>Dear {firstName}</Text>
            <Text style={paragraph}>
              Thank you for applying for the {track} internship
              position at ISentry Technologies. We have received your
              application and will review it shortly.
            </Text>
            <Text style={paragraph}>
              Our team will contact you if your qualifications match our
              requirements. In the meantime, feel free to reach out to us at
              <Link
                style={{ textDecoration: "underline", color: "#8bb0d5" }}
                href="https://wa.link/by898v"
              >
                +2349122413819
              </Link>{" "}
              for any questions.
            </Text>
            <Text style={paragraph}>
              We appreciate your interest in joining ISentry Technologies and
              wish you all the best.
            </Text>
            <Text style={paragraph}>
              We appreciate your interest and look forward to assisting you.
            </Text>
            <Text style={paragraph}></Text>

            <Text style={paragraph}>
              Best Regards,
              <br />
              The ISentry Team
            </Text>
            <Hr style={hr} />
            {/* <Text style={footer}>
              470 Noor Ave STE B #1148, South San Francisco, CA 94080
            </Text> */}
          </Container>
        </Body>
      </Html>
    </>
  );
};

export default InternFormEmail;

const main = {
  backgroundColor: "#030b1b",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#fff",
};

// const btnContainer = {
//   textAlign: "center" as const,
// };

// const button = {
//   backgroundColor: "#5F51E8",
//   borderRadius: "3px",
//   color: "#fff",
//   fontSize: "16px",
//   textDecoration: "none",
//   textAlign: "center" as const,
//   display: "block",
//   padding: "12px",
// };

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

// const footer = {
//   color: "#8898aa",
//   fontSize: "12px",
// };
