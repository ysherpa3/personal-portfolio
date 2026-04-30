"use server";

export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
}) {
  const siteUrl = process.env.URL;
  if (!siteUrl) throw new Error("Missing site URL");

  const res = await fetch(siteUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      "form-name": "contact",
      name: data.name,
      email: data.email,
      message: data.message,
    }).toString(),
  });

  if (!res.ok) throw new Error("Submission failed");
}
