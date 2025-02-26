import { Html } from "@react-email/components";
export default function EmailTemplate({
  subject,
  sender,
  message,
  email,
}: {
  subject: string;
  sender: string;
  message: string;
  email: string;
}) {
  return (
    <Html lang="sr">
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          background: "#f8f8f8",
        }}
      >
        <h1
          style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 600 }}
        >
          {subject}
        </h1>
        <p style={{ textAlign: "center", margin: "20px 0" }}>{message}</p>

        <p
          style={{
            textAlign: "right",
            fontSize: "1rem",
            fontWeight: 500,
            lineHeight: "1rem",
          }}
        >
          {sender}
        </p>
        <p
          style={{
            textAlign: "right",
            fontSize: "0.9rem",
            fontWeight: 300,
            lineHeight: "1rem",
          }}
        >
          {email}
        </p>
      </div>
    </Html>
  );
}
