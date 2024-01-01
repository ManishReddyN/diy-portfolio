import type { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

type MessageParams = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const NOTION_API_KEY = process.env.NOTION_API_KEY?.toString() as string;
const NOTION_DB_ID = process.env.NOTION_DB_ID?.toString() as string;
const NOTION_USER_ID = process.env.NOTION_USER_ID?.toString() as string;
const NOTION_API_ENDPOINT = "https://api.notion.com/v1/pages";
const NOTION_HEADERS = {
  Authorization: NOTION_API_KEY,
  "Content-Type": "application/json",
  "Notion-Version": "2022-06-28",
};

export default async function sendMessage(req: NextRequest) {
  const body: MessageParams = await req.json();
  const validationError = validateBody(body);
  if (validationError) {
    return new Response("Invalid request", {
      status: 400,
      statusText: validationError.message,
    });
  }
  const response = await fetch(NOTION_API_ENDPOINT, {
    method: "POST",
    headers: NOTION_HEADERS,
    body: JSON.stringify(createNotionRequest(body)),
  });
  return validateResponse(response);

  function validateBody(body: MessageParams) {
    if (!body.name || !body.email || !body.subject || !body.message) {
      return {
        message:
          "Whoops! It looks like you missed something. Please make sure to fill in all the fields before moving forward.",
      };
    }
    if (!isValidEmail(body.email)) {
      return {
        message:
          "Oops! The email ID you entered seems to be improper. Please try again.",
      };
    }
    if (body.message.length < 50) {
      const remainingCharacters = 50 - body.message.length;
      return {
        message: `Your message is too short. Please add at least ${remainingCharacters} more character${
          remainingCharacters === 1 ? "" : "s"
        }.`,
      };
    }
    return null;
  }
  function createNotionRequest(body: MessageParams): any {
    return {
      parent: {
        database_id: NOTION_DB_ID,
      },
      icon: {
        emoji: "✉️",
      },
      properties: {
        Name: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: body.name,
              },
            },
          ],
        },
        Email: {
          type: "email",
          email: body.email,
        },
        Date: {
          type: "date",
          date: {
            start: getCurrentDate(),
          },
        },
        Message: {
          type: "rich_text",
          rich_text: [
            {
              type: "text",
              text: {
                content: body.message,
              },
            },
          ],
        },
        Mention: {
          type: "people",
          people: [
            {
              id: NOTION_USER_ID,
            },
          ],
        },
        Subject: {
          type: "title",
          title: [
            {
              type: "text",
              text: {
                content: body.subject,
              },
            },
          ],
        },
      },
    };
  }
  async function validateResponse(response: Response) {
    if (response.ok) {
      return new Response(
        "Your message has been sent successfully. We'll get back to you as soon as possible. Thank you!",
        { status: 200 }
      );
    } else {
      console.error(await response.json());
      return new Response("Internal server error", {
        status: 500,
        statusText:
          "Oops! Something went wrong, and we couldn't send your message. It's not you, it's us. Our team has been notified, but you can try again in a moment.",
      });
    }
  }
  function isValidEmail(email: string) {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(emailRegex);
  }
  function getCurrentDate() {
    return new Date(Date.now()).toISOString();
  }
}
